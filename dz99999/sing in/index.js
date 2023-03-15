let passInput = document.querySelector("#passwords")
let confirmPassInput = document.querySelector(".singIn__confirmPass");
let passBtn =  document.querySelector(".singIn__eye");
let confirmBtn = document.querySelector(".singIn__eye2");
let emailInput = document.querySelector(".singIn__email");
let messageInfo = document.querySelector(".singIn__errorTitle")


passBtn.onclick = (()=>{    
    if(passInput.type === "password"){
    passInput.type = "text";
      
    }else{
      passInput.type = "password";
      
    }


})

confirmBtn.onclick = (()=>{
    if(confirmPassInput.type === "password"){
    confirmPassInput.type = "text";
      
    }else{
      confirmPassInput.type = "password";
      
    }


})



let RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

emailInput.addEventListener("input", (event) => {
  event.preventDefault();
 

  if (emailInput === "" || passInput === ""|| confirmPassInput ==="") {
    messageInfo.innerHTML = "Заполните все поля";
    
  }
  if (RegExp.test(emailInput.value)) {
    messageInfo.innerHTML = "Теперь введите пароль";
    messageInfo.style.color = "green";
    emailInput.classList.add("success")
    emailInput.classList.remove("errorBorder")
  } else {
    messageInfo.innerHTML = "Неправильный логин!";
    messageInfo.style.color = "red";
    emailInput.classList.add("errorBorder")
  }
});

passInput.addEventListener("input", (event) => {


  if (passwordRegExp.test(passInput.value)) {
    messageInfo.innerHTML = "Потвердите пароль";
    messageInfo.style.color = "yellow";
    passInput.classList.add("success")  
    
  } else {
    messageInfo.innerHTML = "Неправильный пароль!";
    messageInfo.style.color = "red";
    passInput.classList.add("errorBorder")
    
  }
});

confirmPassInput.addEventListener("input", (e) => {
  

  if (passInput.value !==confirmPassInput.value) {
    messageInfo.innerHTML = "Пароль не совпадает";
    messageInfo.style.color = "red";
    confirmPassInput.classList.add("errorBorder")
    return;
  } else {
    messageInfo.innerHTML = "Успешно";
    messageInfo.style.color = "green";
    confirmPassInput.classList.remove("errorBorder")
    confirmPassInput.classList.add("success")
  }
});



