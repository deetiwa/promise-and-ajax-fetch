// promise resolve=> then method always return promise

const myPromise = Promise.resolve();

Promise.resolve(5).then(value=>{console.log(value)})


// promise chaining

function add()
{
    return new Promise((resolve, reject)=>{

        resolve ("foo");
    })
}

add().then((value)=>{

    console.log(value);

    value += "bar";

    return value;           // return promise not a value, if not use return keyword output will be undefined  
})

.then((value) =>{

console.log(value)
})