function firstUniqueChar(str){
    let freq = {}

    for(let i=0;i<str.length;i++){
        let char = str[i]

        if(freq[char]){
            freq[char]++
        }else{
            freq[char] = 1
        }
    }

    // for(let key in freq){
    //     if(freq[key] === 1){
    //         return key
    //     }
    // }

    for(let i=0;i<str.length;i++){
        if(freq[str[i]] === 1){
            return str[i]
        }
    }

    return "No unique char found"
}
console.log(firstUniqueChar("aabbcdd"))
console.log(firstUniqueChar("leetcode"))
console.log(firstUniqueChar("aabbccddee"))