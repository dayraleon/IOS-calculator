const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')

let firstvalue = "";
let isFirstValue = false;
let secondvalue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0; i < numbers.length; i++){
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue == false){
            getSecondValue(atr);
        }
    })
}
function getFirstValue(el){
    result.innerHTML = "";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}

function getSecondValue(el){
    if(firstvalue != "" && sign != ""){
        secondvalue += el;
        result.innerHTML = secondvalue;
        secondvalue = +secondvalue;
    }
}
function getSign(){
    for(let i=0; i< signs.length; i++){
        signs[i].addEventListener('click', (e) =>{
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();
equals.addEventListener('click', () =>{
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstvalue + secondvalue;
    }
    else if(sign === "-"){
        resultValue = firstvalue - secondvalue;
    }
    else if(sign === "x"){
        resultValue = firstvalue * secondvalue;
    }
    else if(sign === "/"){
        resultValue = firstvalue / secondvalue;
    }
    result.innerHTML = resultValue;
    firstvalue = resultValue;
    secondvalue = "";

    checkResult();

})

function checkResult(){
    resultValue =JSON.stringify(resultValue);
    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue)
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () =>{
    result.innerHTML = "";
    if(firstvalue != ""){
        resultValue = firstvalue;
        firstvalue = resultValue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultValue = -resultValue
    }
    result.innerHTML = resultValue;
})