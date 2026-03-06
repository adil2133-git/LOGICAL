function isPalindrome(num){
    let reversed = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10)
    }

    if(reversed === original){
    return "Palindrome"
   }else{
    return "Not a Palindrome"
   }
}
console.log(isPalindrome(121))
console.log(isPalindrome(1331))
console.log(isPalindrome(1241))


