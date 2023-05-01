const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, URL)
{
  return new Promise (function (resolve, reject)
  {

const xhr = new XMLHttpRequest();

xhr.open(method, URL);
xhr.onload = function()
{
    if(xhr.status >= 200 && xhr.status < 300)
    {
        resolve(xhr.response);
    }
    else
    {
       reject ("something went to wrong");
    }
}


xhr.send();
  
})
}

sendRequest("GET", URL)
.then(response => {

    const data = JSON.parse(response);

    return data;
})
.then (data =>{

    const id = data[3].id;
    return id;
})
.then(id=>{

    const url = `${URL}, $(id)`;
    return sendRequest("GET", url)
})
