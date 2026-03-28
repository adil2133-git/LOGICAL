function removeSpaces(str){
    let result = ""

    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            result += str[i]
        }
    }
    return result
}

console.log(removeSpaces("Hello World"))
console.log(removeSpaces("I love javascript"))

// function removeSpaces(str){
//     let words = str.split(" ").join("")
//     return words
// }

// console.log(removeSpaces("Hello World"))