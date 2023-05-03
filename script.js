const appearNums = document.getElementById("appearNums");
const operations = document.querySelectorAll(".operation");
const deleteNum = document.getElementById("delete");
const operationsArray = Array.from(operations).map((el) => el.innerText);
console.log(operationsArray);
let calculation = "";
const variableFunc = (variable) => {
  if (
    !operationsArray.includes(calculation.slice(-1)) ||
    !operationsArray.includes(variable.innerText)
  ) {
    appearNums.innerText = calculation += variable.innerText;
  }
};
//operation equality
const equalityFunc = () => {
  appearNums.innerText = eval(calculation);
  calculation = "";
};
//clear calculator
let clearCalc = () => {
  appearNums.innerText = "";
  calculation = "";
};
//delete unnecessary nummers or operations
const deleteFunc = () => {
  if (calculation.length >= 1) {
    calculation = calculation.slice(0, -1);
    appearNums.innerText = calculation;
  }
};
