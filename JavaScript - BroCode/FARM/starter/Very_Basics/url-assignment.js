const url = new URL(`https://mystore.com/api/products?category=electronics&discount=10&discount=20&tracking_id=abc999`);
//TASKS :
// 1) Extract Cateory 2) Handle Duplicate and extract discounts //3) Delete Tracking ID // 4) Update category:electronics=>computers // add page ==1 // print final url 

const urlparams = url.searchParams;
const category = urlparams.get('category');
console.log(`The Category is ${category}`);
const discounts = urlparams.getAll('discount');
console.log(discounts);
url.searchParams.delete('tracking_id');
url.searchParams.append("page",1);
url.searchParams.set("category","computers");
console.log(`The New URL is ${url.toString()}`);

