'use strict';

function generateSecretNumber() {
    while (true){
        let number = String(Math.floor(1000 + Math.random() * 9000));
        if(validateNumber(number)){
            return number;
        }
    }
}

function validateNumber(str){
    for(let i = 0; i < str.length; i++){
        let counter = 0;
        for(let j = 0; j < str.length; j++) {
            if(str[i] === str[j]){
                counter++;
            }
        }
        if (counter > 1) {
            return false;
        }
    }
    return true;
}

function getBullsCount(numberString){

    let counter = 0;
    for(let i = 0; i < numberString.length; i++){
        if (numberString[i] === secretNumber[i]){
            counter++;
        }
    }
    return counter;
}

function getCowsCount(numberString){
    let counter = 0;
    for (let i = 0; i < numberString.length; i++ ){
        let position = secretNumber.indexOf(numberString[i]);
        if (position !== -1 && position !== i){

            counter++;
        }
    }
    return counter;
}


const secretNumber = generateSecretNumber()
let prevResults = '';

let inputNumber = prompt('Input your number:');

let moveCounter = 0;

while(inputNumber){
    moveCounter++;
    if(validateNumber(inputNumber)){
        let bullsCount = getBullsCount(inputNumber);
        let cowsCount = getCowsCount(inputNumber);
        if (bullsCount === 4) {
            alert(`You win with ${moveCounter} moves!!! Secret number - ${inputNumber}`);
            break;
        }
        prevResults += `Moves: ${moveCounter}   Your number: ${inputNumber}   bulls: ${bullsCount}   cows: ${cowsCount};\n`
        inputNumber = prompt(prevResults);
    }else{
        prevResults += `Invalid number: ${inputNumber}; Input number with different number;\n`
        inputNumber = prompt(prevResults);
        moveCounter--;
    }
}
