// Calculator functions will be added by team members

// Helper function to get input values
function getInputs() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

// Helper function to display result
function displayResult(value) {
    document.getElementById('result').textContent = value;
}

// Addition function - TO BE IMPLEMENTED BY STUDENT 2
function add() {
    let num1 = getInputs().num1
    let num2 = getInputs().num2
    let sum = num1 + num2
    displayResult(sum);

}

// Subtraction function - TO BE IMPLEMENTED BY STUDENT 3
function subtract() {
    alert('Subtraction not implemented yet!');
}

// Multiplication function - TO BE IMPLEMENTED BY STUDENT 4
function multiply() {
    alert('Multiplication not implemented yet!');
}

// Division function - TO BE IMPLEMENTED BY STUDENT 5
function divide() {
      
      let{num1, num2} = getInputs();
    let div = num1 / num2;
    displayResult(div);
   
}
