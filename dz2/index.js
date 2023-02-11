// Задание №1

var arr = [10, 20, 30, 50, 235, 3050]

var arr2 = []
for (var i = 0; i < arr.length; i++){
    let num = String(arr[i])
    let opr = num[0]
    if (opr == 1 || opr == 2 || opr == 5){
        arr2.push(num)
    }

}
console.log(arr2)
    
// // Задание №2

// var arr2 = []
// for (var x = 20; x >= 0; x--){
//     arr2.push(x)
// }
// console.log(arr2)


// // Задание №3

// for (;;) {
//     let war = prompt('Выберите цвета: "red", "yellow", "green"');
//     var str = war.toLowerCase().toString();
    
  
//     let obj = {
//       red: 'Стоп',
//       yellow: 'Жди',
//       green: 'Топи'
//     };
  
//     let key = Object.keys(obj);
   
  
//     if (key[0] === str) {
//       alert(obj.red);
     
//       break;
//     } else if (key[1] === str) {
//       alert(obj.yellow);
      
//       break;
//     } else if (key[2] === str) {
//       alert(obj.green);
     
//       break;
//     } else {
//       alert('Выберите значения предоставленных цветов');
//       continue;
//     }
//   }