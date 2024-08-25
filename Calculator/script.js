let element = '';
let result;
let res;
let s = document.getElementById("set");
s.value = 0;
function setDisplay(x) {
    let s = document.getElementById("set");
    if (['+', '-', '*', '/', '%'].includes(x)) {
        let lastChar = s.value.slice(-1);
        if (['+', '-', '*', '/', '%'].includes(lastChar)) {
            return;
        }
        s.value += x;
    }
    else if (x === '0' || x === '00') {
        if (s.value === '0' || s.value === '') {
            s.value = 0;
        }
        else {
            s.value += x;

        }
    }
    else {
        if (x == '.') {
            let parts = s.value.split(/[\+\-\*\/\%\(\)]/);
            let lastPart = parts[parts.length - 1];
            if (lastPart.includes('.')) {
                return;
            }

            s.value += x;
        }
        else if (s.value === '0')
            s.value = x;
        else {
            s.value += x;
        }
    }
    element = s.value;
    console.log(element);
}
function evalResult() {
    res = element;
    try {
        res = eval(res);
        console.log(res);
        if (res == "Infinity")
            res = "Division by zero";
    }
    catch (error) {

        res = "Error ";
    }
    result = document.getElementById("set");
    result.value = res;
}
function clearAll() {
    element = '';
    let p = document.getElementById("set");
    p.value = '0';
}
function clearSingle() {
    let s = document.getElementById("set");
    if (element.length === 1 || element.length === 0) {
        s.value = 0;
        element = '';
    }
    else {
        element = element.slice(0, -1);
        s.value = element;
    }
}
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
        case '%':
            setDisplay(event.key);
            break;
        case 'Enter':
        case '=':
            evalResult();
            event.preventDefault();
            break;
        case 'Backspace':
            clearSingle();
            break;
        case 'Escape':
            clearAll();
            break;
    }
});

