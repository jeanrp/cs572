const dns = require('dns');
const util = require('util'); 

const promiseResolve = util.promisify(dns.resolve4);

resolve();

 async function resolve()
 {
     try {
         const result  = await promiseResolve('www.mum.edu');
         console.log(result); 
     } catch (error) {
         console.log(error);
     }
 }