function charFrequency(str){
    let freq = {}

    for(let i=0;i<str.length;i++){
        let char = str[i]

        if(freq[char]){
            freq[char]++
        }else{
            freq[char] = 1
        }
    }
    return freq
}

console.log(charFrequency("hello"))
console.log(charFrequency("javascript"))