import fetch from "node-fetch"

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {//fetchData is declared as a generator function
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* iterate(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products[57])

        const product = await fetchData(`${urlApi}/products/${products[57].id}`);
        yield console.log(product.description)

        const category = await fetchData(`${urlApi}/products/${product.category.id}`);
        yield console.log(category.name)

    }
    catch (error){
        console.error(error)
    }
}

const iter = iterate(API);
iter.next()
iter.next()