function findSmallest(arr){
    let smallest = arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}
console.log(findSmallest([5,2,8,5,3,9,9]))