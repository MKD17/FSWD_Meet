import { createInterface } from 'readline';
import { parse } from 'url';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a URL: ', (userInput) => {
  const parsedUrl = parse(userInput);

  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);
  
  if (parsedUrl.query) {
    const queryParams = new URLSearchParams(parsedUrl.query);
    console.log('Query Parameters:');
    queryParams.forEach((value, key) => {
      console.log(`  ${key}: ${value}`);
    });
  } else {
    console.log('No Query Parameters.');
  }

  rl.close();
});
