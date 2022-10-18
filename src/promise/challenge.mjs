import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";
//create a function that takes API, returns the fetch call, which is a promise, so we can use the words and multiple elements for products, a product and its category
function fetchData(urlApi) {
    return fetch(urlApi);
};
//call
// fetchData(`${API}/products`)
//     .then(response => response.json())//json converts the info from first call to an object
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=>{
//         console.log("buenas")
//     })
//     .catch(error => console.log(error))

fetchData(`${API}/products`)
    .then(response => response.json())//convert response into a json object
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)//we only show the first element of the first request
    })
    .then(response => response.json())//we get the data again
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)//we show only the category of a product
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))//detects an error
    .finally(()=> console.log("finally"));//indicates that the request has finished