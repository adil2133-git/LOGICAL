function moveZeros(arr){
    let newArr = []
    let zeros = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            newArr.push(arr[i])
        }else{
            zeros.push(arr[i])
        }
    }

    let result = [...newArr,...zeros]
    return result
}
console.log(moveZeros([0,1,0,3,12]))