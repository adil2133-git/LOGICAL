function countGreater(arr,num){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > num){
            count++
        }
    }
    return count
}

console.log(countGreater([1,5,8,3,10,2],4))