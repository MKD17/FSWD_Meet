const fs = require('fs-extra');

function createFolderStructure(data, basePath) {
  Object.entries(data).forEach(([name, content]) => {
    const currentPath = `${basePath}/${name}`;

    if (typeof content === 'string') {
      fs.writeFileSync(currentPath, content);
      console.log(`Created file: ${currentPath}`);
    } else {
      fs.mkdirSync(currentPath);
      console.log(`Created folder: ${currentPath}`);
      createFolderStructure(content, currentPath);
    }
  });
}

function main() {
  const jsonData = require('./folder_structure.json');
  const basePath = './output';

  try {
    fs.ensureDirSync(basePath);
    createFolderStructure(jsonData.root, basePath);
    console.log('Folder structure created successfully.');
  } catch (err) {
    console.error('Error creating folder structure:', err);
  }
}

main();
