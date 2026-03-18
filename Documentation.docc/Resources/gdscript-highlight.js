// GDScript syntax highlighter for DocC
// Watches for code-listing blocks and applies GDScript-aware tokenization
// using DocC's existing syntax-* CSS classes.
(() => {
  const CLS = "syntax-";

  // GDScript keywords (Godot 4)
  const KEYWORDS = new Set([
    "and", "as", "assert", "await", "break", "breakpoint", "class",
    "class_name", "const", "continue", "elif", "else", "enum", "extends",
    "for", "func", "if", "in", "is", "match", "not", "or", "pass",
    "return", "signal", "static", "super", "var", "while", "yield",
    "when",
  ]);

  const LITERALS = new Set(["true", "false", "null", "self", "PI", "TAU", "INF", "NAN"]);

  const BUILTIN_TYPES = new Set([
    "void", "bool", "int", "float", "String", "StringName", "NodePath",
    "Vector2", "Vector2i", "Vector3", "Vector3i", "Vector4", "Vector4i",
    "Color", "Rect2", "Rect2i", "Transform2D", "Transform3D",
    "Basis", "Quaternion", "AABB", "Plane", "Projection",
    "Array", "Dictionary", "PackedByteArray", "PackedInt32Array",
    "PackedInt64Array", "PackedFloat32Array", "PackedFloat64Array",
    "PackedStringArray", "PackedVector2Array", "PackedVector3Array",
    "PackedColorArray", "PackedVector4Array",
    "Callable", "Signal", "RID", "Object", "Variant",
  ]);

  const BUILTIN_FUNCS = new Set([
    "abs", "absf", "absi", "acos", "asin", "atan", "atan2",
    "ceil", "ceilf", "ceili", "clamp", "clampf", "clampi",
    "cos", "db_to_linear", "deg_to_rad", "ease",
    "error_string", "exp", "floor", "floorf", "floori",
    "fmod", "fposmod", "hash",
    "instance_from_id", "inverse_lerp", "is_equal_approx",
    "is_inf", "is_instance_id_valid", "is_instance_valid",
    "is_nan", "is_same", "is_zero_approx",
    "lerp", "lerpf", "lerp_angle", "linear_to_db", "log",
    "max", "maxf", "maxi", "min", "minf", "mini",
    "move_toward", "nearest_po2",
    "pingpong", "posmod", "pow", "print", "print_rich",
    "print_verbose", "printerr", "prints", "printt",
    "push_error", "push_warning",
    "rad_to_deg", "randf", "randf_range", "randfn",
    "randi", "randi_range", "randomize",
    "remap", "rid_allocate_id", "rid_from_int64",
    "round", "roundf", "roundi", "seed",
    "sign", "signf", "signi", "sin", "smoothstep",
    "snapped", "snappedf", "snappedi", "sqrt",
    "step_decimals", "str", "str_to_var",
    "tan", "typeof", "var_to_bytes", "var_to_str",
    "weakref", "wrap", "wrapf", "wrapi",
    "load", "preload", "range", "len", "type_string",
  ]);

  function esc(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function span(cls, text) {
    return `<span class="${CLS}${cls}">${esc(text)}</span>`;
  }

  function prevNonSpaceChar(line, index) {
    for (let i = index - 1; i >= 0; i--) {
      if (!/\s/.test(line[i])) return line[i];
    }
    return "";
  }

  function nextNonSpaceChar(line, index) {
    for (let i = index; i < line.length; i++) {
      if (!/\s/.test(line[i])) return line[i];
    }
    return "";
  }

  // Tokenize a single line of GDScript, returning HTML with syntax-* spans.
  function tokenizeLine(line) {
    if (!line) return line;

    const parts = [];
    let i = 0;

    while (i < line.length) {
      // Comment
      if (line[i] === "#") {
        parts.push(span("comment", line.slice(i)));
        i = line.length;
        continue;
      }

      // Strings: ", ', """, '''
      if (line[i] === '"' || line[i] === "'") {
        const q = line[i];
        const triple = line.slice(i, i + 3) === q + q + q;
        const delim = triple ? q + q + q : q;
        let end = i + delim.length;
        while (end < line.length) {
          if (line[end] === "\\" && end + 1 < line.length) {
            end += 2;
            continue;
          }
          if (line.slice(end, end + delim.length) === delim) {
            end += delim.length;
            break;
          }
          end++;
        }
        parts.push(span("string", line.slice(i, end)));
        i = end;
        continue;
      }

      // &"StringName" or &'StringName'
      if (line[i] === "&" && (line[i + 1] === '"' || line[i + 1] === "'")) {
        const q = line[i + 1];
        let end = i + 2;
        while (end < line.length && line[end] !== q) {
          if (line[end] === "\\") end++;
          end++;
        }
        if (end < line.length) end++;
        parts.push(span("string", line.slice(i, end)));
        i = end;
        continue;
      }

      // ^"NodeName"
      if (line[i] === "^" && line[i + 1] === '"') {
        let end = i + 2;
        while (end < line.length && line[end] !== '"') {
          if (line[end] === "\\") end++;
          end++;
        }
        if (end < line.length) end++;
        parts.push(span("string", line.slice(i, end)));
        i = end;
        continue;
      }

      // $NodePath
      if (line[i] === "$") {
        let end = i + 1;
        while (end < line.length && /[\w/.]/.test(line[end])) end++;
        if (end > i + 1) {
          parts.push(span("built_in", line.slice(i, end)));
          i = end;
          continue;
        }
      }

      // Numbers: 0x, 0b, float, int
      if (/[0-9]/.test(line[i]) || (line[i] === "." && i + 1 < line.length && /[0-9]/.test(line[i + 1]))) {
        let end = i;
        if (line[end] === "0" && (line[end + 1] === "x" || line[end + 1] === "X")) {
          end += 2;
          while (end < line.length && /[0-9a-fA-F_]/.test(line[end])) end++;
        } else if (line[end] === "0" && (line[end + 1] === "b" || line[end + 1] === "B")) {
          end += 2;
          while (end < line.length && /[01_]/.test(line[end])) end++;
        } else {
          while (end < line.length && /[0-9_]/.test(line[end])) end++;
          if (end < line.length && line[end] === ".") {
            end++;
            while (end < line.length && /[0-9_]/.test(line[end])) end++;
          }
          if (end < line.length && (line[end] === "e" || line[end] === "E")) {
            end++;
            if (end < line.length && (line[end] === "+" || line[end] === "-")) end++;
            while (end < line.length && /[0-9_]/.test(line[end])) end++;
          }
        }
        parts.push(span("number", line.slice(i, end)));
        i = end;
        continue;
      }

      // Annotations: @export, @onready, @tool, etc.
      if (line[i] === "@") {
        let end = i + 1;
        while (end < line.length && /\w/.test(line[end])) end++;
        if (end > i + 1) {
          parts.push(span("keyword", line.slice(i, end)));
          i = end;
          continue;
        }
      }

      // Identifiers and keywords
      if (/[a-zA-Z_]/.test(line[i])) {
        let end = i;
        while (end < line.length && /\w/.test(line[end])) end++;
        const word = line.slice(i, end);
        const prev = prevNonSpaceChar(line, i);
        const next = nextNonSpaceChar(line, end);

        if (KEYWORDS.has(word)) {
          parts.push(span("keyword", word));
          // If 'func' or 'class' or 'signal' or 'enum', look ahead for the name
          if (word === "func" || word === "class" || word === "signal" || word === "enum") {
            const after = line.slice(end);
            const m = after.match(/^(\s+)(\w+)/);
            if (m) {
              parts.push(esc(m[1]));
              parts.push(span("title", m[2]));
              end += m[0].length;
            }
          }
        } else if (LITERALS.has(word)) {
          parts.push(span("literal", word));
        } else if (BUILTIN_TYPES.has(word)) {
          parts.push(span("type", word));
        } else if (BUILTIN_FUNCS.has(word) && next === "(") {
          parts.push(span("built_in", word));
        } else if (next === "(") {
          // Highlight general function and method calls, not just global built-ins.
          parts.push(span("built_in", word));
        } else if (prev === "." && /^[A-Z][A-Z0-9_]*$/.test(word)) {
          // Built-in constants such as Vector2.UP are colored distinctly in Godot docs.
          parts.push(span("built_in", word));
        } else {
          parts.push(esc(word));
        }
        i = end;
        continue;
      }

      // Anything else: operators, whitespace, punctuation
      parts.push(esc(line[i]));
      i++;
    }

    return parts.join("");
  }

  // Process a single code-listing element.
  function highlightListing(el) {
    if (el.dataset.gdscriptHighlighted) return;
    const lines = el.querySelectorAll(".code-line");
    if (!lines.length) return;

    for (const lineEl of lines) {
      const text = lineEl.textContent;
      lineEl.innerHTML = tokenizeLine(text);
    }
    el.dataset.gdscriptHighlighted = "true";
  }

  // Find and highlight all eligible code listings.
  function highlightAll() {
    const selectors = [
      '.code-listing[data-syntax="gdscript"]',
      '.code-listing[data-syntax="gd"]',
      '.code-listing[data-syntax="python"]',
      '.code-listing:not([data-syntax])',
      '.code-listing[data-syntax=""]',
    ];
    for (const sel of selectors) {
      for (const el of document.querySelectorAll(sel)) {
        highlightListing(el);
      }
    }
    // Also handle collapsible code listings (tutorials)
    for (const el of document.querySelectorAll(".collapsible-code-listing")) {
      if (el.dataset.gdscriptHighlighted) continue;
      const lines = el.querySelectorAll(".code-line");
      if (!lines.length) continue;
      for (const lineEl of lines) {
        lineEl.innerHTML = tokenizeLine(lineEl.textContent);
      }
      el.dataset.gdscriptHighlighted = "true";
    }
  }

  // Observe DOM for Vue-rendered code blocks (client-side navigation).
  const observer = new MutationObserver(() => {
    highlightAll();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      highlightAll();
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    highlightAll();
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
