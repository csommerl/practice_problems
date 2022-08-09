/*
Extract the domain name from a URL
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
*/

// function domainName(url) {
//   let domain = url;

//   if (domain.startsWith('https://')) {
//     domain = domain.slice(8);
//   }

//   if (domain.startsWith('http://')) {
//     domain = domain.slice(7);
//   }

//   if (domain.startsWith('www.')) {
//     domain = domain.slice(4);
//   }

//   return domain.slice(0, domain.indexOf('.'));
// }

function domainName(url) {
  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')[0];
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"