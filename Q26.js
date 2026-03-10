function strPalindrome(str){
    let reversed = ""

    for(let i=str.length - 1;i>=0;i--){
        reversed += str[i]
    }

    if(str === reversed){
        return "It is a Palindrome"
    }else{
        return "Not a Palindrome"
    }
}
console.log(strPalindrome("madam"))
console.log(strPalindrome("hello"))