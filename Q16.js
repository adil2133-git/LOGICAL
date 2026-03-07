function countEven(arr){
    let even = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            even++
        }
    }
    return even
}
console.log(countEven([1,2,3,4,5,6,7,8,9]))