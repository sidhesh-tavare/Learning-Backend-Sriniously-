const http = require('http');
const port = 3000;
const ip = "127.0.0.1";
const product = {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      }};
const server= http.createServer((req,res)=>{
    const path = req.url;
    if (path===`/product`){
        res.statusCode=200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(product));
    }
})

server.listen(port,ip, () => {
    console.log(`Listening on http://${ip}:${port}`);
});