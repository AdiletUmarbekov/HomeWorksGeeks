let loginUp = document.querySelector('#loginUp');
let passwordsUp = document.querySelector('#passwordsUp');
let buttonUp = document.querySelector('#buttonUp');
let loginIn = document.querySelector('#loginIn');
let passwordsIn = document.querySelector('#passwordsIn');
let buttonIn =  document.querySelector('#buttonIn')
const showBtn = document.querySelector("span i");
const showBtn1 = document.querySelector("span span i");
let titleCompleted = document.querySelector(".title")
let resultSingIn = document.querySelector(".resultSingIn")


let arrUser = []
if (localStorage.getItem('user')) {
    todoList = JSON.parse(localStorage.getItem('user'));
    
}
showBtn.onclick = (()=>{
   
  
   
   
    if(passwordsUp.type === "password"){
    passwordsUp.type = "text";
      showBtn.classList.add("hide-btn");
    }else{
      passwordsUp.type = "password";
      showBtn.classList.remove("hide-btn");
    }


})
showBtn1.onclick = (()=>{
    if(passwordsIn.type === "password"){
    passwordsIn.type = "text";
      showBtn.classList.add("hide-btn");
    }else{
      passwordsIn.type = "password";
      showBtn.classList.remove("hide-btn");
    }


})
buttonUp.addEventListener("click", function (e){
    e.preventDefault();
  
    let addUser = {
        login: loginUp.value,
        passwords :passwordsUp.value,
        checked: false,
        idx : 01,
    }
    
    
    
    arrUser.push(addUser)
    
    localStorage.setItem('user', JSON.stringify(arrUser))
    
    loginUp.value = "";
    passwordsUp.value = "";
    titleCompleted.innerHTML = "Вы успешно зарегистрировались";
    titleCompleted.style.color = "green";
    // console.log(arr)
   

})

titleCompleted.innerHTML = "";

const savedData = localStorage.getItem('user');
if (savedData) {
  user = JSON.parse(savedData);
}

buttonIn.addEventListener ('click', function () {
      
    
    resultSingIn.innerHTML = '';
    

    if (loginIn.value === '' || passwordsIn.value === '') {
        resultSingIn.innerHTML = 'Напишите логин и пороль  .';
        resultSingIn.style.color = 'red';
        return;
    }

    const savedData = localStorage.getItem('user');
    if (savedData) {
        const arrUser = JSON.parse(savedData);
        const user = arrUser.find((users) => users.login === loginIn.value && users.passwords === passwordsIn.value);

        if (user) {
            resultSingIn.innerHTML = 'Вы успешно вошли';
            resultSingIn.style.color = 'green';
        } else {
            resultSingIn.innerHTML = 'Ошибка: Проверьте правильность ваших данных';
            resultSingIn.style.color = 'red';
        }
    } else {
        resultSingIn.innerHTML = 'Ошибка: Пользователь не найден .';
        resultSingIn.style.color = 'red';
    }
    loginIn.value = '';
    passwordsIn.value = '';
});



