const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject)=>{       

if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")) 
{
    resolve({value:"Fried Rice"}); 
}
else
{
    reject("Something Missing Bucket");  
}
}) 

friedRicePromise.then((myfriedRice)=>{

    console.log("lets eat", myfriedRice);  
})
.catch ((error)=>{console.log(error)})  

setTimeout(()=>                           
{
    console.log("Hello from SetTimeout")
},1000)

for(let i=0; i<=10; i++)
{
    console.log(Math.random(), i);
}