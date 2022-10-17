const promise = new Promise(function(resolve, reject) {
    resolve("hey!")
});

const cows = 20;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cowns in the farm`)
    } else {
        reject("There is no enoght cows in the farm");
    }
});
countCows.then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log("Finally"))