function strPalindrome(str){
    let reversed = ""

    for(let i=str.length - 1;i>=0;i--){
        reversed += str[i]
    }

    return str === reversed
}
console.log(strPalindrome("madam"))
console.log(strPalindrome("hello"))