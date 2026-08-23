// Function to append clicked button value to display
function appendValue(val) {
    const display = document.getElementById('display');
    display.value += val;
}

// Function to clear all input
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the mathematical expression
function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        if (display.value !== '') {
            // Using eval to calculate basic operations
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}