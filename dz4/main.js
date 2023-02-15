let increase = document.getElementById('plus');
let resultId = document.getElementById('result');
let decrease = document.getElementById('minus');
let reset = document.getElementById('reset');

increase.addEventListener('click', function(){
    let value = Number(resultId.innerHTML);
    value += 1;
    resultId.innerHTML = value;
    if (value > 0) {
        resultId.style.color = 'green';
    }
});

decrease.addEventListener('click', function(){
    let value = Number(resultId.innerHTML);
    value -= 1;
    resultId.innerHTML = value;
    if (value < 0) {
        resultId.style.color = 'red';
    }
});

reset.addEventListener('click', function(){
    let value = Number(resultId.innerHTML);
    value = 0;
    resultId.innerHTML = value;
    resultId.style.color = 'gray';
});x