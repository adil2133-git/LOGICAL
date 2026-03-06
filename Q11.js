function secondLargest(arr){
    let largest = arr[0];
    let secLargest = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secLargest = largest
            largest = arr[i]
        }
    }
    return secLargest
}
console.log(secondLargest([3,8,6,9,10]))