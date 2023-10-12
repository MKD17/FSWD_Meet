const fs = require('fs');

// Function to compare the contents of two files
function compareFiles(file1Path, file2Path) {
  try {
    // Read the contents of the first file
    const file1 = fs.readFileSync(file1Path, 'utf8');

    // Read the contents of the second file
    const file2 = fs.readFileSync(file2Path, 'utf8');

    // Compare the sizes of the files
    const file1Size = Buffer.byteLength(file1, 'utf8');
    const file2Size = Buffer.byteLength(file2, 'utf8');

    if (file1Size > file2Size) {
      console.log(`${file1Path} is larger than ${file2Path}`);
    } else if (file1Size < file2Size) {
      console.log(`${file2Path} is larger than ${file1Path}`);
    } else {
      console.log(`${file1Path} and ${file2Path} have the same size`);
    }

    // Split the contents of the files into lines
    const linesFile1 = file1.split('\n');
    const linesFile2 = file2.split('\n');

    // Compare the lines of the files
    for (let i = 0; i < linesFile1.length || i < linesFile2.length; i++) {
      if (linesFile1[i] !== linesFile2[i]) {
        console.log(`Line ${i + 1}:`);
        console.log(`${file1Path}: ${linesFile1[i]}`);
        console.log(`${file2Path}: ${linesFile2[i]}`);
        console.log('------------------');
      }
    }
  } catch (err) {
    console.error('Error comparing files:', err.message);
  }
}

// Usage example
const file1Path = 'f1.txt';
const file2Path = 'file2.txt';
compareFiles(file1Path, file2Path);
