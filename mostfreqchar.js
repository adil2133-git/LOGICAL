function mostFreqChar(str){
    let freq = {}

    for(let i=0;i<str.length;i++){
        let char = str[i]
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char] = 1;
        }
    }

    let max = 0
    let key = ""

    for(let j in freq){
        if(freq[j] > max){
            max = freq[j]
            key = j
        }
    }
    return key
}

console.log(mostFreqChar("hello world"))