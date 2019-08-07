function reverseInParentheses(inputString) {
    var positionOpen = 0;
    var amountOpen = 0;
    var splitString = inputString.split("");
    var word = "";
    
    for(var x = 0 ; x < inputString.length; x++){
        if(inputString[x] === "("){
            amountOpen++;
        }
    }
    do{
        for(var x = 0 ; x < inputString.length; x++){
            if(inputString[x] === "("){
                positionOpen = x;
            }
        }
        word = "";
        for(var x = positionOpen+1; x < inputString.length; x++){
            if(inputString[x] != ")"){
                word += inputString[x];
            }else break;
        }
        word = word.split("").reverse().join("");
        amountOpen--;
        inputString = inputString.substring(0,positionOpen) + word + inputString.substring(positionOpen+word.length+2);
    }
    while(amountOpen > 0);
    return inputString;
}
