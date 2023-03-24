const div = document.querySelector('.block')







    const request = new XMLHttpRequest() // создание запроса
    request.open("GET", "data.json") // объявление метода запроса и его пути
    request.setRequestHeader("Content-Type", "application/json"); // добавление заголовков
    request.send();

    request.addEventListener("load", () => {
        const  resData = JSON.parse(request.response)
        const result = resData.data
console.log(result)
            result.map((item) => {
                let divResult =
                
                `<div class = "column">
                <img class = "img" src="${item.img}"  alt="iphone">
                <h3> ${item.model}</h3>
                <h4>Цена <span>${item.price}</span> com</h4>
                <p>Артикул : ${item.id}</p>
                <a ></a>
                </div>
                
                `
                div.innerHTML += divResult
            })
        
       
    })




