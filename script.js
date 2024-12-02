    function appendValue(value) {
        document.getElementById('display').value += value;//Appends this value to the current value of the display input.
    }

    function clearDisplay() {
        document.getElementById('display').value = ''; //clearDisplay() Function: Clears the display input by setting its value to an empty string.
    }

    function calculateResult() { 
        try { //try block to catch any errors that may occur during calculation
            const result = eval(document.getElementById('display').value);//the eval function evaluates the expression entered in the display.
            document.getElementById('display').value = result;//If the evaluation is successful, it updates the display with the result.
        } catch (error) { //catch block to handle any errors that may occur during calculation
            document.getElementById('display').value = 'Error';//If there's an error it displays "Error".
        }
    }
