#!/usr/bin/env bash
set -euo pipefail

OUTPUT_DIR="docs-local"

usage() {
  cat <<'EOF'
Build and transform the static Xogot DocC site locally.

Usage:
  scripts/preview-pages.sh [--output-dir DIR]

Options:
  --output-dir DIR  Output directory for generated static site (default: docs-local)
  -h, --help        Show this help text
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --output-dir)
      OUTPUT_DIR="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT_PATH="$REPO_ROOT/$OUTPUT_DIR"

for cmd in xcodebuild xcrun; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Missing required command: $cmd" >&2
    exit 1
  fi
done

TMP_DIR="$(mktemp -d /tmp/xogotdocs-preview.XXXXXX)"
trap 'rm -rf "$TMP_DIR"' EXIT

DERIVED_DATA_PATH="$TMP_DIR/docbuild"
DOCC_ARCHIVE_PATH="$DERIVED_DATA_PATH/Build/Products/Debug/Xogot.doccarchive"
TEMPLATE_PATH="$TMP_DIR/docs-template"
DOCC_COPY="$TMP_DIR/Documentation.docc"

rm -rf "$OUTPUT_PATH"
mkdir -p "$OUTPUT_PATH"

echo "Building DocC archive with xcodebuild..."
xcodebuild docbuild CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO -scheme Xogot \
  -derivedDataPath "$DERIVED_DATA_PATH" \
  -destination 'generic/platform=macOS'

echo "Transforming archive for static hosting..."
"$(xcrun --find docc)" process-archive \
  transform-for-static-hosting "$DOCC_ARCHIVE_PATH" \
  --hosting-base-path / \
  --output-path "$OUTPUT_PATH"

echo "Preparing custom template bundle..."
cp -R "$REPO_ROOT/Documentation.docc" "$DOCC_COPY"
rm -f "$DOCC_COPY/Documentation.md"

if [[ -n "${GOOGLE_ANALYTICS_ID:-}" && -n "${GOOGLE_TAG_MANAGER_ID:-}" ]]; then
  sed -i '' "s/__GA_ID__/${GOOGLE_ANALYTICS_ID}/g" "$DOCC_COPY/header.html"
  sed -i '' "s/__GTM_ID__/${GOOGLE_TAG_MANAGER_ID}/g" "$DOCC_COPY/header.html"
fi

echo "Generating custom-template index..."
"$(xcrun --find docc)" convert \
  --experimental-enable-custom-templates \
  --hosting-base-path / \
  --output-path "$TEMPLATE_PATH" "$DOCC_COPY"

echo "Applying local transform customizations..."
find "$OUTPUT_PATH" -name index.html -exec cp "$TEMPLATE_PATH/index.html" {} \;

while IFS= read -r -d '' file; do
  if grep -q 'e\.currentLanguage\.name' "$file"; then
    count="$(grep -o 'e\.currentLanguage\.name' "$file" | wc -l | tr -d ' ')"
    sed -i '' 's/e\.currentLanguage\.name/"GDScript"/g' "$file"
    echo "[$file] Replaced $count occurrences"
  fi
done < <(find "$OUTPUT_PATH" -name '*.js' -print0)

cp "$REPO_ROOT/Documentation.docc/Resources"/favicon.* "$OUTPUT_PATH"
cp "$REPO_ROOT/Documentation.docc/Resources"/*.css "$OUTPUT_PATH/css"
cp "$REPO_ROOT/Documentation.docc/Resources"/*.js "$OUTPUT_PATH/js"
cp "$REPO_ROOT/Documentation.docc/Resources/xogot-logo-white.png" "$OUTPUT_PATH/img"
cp "$REPO_ROOT/Documentation.docc/Resources/xogot-logo-black.png" "$OUTPUT_PATH/img"

echo '<script>window.location.href += "/documentation/xogot"</script>' > "$OUTPUT_PATH/index.html"
(cd "$OUTPUT_PATH" && find . -name '*html' | sed -e 's,^.,https://docs.xogot.com,') > "$OUTPUT_PATH/sitemap.txt"

echo "Build + transform complete: $OUTPUT_PATH"
echo "Next: ./scripts/host-preview-pages.sh --dir \"$OUTPUT_DIR\""
