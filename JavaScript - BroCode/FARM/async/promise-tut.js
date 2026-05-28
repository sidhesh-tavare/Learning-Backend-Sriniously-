const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Data Received");
    }
    else{
        reject("Something Failed");
    }
});

const printer = myPromise
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);})


