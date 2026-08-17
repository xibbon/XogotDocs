#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const outputDirectory = process.argv[2];

if (!outputDirectory) {
  console.error("Usage: node scripts/group_engine_reference.js <static-site-directory>");
  process.exit(1);
}

const indexPath = path.join(outputDirectory, "index", "index.json");
const engineReferencePath = path.join(
  outputDirectory,
  "data",
  "documentation",
  "xogot",
  "engine-reference.json"
);

if (!fs.existsSync(indexPath) || !fs.existsSync(engineReferencePath)) {
  console.error("The static site is missing its navigator index or Engine Reference data.");
  process.exit(1);
}

const navigatorIndex = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const engineReference = JSON.parse(fs.readFileSync(engineReferencePath, "utf8"));

const engineChildren = [];

for (const section of engineReference.topicSections ?? []) {
  const articles = (section.identifiers ?? [])
    .map((identifier) => engineReference.references?.[identifier])
    .filter((reference) => reference?.url && reference?.title)
    .map((reference) => ({
      path: reference.url,
      title: reference.title,
      type: "article",
    }));

  if (articles.length === 0) {
    continue;
  }

  engineChildren.push(
    {
      title: section.title,
      type: "groupMarker",
    },
    ...articles
  );
}

if (engineChildren.length === 0) {
  console.error("Engine Reference contains no resolved articles.");
  process.exit(1);
}

for (const roots of Object.values(navigatorIndex.interfaceLanguages ?? {})) {
  const xogotRoot = roots.find(
    (item) => item.path?.toLowerCase() === "/documentation/xogot"
  );

  if (!xogotRoot) {
    continue;
  }

  xogotRoot.children = (xogotRoot.children ?? []).filter(
    (item) => item.path !== "/documentation/xogot/engine-reference"
  );

  const existingMarker = xogotRoot.children.findIndex(
    (item) => item.type === "groupMarker" && item.title === "Engine Reference"
  );
  if (existingMarker >= 0) {
    xogotRoot.children.splice(existingMarker, 1);
  }

  xogotRoot.children.push({
    children: engineChildren,
    path: "/documentation/xogot/engine-reference",
    title: "Engine Reference",
    type: "article",
  });
}

fs.writeFileSync(indexPath, JSON.stringify(navigatorIndex));
console.log(`Grouped ${engineChildren.length} Engine Reference navigator entries.`);
