// let button = document.querySelector("#button")
// let resNum = document.querySelectorAll(".Num");
// let number = document.querySelector(".resultNums")


// console.log(button)
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



// button.addEventListener("click", function (event) {
//     event.preventDefault
//     let res = [];
//     for(let i = 0; i < 6; i++){
//          res.push(getRandomInt(1,99))
        
//     }
    
//     number.innerHTML = res.map((id)=>id)
//     console.log(res.map((el,idx)=>el))
   
    
    
//     console.log(res)

// })
// console.log(getRandomInt(1, 99));
// console.log(getRandomInt(1, 99));\



let button = document.querySelector("#button")
let resNum = document.querySelectorAll(".Num");
let number = document.querySelector(".resultNums")

console.log(button)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let mathRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathRandom
  
}

button.addEventListener("click", function(event) {
  event.preventDefault();
  let res = [];
  for (let i = 0; i < 6; i++) {
    res.push(getRandomInt(1, 99));
   
  }
  resNum.forEach((numEl, idx) => {
    numEl.innerHTML = res[idx];
  });
  console.log(res);
}); 