// fetch

const URL = "https://jsonplaceholder.typicode.com/post";

fetch (URL)

.then(Response =>{

    if(Response.ok)
    {
    return Response.json()
    }
    else
    {
        throw new error ("somethng wrong");
    }
})

.then(data => {

    console.log(data);
})

.catch (error =>{

    console.log("Inside Catch");
    console.log(error);
})