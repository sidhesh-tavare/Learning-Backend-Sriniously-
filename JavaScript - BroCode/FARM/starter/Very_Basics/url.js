const myUrl = new URL('https://example.com:8080/shop/products?category=shoes&sort=price#reviews');

console.log(myUrl.hostname); // 'example.com'
console.log(myUrl.pathname); // '/shop/products' (Great for routing!)
console.log(myUrl.port);     // '8080'

const incomingUrl = new URL('https://api.mysite.com:9000/users?search=John%20Doe&limit=10');
console.log(incomingUrl);
const protocol = incomingUrl.protocol;
const params = incomingUrl.search;
const searchTerm = incomingUrl.searchParams.get('search'); 
const limit = incomingUrl.searchParams.get('limit');

console.log(searchTerm); // 'John Doe'
console.log(limit);      // '10'
console.log(protocol);
console.log(params);
const paramlist = incomingUrl.searchParams
console.log(paramlist);

myUrl.searchParams.forEach((value, key) => {
  console.log(`${key} -> ${value}`);
});

const url = new URL('https://api.example.com/products?category=shoes');

// 1. Updating an existing key
url.searchParams.set('category', 'boots'); 

// 2. Adding a completely new key
url.searchParams.set('page', '3'); 

console.log(url.toString());
// Output: category=boots&page=3