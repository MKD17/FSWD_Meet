const fs = require('fs');

// Function to create a new file
function createFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log(`File "${filename}" created successfully.`);
    }
  });
}

// Function to read a file
function readFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(`Content of "${filename}":\n${data}`);
    }
  });
}

// Function to append data to a file
function appendFile(filename, content) {
  fs.appendFile(filename, content, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
    } else {
      console.log(`Data appended to "${filename}" successfully.`);
    }
  });
}

// Function to delete a file
function deleteFile(filename) {
  fs.unlink(filename, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log(`File "${filename}" deleted successfully.`);
    }
  });
}

// Function to rename a file
function renameFile(oldName, newName) {
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error('Error renaming file:', err);
    } else {
      console.log(`File "${oldName}" renamed to "${newName}" successfully.`);
    }
  });
}

// Function to list files and directories in a directory
function listFilesAndDirs(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error listing files and directories:', err);
    } else {
      console.log(`Listing files and directories in "${directory}":`);
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
}

// Entry point
function main() {
  const filename = 'example.txt';
  const content = 'This is a sample content.\n';

  createFile(filename, content);

  readFile(filename);

  const additionalContent = 'This content is appended.\n';
  appendFile(filename, additionalContent);

  readFile(filename);

  const newFilename = 'renamed_example.txt';
  renameFile(filename, newFilename);

  listFilesAndDirs('./');

  deleteFile(newFilename);
}

main();
