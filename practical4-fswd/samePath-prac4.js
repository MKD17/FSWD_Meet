  import { createInterface } from 'readline';
  import { resolve } from 'path';
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function arePathsEqual(path1, path2) {
    const absolutePath1 = resolve(path1);
    const absolutePath2 = resolve(path2);
    return absolutePath1 === absolutePath2;
  }
  rl.question('Enter the first file path: ', (path1) => {
    rl.question('Enter the second file path: ', (path2) => {
      const pathsEqual = arePathsEqual(path1, path2);
      if (pathsEqual) {
        console.log('The paths refer to the same file.');
      } else {
        console.log('The paths do not refer to the same file.');
      }
      rl.close();
    });
  });