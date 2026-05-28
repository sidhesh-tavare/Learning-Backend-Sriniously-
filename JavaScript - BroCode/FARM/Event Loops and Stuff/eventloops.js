console.log("A starting of code");

setTimeout(() => console.log("timeout for 0 seconds"),0);
setTimeout(() => console.log("timeout for 1 second"),1000);

setImmediate(() => console.log("immediate : when event loop is available"));

process.nextTick(() => console.log("nextTick : run before moving to next event loop phase "));

Promise.resolve().then(() => console.log("promise : thsi is pushed into microtask queue and executed first before the next even tloop cycle or phase"));

console.log("B ending of code");