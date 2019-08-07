function isLucky(n) {
    var numberToString = n.toString();
    var numberArray = [];
        //numberToString = numberToString.split();
    var firstHalf = 0;
    var secondHalf = 0;

    //Convert to array of number
    for (var i = 0; i < numberToString.length; i ++) {
        numberArray.push(+numberToString.charAt(i));
    }
    
    //Count first half
    for(var x = 0; x < (numberArray.length - (numberArray.length / 2)); x++){
        firstHalf += numberArray[x];
    }
    //Count secong half
    for(var x = numberArray.length / 2; x < numberArray.length; x++){
        secondHalf += numberArray[x];
    }
    //Comparation
    if(firstHalf === secondHalf){
        return true;
    }else return false;
}
