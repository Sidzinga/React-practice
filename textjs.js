var record = {"name":"","surname":""}
var records = []

for(var i in record){
    console.log(i)
    records.push({[i] : record[i]})
}



// const value = {name: "moral"};
// console.log(Object.keys(value)[0])

const value =  {"title":"Thabo","surname":"Kagiso"}

console.log("hello", value[0])

// var records = [{"name":""},{"surname":""}]
