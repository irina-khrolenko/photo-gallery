const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const sourceFolders = [
  path.resolve(__dirname, "./generated-interfaces/api"),
  path.resolve(__dirname, "./generated-interfaces/common"),
];
const targetFolder = "../frontend/sharedTypes";

const indexFilePath = path.join(targetFolder, "index.d.ts");

if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder, { recursive: true });
}

if (!fs.existsSync(indexFilePath)) {
  fs.writeFileSync(indexFilePath, "", "utf8");
}

function extractTypesFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.ESNext,
    true
  );
  const typeDeclarations = [];

  function visit(node) {
    if (
      ts.isInterfaceDeclaration(node) ||
      ts.isTypeAliasDeclaration(node) ||
      ts.isEnumDeclaration(node)
    ) {
      let declaration = node.getFullText(sourceFile).trim();
      declaration = declaration.replace(/^export\s+/m, "");
      typeDeclarations.push(declaration);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return `declare global {\n${typeDeclarations.join("\n")}\n}\n\nexport {};`;
}

function addReferenceToIndex(fileName) {
  const referencePath = `/// <reference path="./${fileName}" />`;
  const indexContent = fs.readFileSync(indexFilePath, "utf8");

  if (!indexContent.includes(referencePath)) {
    fs.appendFileSync(indexFilePath, `${referencePath}\n`);
  }
}

function processFilesFromFolder(folderPath) {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".ts"));

  files.forEach((file) => {
    const sourceFilePath = path.join(folderPath, file);
    const targetFileName = file.replace(".ts", ".d.ts");
    const targetFilePath = path.join(targetFolder, targetFileName);

    const typesContent = extractTypesFromFile(sourceFilePath);
    fs.writeFileSync(targetFilePath, typesContent);
    addReferenceToIndex(targetFileName);
  });
}
sourceFolders.forEach((folder) => processFilesFromFolder(folder));
