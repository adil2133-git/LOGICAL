function countFrequency(arr){
    let freq = {}

    for(let i = 0;i<arr.length;i++){
        let num = arr[i]

        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
        }
    }
    return freq
}
console.log(countFrequency([1,2,1,1,3,2,3,4,2,3,1]))