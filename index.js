
let count = 0
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
//lol
function incredo() {
    count += 1;
    countEl.innerText = count
}

function save() {
    let container = count + " - "
    saveEl.textContent  += container
    countEl.innerText = 0
    count = 0
}

let num1 = 8
let num2 = 3
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add(){
    
    sumEl.textContent = "Sum: " + num1 + num2
}

function substract() {
    sum = num1 - num2
    sumEl.textContent = sum
}

function divide(){
  sum=  num1 / num2
    sumEl.textContent = sum
}

function multiply() {
   sum = num1 * num2
   sumEl.textContent = sum
}
