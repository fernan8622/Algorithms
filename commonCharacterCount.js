function commonCharacterCount(s1, s2) {
    var cont = 0;
    var s1Split = s1.split("");
    var countArray = [];
    var countArray2 = [];
    for(var x = 0; x < s1Split.length; x++){
        var amount = countOneTime(s1Split, s2, x);
        countArray[x] = [s1Split[x], amount];
    }
    countArray.sort();
    countArray2.push(countArray[0]);
    for(var x = 0; x < countArray.length-1; x++){
        if(countArray[x][0] !== countArray[x+1][0]){
            countArray2.push(countArray[x+1]);
        }
    }
    for(var x = 0; x < countArray2.length; x++){
        cont += countArray2[x][1];
    }

    return cont;
}

function countOneTime(x1, x2,position){
    var count = 0;
    var count1 = 0;
    var count2 = 0;
    for(var x = 0; x < x1.length; x++){
        if(x1[position] === x1[x]){
            count1++;
           }
        }
        for(var y = 0; y < x2.length; y++){
            if(x1[position] === x2[y]){
                count2++;
               }
        }
    if(count2 === 0){
        count = 0;
    }else if(count1 > count2){
             count = count2;
    }else if(count1 < count2){
            count = count1;
    } else count = count1;
    return count;
}
