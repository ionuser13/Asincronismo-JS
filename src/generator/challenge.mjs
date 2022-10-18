import fetch from "node-fetch"

const API = "https://api.escuelajs.co/api/v1";//stores the api url

async function fetchData(urlApi) {//fetchData is declared as an async function
    const response = await fetch(urlApi);//waits for extracting data from the api and is stored it in a variable, "response"
    const data = await response.json();//that data is converted to a json object and is stored in data
    return data;//the function returns that json object
}

async function* iterate(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);//extracts the list of products from the api and stores it in "products"
        yield console.log(products[57])//pauses and returns the item n57 in products

        const product = await fetchData(`${urlApi}/products/${products[57].id}`);//extracts the product with the given id from the api
        yield console.log(product.description)//pauses and returns the description of the item, in this case the product 57

        const category = await fetchData(`${urlApi}/products/${product.category.id}`);////extracts the id of the category of the product we called
        yield console.log(category.name)// pauses and returns the name of the category of the product

    }
    catch (error){
        console.error(error)
    }
}

const iter = iterate(API);
iter.next()
iter.next()