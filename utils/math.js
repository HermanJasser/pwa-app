export function showMathUtility(container) {
    container.innerHTML = `
    <div class="calc">
        <p>Math Utilities:</p>
        <input id="num1" type="number" placeholder="number 1">
        <input id="num2" type="number" placeholder="number 2">
        <button id="mul">*</button>
        <button id="div">/</button>
        <button id="sub">-</button>
        <button id="add">+</button>
        <p id="output"></p>
        </div>
`; 

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let output = document.getElementById("output");

document.getElementById("mul").addEventListener("click", function(){
    output.innerHTML = parseInt(num1.value) * parseInt(num2.value);

    })

document.getElementById("div").addEventListener("click", function(){
    output.innerHTML = parseInt(num1.value) / parseInt(num2.value);
    })

document.getElementById("sub").addEventListener("click", function(){
    output.innerHTML = parseInt(num1.value) - parseInt(num2.value);
    })
document.getElementById("add").addEventListener("click", function(){
    output.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    })
}







