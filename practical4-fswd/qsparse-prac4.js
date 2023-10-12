import { parse } from 'node:querystring';
import { parse as _parse } from 'node:url';
const a="https://www.amazon.com/s?k=laptop&ref=nb_sb_noss"
const p=parse(_parse(a).query);
console.log(p)
