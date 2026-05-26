module.exports =(temp,product)=>{
let output = temp.replace(/{%ProductName%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%ProductPrice%}/g, product.price);
    output = output.replace(/{%ProductQty%}/g, product.quantity);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%ProductFrom%}/g, product.from);
    if (!product.organic){
      output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    }
    output = output.replace(/{%ProductVit%}/g, product.nutrients);
    output = output.replace(/{%ProductDesc%}/g, product.description);
    output = output.replace(/{%ProductSlug%}/g, product.slug);
    return output;
};