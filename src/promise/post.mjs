import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: "POST",
        mode: "cors",//permises it's going to have
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"//type of value we are sending, in this case: application json
        },
        body: JSON.stringify(data)//transforms the obtained info (data) from object to text
    });
    return response;
}

const data = {
    "title": "Teddy Bear",
    "price": 5.99,
    "description": "Fluffy teady bear",
    "categoryId": 5,
    "images": ["https://nationaltoday.com/wp-content/uploads/2021/08/Teddy-Bear-Day-640x514.jpg"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));