import url from 'url';
const baseUrl = 'https://www.example.com/subdirectory/' ;
const relativePath = '../page.html';
const parsedBaseUrl = new URL(baseUrl);
const resolvedUrl = new URL(relativePath, parsedBaseUrl);
console.log('Absolute URL:', resolvedUrl.href);
