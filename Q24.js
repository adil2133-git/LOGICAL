function countVowels(str){
    let vowels = ["a","e","i","o","u"]
    let count = 0

    let strArr = str.split("")

    for(let i=0;i<strArr.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(strArr[i] === vowels[j]){
                count++
            }
        }
    }
    return count
}

console.log(countVowels("hello"))
console.log(countVowels("hello Nodejs"))
