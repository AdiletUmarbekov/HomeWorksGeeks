// // Задание №1

let str = "123456789";

function notReverse(item) {
    let result = [];

    for ( let i =  item.length ; i > 0; i--){
        result.push(i);
    }
    return console.log([result.join("")]);
}
notReverse(str);

//Задание №2


// let num = Number( prompt('Напишите любое целое число'));
let numbs = Number("5")

function numberSums (number) {
    // let resNum = []
    // for( let i = 1; i <= number; i++ ){
    //     resNum.push(i)
    // }
    // const sumWith = resNum.reduce((accumulator, currentValue) => accumulator + currentValue);

    // console.log(resNum);
    // console.log(sumWith);
    
    let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);


}
 numberSums (numbs);


// //задание №3


function randomNum ( ) {
    let num = 0
    let res =0;
    while (num <= 99 ) {
        num++ 
        if(num % 2 !== 0) console.log(num)
        res +=num;
        
    }
    console.log(res)

}
 
randomNum()


//Задание №4


function weekday () {

    let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    let Days = [];

for (let i = 0; i < weeks.length; i++) {
  if (i < 5) {
    Days.push(weeks[i].toLowerCase());
  } else {
    Days.push(weeks[i].toUpperCase());
  }
}
    console.log(Days);
}

weekday()