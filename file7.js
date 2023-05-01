// AJAX => asynchronous javascript and XML is a set of 'web devlopment techniques' on the client side.
// XML => use data in XML formate, we use JSON now.
// we have 3 most common ways to create and send request to server.(a).xmlHTTPRequest, (b). fetch API, (c).axios


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

xhr.open("GET", URL);

// console.log(xhr.readyState);

// xhr.onreadystatechange = function()
// {
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4)
//     {
//        const response = xhr.response;
//        const data = JSON.parse(response)
//         console.log(data)
//     }    
// }

xhr.onload = function()
{
    console.log(xhr.readyState);

    const response = xhr.response;
      const data = JSON.parse(response)
       console.log(data)
}

xhr.send();