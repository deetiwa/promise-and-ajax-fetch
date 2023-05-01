//Promise=> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:
//1.pending: initial state, neither fulfilled nor rejected.
//2.fulfilled: meaning that the operation was completed successfully.
//3.rejected: meaning that the operation failed.

// Step:1 Promise Create

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject)=>{        //pass function call executer function

if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")) 
{
    resolve("Fried Rice"); // pass String, Object & array
}
else
{
    reject("Something Missing Bucket");  
}
}) 

// Step:2 Promise consume => this work will be done by browser

friedRicePromise.then((myfriedRice)=>{

    console.log("lets eat", myfriedRice);  // when promise resolve
})
.catch ((error)=>{console.log(error)})  // when promise reject

for(let i=0; i<=10; i++)
{
    console.log(Math.random(), i);
}
