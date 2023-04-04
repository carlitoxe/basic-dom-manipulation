const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculus1');
const input2 = document.querySelector('#calculus2');
const btn = document.querySelector('#btnCalculate');
const result = document.querySelector('#result');

/* form.addEventListener('submit', sumInputValues);

function sumInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const sum = Number(input1.value) + parseInt(input2.value);
    result.innerHTML = "Result: " + sum;
} */

btn.addEventListener('click', sumInputValues);

function sumInputValues(event) {
    //console.log({event});
    //event.preventDefault();
    const sum = Number(input1.value) + parseInt(input2.value);
    result.innerHTML = "Result: " + sum;
}

 
