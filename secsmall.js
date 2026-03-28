function secSmallest(arr){
    let smallest = arr[0]
    let secSmall;

    for(let i=1;i<arr.length;i++){
        if(arr[i] < smallest){
            secSmall = smallest
            smallest = arr[i]
        }else if(arr[i] < secSmall && arr[i] !== smallest){
            secSmall = arr[i]
        }
    }
    return secSmall
}
console.log(secSmallest([10,2,6,4]))
console.log(secSmallest([5,3,8,1,4]))