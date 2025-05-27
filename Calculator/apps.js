const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener ("click",() => {
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C") {
            ClearResult()
        }else if(buttonValue === "=") {
            calculateResult()
        }else {
            appendValue(buttonValue);
        }
        
    });

}

function ClearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    try {
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch (e) {
        inputFieldEl.value = "Error";
    }
    
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
    // inputFieldEl.value = inputFieldEl.value + buttonValue;
}