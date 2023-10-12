const fs = require('fs-extra');
const readline = require('readline-sync');

// Function to create a backup of the source directory
function createBackup(sourceDir, backupDir) {
  try {
    fs.copySync(sourceDir, backupDir);
    console.log('Backup created successfully.');
  } catch (err) {
    console.error('Error creating backup:', err);
  }
}

// Function to restore files from the backup directory to the source directory
function restoreBackup(backupDir, sourceDir) {
  try {
    fs.copySync(backupDir, sourceDir, { overwrite: true });
    console.log('Files restored successfully.');
  } catch (err) {
    console.error('Error restoring backup:', err);
  }
}

// Entry point
function main() {
  const sourceDir = readline.question('Enter the source directory path: ');
  const backupDir = readline.question('Enter the backup directory path: ');

  createBackup(sourceDir, backupDir);

  const restoreOption = readline.question('Do you want to restore files from the backup? (yes/no): ');
  if (restoreOption.toLowerCase() === 'yes') {
    restoreBackup(backupDir, sourceDir);
  }
}

main();
