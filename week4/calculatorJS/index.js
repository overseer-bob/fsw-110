//get all add elemets
let addButton = document.getElementById("addButton");
let addFirstNum = document.getElementById("addFristNum");
let addSecondNum = document.getElementById("addSecondNum");
let addAnswer = document.getElementById("addAnswer");

//get all sub elements
let subButton = document.getElementById("subButton");
let subFirstNum = document.getElementById("subFristNum");
let subSecondNum = document.getElementById("subSecondNum");
let subAnswer = document.getElementById("subAnswer");

//get all multiply elements
let mulButton = document.getElementById("mulButton");
let mulFirstNum = document.getElementById("mulFristNum");
let mulSecondNum = document.getElementById("mulSecondNum");
let mulAnswer = document.getElementById("mulAnswer");

//add event listeners
addButton.addEventListener("click", add);
subButton.addEventListener("click", subtract);
mulButton.addEventListener("click", multiply);

//addition
function add(){
    addAnswer.textContent = "Answer: "
    addAnswer.textContent += parseInt(addFirstNum.value) + parseInt(addSecondNum.value);
}

//subtraction
function subtract(){
    subAnswer.textContent = "Answer: "
    subAnswer.textContent += parseInt(subFirstNum.value) - parseInt(subSecondNum.value);
}

//multiplication
function multiply(){
    mulAnswer.textContent = "Answer: "
    mulAnswer.textContent += parseInt(mulFirstNum.value) * parseInt(mulSecondNum.value);
}