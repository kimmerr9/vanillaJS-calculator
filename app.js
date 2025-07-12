const operations = document.getElementById("operations");
const clear = document.getElementById("clear");
const pm = document.getElementById("pm");
const del = document.getElementById("del");
const divide = document.getElementById("divide");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const times = document.getElementById("times");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const plus = document.getElementById("plus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
        
let isInitial = true;
let lastInput = false;

function appendToDisplay(input, isOp) {
    if (isInitial && isOp) {
        return;
    } else if (isInitial && !isOp) {
        operations.innerHTML = input;
        isInitial = false;
    } else if ((operations.innerHTML[operations.innerHTML.length - 1] === "×" || 
                operations.innerHTML[operations.innerHTML.length - 1] === "÷" || 
                operations.innerHTML[operations.innerHTML.length - 1] === "−" || 
                operations.innerHTML[operations.innerHTML.length - 1] === "+") && isOp) {           
        operations.innerHTML[operations.innerHTML.length - 1] = input;
    }
    else {  
        operations.innerHTML += input; 
        operations.scrollLeft = operations.scrollWidth;
    }
}

function deleteLast() {
    let current = operations.innerHTML;
    if (current.length <= 1 || (current.length === 2 && current.startsWith("−"))) {
        operations.innerHTML = "0";
        isInitial = true;
    } else {
        operations.innerHTML = current.slice(0, -1);
    }
}

function changeSigns() {
    let i = operations.innerHTML.length - 1;
    while (i>=0) {
        if (operations.innerHTML[i] === "+" || 
            operations.innerHTML[i] === "×" || 
            operations.innerHTML[i] === "÷" || 
            operations.innerHTML[i] === "−") {
            break;
        }
        i--;
    }
    if (operations.innerHTML[i] != '-') {
        operations.innerHTML = operations.innerHTML.slice(0, i+1) + '-' + operations.innerHTML.slice(i+1);
    }
}

function clearDisplay() {
    isInitial = true;   
    operations.innerHTML = "0";
}

function calculate() {
    const parsed = operations.innerHTML.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/--/g, "- -");
    try {
        operations.innerHTML = eval(parsed);
        isInitial = true;
    } catch(error) {
        display.innerHTML = "error";
        isInitial = true;
    }
}

function keydown_animation(btnID) {
    btnID.classList.add('active');
    setTimeout(() => btnID.classList.remove('active'), 100);
}

document.addEventListener("keydown", (event) => {
    const key = event.key
    if (key === "0") {
        appendToDisplay("0", false);
        keydown_animation(zero);
    }
    else if (key === "1") {
        appendToDisplay("1", false);
        keydown_animation(one);
    } 
    else if (key === "2") {
        appendToDisplay("2", false);
        keydown_animation(two);
    } 
    else if (key === "3") {
        appendToDisplay("3", false);
        keydown_animation(three);
    } 
    else if (key === "4") {
        appendToDisplay("4", false);
        keydown_animation(four);
    } 
    else if (key === "5") {
        appendToDisplay("5", false);
        keydown_animation(five);
    } 
    else if (key === "6") {
        appendToDisplay("6", false);
        keydown_animation(six);
    } 
    else if (key === "7") {
        appendToDisplay("7", false);
        keydown_animation(seven);
    } 
    else if (key === "8") {
        appendToDisplay("8", false);
        keydown_animation(eight);
    } 
    else if (key === "9") {
        appendToDisplay("9", false);
        keydown_animation(nine);
    } 
    else if (key === ".") {
        appendToDisplay(".", false);
        keydown_animation(dot);
    } 
    else if (key === "+") {
        appendToDisplay("+", true);
        keydown_animation(plus);
    }
    else if (key === "-") {
        appendToDisplay("−", true);
        keydown_animation(minus);
    }
    else if (key === "*") {
        appendToDisplay("×", true);
        keydown_animation(times);
    }
    else if (key === "/") {
        appendToDisplay("÷", true);
        keydown_animation(divide);
    }
    else if (key === "Enter" || key === "=") {
        event.preventDefault(); 
        keydown_animation(equals);
        calculate();
    }
    else if (key === "Escape") {
        clearDisplay();
        keydown_animation(clear);
    }
    else if (key === "Backspace") {
        deleteLast();
        keydown_animation(del);
    }
});