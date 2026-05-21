//String Methods 

let user = " BroCode"
console.log(user.charAt(0));
console.log(user.charCodeAt(0));
console.log(user.indexOf("B"));
console.log(user.concat(" is GOAT "));
console.log(user.toUpperCase());
console.log(user.repeat(3));
console.log(user.startsWith("Bro"));
console.log(user.trim());
console.log(user.includes(" "));

let phone = "+91-8805211826"
console.log(phone.replace("-",""));
console.log(phone.padEnd(20,"0"));
console.log(phone.padStart(20,"0"));

let tags = "html,css,js,python"
let taglist = []
taglist = tags.split(",")
console.log(taglist);
console.log(taglist.join(" & "));

console.log(user.slice(0,4)); // end is non inclusive 

let bio = "I love cats. cats are great.";
console.log(bio.replace("cats","dogs"));
console.log(bio.replaceAll("cats","dogs"));
