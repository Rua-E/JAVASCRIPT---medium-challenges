function filterOutFalsy(elem1, elem2){
    // if (!elem1) {
    //     return elem1
    // }
    // else {
    //     return elem2
    // }
    return (!elem1) ? elem1 : elem2
}
console.log(filterOutFalsy(0,500));
console.log(filterOutFalsy(false,100));
console.log(filterOutFalsy([true,'Dog']));


function arrLength(arraylength){
    return arraylength.length;
}
console.log(arrLength([1,2,3]));
console.log(arrLength([5,0,-4,1]));
console.log(arrLength([]));


function lastElem(last){
    return (last[last.length-1]);
}
console.log(lastElem([3,2,0,6,2]));
console.log(lastElem(['dog','cat','ball']));
console.log(lastElem([null,5,false]));

function arrSum(arraysum){
    let sum = 0
    for (let i=0; i < arraysum.length; i++){
       sum = sum + arraysum[i]
    }
    return sum;
    /* THIS IS HOW YOU LOOP THROUGH EVERYELEMENT IN AN ARRAY*/
}
console.log(arrSum([2,2,2]));
console.log(arrSum([100,200,500]));
console.log(arrSum([0,-5,-10]));

function progressiveSum(number){
    let sum = 0;
    for (let i=1; i <= number; ++i){
        sum = sum + i
    }
    return sum;
}
console.log(progressiveSum([3]));
console.log(progressiveSum([4]));
console.log(progressiveSum([600]));

function calcTime(time){
    let timerMinutes = Math.floor(time / 60);
    let timerSeconds = time % 60;

    if (timerMinutes.toString().length ===1){
        timerMinutes = '0' + timerMinutes
    }
    if (timerSeconds.toString().length ===1){
        timerSeconds = timerSeconds + '0'
    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

function getMax(max){
    let maximum = max[0];
    for (let i=0; i < max.length; ++i){
        if (max[i] > maximum){
            maximum = max[i];
        }
    }
    return maximum;
}
console.log(getMax([5,100,0]));
console.log(getMax([12,10,-20]));
console.log(getMax([-300,-100,-200]));


function reverseString(string){
    // *****incrementing for loop
    // let reversedString = '';
    // for (let i=0; i < string.length; ++i){
    //     reversedString = string[i] + reversedString
    // }
    // return reversedString;

    // ****decrementing for loop *** not common
    // let reversedString = ''
    // for (let i=string.length -1 ; i >=0; --i){
    //    reversedString += string[i]
    // }
    // return reversedString;

    //*** array reverse property 
    return string.split('').reverse().join('');
}
console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));


function convertToZeros(zeros){
    // *** for loop
    // for (let i=0; i<zeros.length; i++){
    //     zeros[i] = 0
    // }
    // return zeros

    //*** OR */
    // let newZeros = [];
    // for (let i=0; i<zeros.length; i++){
    //     newZeros[i] = 0
    // }
    // return newZeros;

    // ** arry 'fill'
    // return new Array(zeros.length).fill(0)

    // ** array 'map'
    return zeros.map(elem => 0);
}
console.log(convertToZeros([5,100,0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1,2,3,4,5]));

function removeApples(fruits){
    // *** FOR LOOP
    // let noApples = []
    // for (let i = 0; i < fruits.length; i++){
    //     if (fruits[i] !== 'Apple'){
    //         noApples.push(fruits[i]);
    //     }
    // }
    // return noApples;

    // *** ARRAY 'filter'
    return fruits.filter(elem => elem !== 'Apple');

}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples(['Tomato', 'Orange', 'Banana']));
console.log(removeApples(['Banana', 'Orange', 'Apple']));

function filterOutFalsyValues(values){
    // *** FOR LOOP
   let truthyValues = [];
   for (let i = 0; i < values.length; i++){
    if (!!values[i] === true){
        truthyValues.push(values[i]);
     }   
    }
    return truthyValues;
    
    // *** ARRAY 'filter'
    // return values.filter(elem => !!elem === true);
   
}
console.log(filterOutFalsyValues(["",[],0,null,undefined,"0"]));
console.log(filterOutFalsyValues(['Tomato', 'Orange', 'Banana', false]));
console.log(filterOutFalsyValues(['Banana', 'Orange', 'Apple']));


function convertToBoolean(bool){

    return bool.map(elem => !!elem);
}
console.log(convertToBoolean([500,0,"Rua","", []]))