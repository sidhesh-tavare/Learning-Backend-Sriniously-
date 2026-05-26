const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require(`./modules/replace`);
const slugify = require(`slugify`);

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf8",
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/cardtemp.html`,
  "utf8",
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf8",
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
const dataObj = JSON.parse(data);
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
const dataWithSlugs = dataObj.map((el, i) => ({ ...el, slug: slugs[i] }));
// console.log(dataWithSlugs);
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // console.log(query);
  // console.log(pathname);
  console.log(query);
  const extslug = pathname.split("/")[2];

  if (pathname == "/" || pathname == `/overview`) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const cardHTML = dataWithSlugs.map((el) => replaceTemplate(tempCard, el));
    const cards = cardHTML.join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cards);
    res.end(output);
  } else if (pathname.startsWith(`/product`)) {
    const product = dataWithSlugs.find((el) => el.slug === extslug);
    console.log(!product);
    if (product) {
      const output = replaceTemplate(tempProduct, product);
      res.end(output);
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>Page ${pathname} not found</h1>`);
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Page ${pathname} not found</h1>`);
    // const idx = dataWithSlugs.find(el=>el.slug===extslug);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
