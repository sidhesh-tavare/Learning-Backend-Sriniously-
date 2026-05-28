const fs=require("fs");

const stream=
fs.createReadStream("big.txt");

stream.on("data",(chunk)=>{
    console.log("################CHUNK################");
   console.log(
      chunk.toString()
   );
});

stream.on("end",()=>{
   console.log("Done");
});

stream.on("error",(err)=>{
   console.log(err);
});