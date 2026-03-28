function isAnagrams(str1,str2){
    const freq = {}

    if(str1.length !== str2.length){
        return false
    }

    for(let i=0;i<str1.length;i++){
        let char = str1[i]

        if(freq[char]){
            freq[char]++
        }else{
            freq[char] = 1
        }
    }

    for(let i=0;i<str2.length;i++){
        let char = str2[i]

        if(!freq[char]){
            return false
        }

        freq[char]--

    }
    return true
}

console.log(isAnagrams("listen","silent"))
console.log(isAnagrams("hello","world"))