function findMissing(arr){

    let n = arr[arr.length - 1]

    for(let i=1;i<=n;i++){
        if(!arr.includes(i)){
            return i
        }
    }
}

console.log(findMissing([1,2,4,5]))