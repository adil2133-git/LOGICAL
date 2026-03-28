function longestWord(str){
    let words = str.split(" ")
    let word = ""
    
    for(let i=0;i<words.length;i++){
        if(word.length < words[i].length){
            word = words[i]
        }
    }
    return word
}

console.log(longestWord("I love Javascript"))
console.log(longestWord("Node js backend development"))