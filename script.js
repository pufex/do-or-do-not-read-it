'use strict'

function generateNumber(numLimit){
    return Math.floor(Math.random()*(numLimit)) + 1;
}

var options = ["Read it", "Don't read it"];

do{
    var num = generateNumber(options.length)-1;
    alert(`Got: ${options[num]}`);
}while(confirm("Try again?") === true)
