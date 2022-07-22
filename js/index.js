let a = ''; //first number
let b = ''; //second number
let sing = ''; //operation sing
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
 //screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; //first number and result
    b = ''; //second number
    sing = ''; //sing
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (e) => {
    //pressed no number or sing
    if (!e.target.classList.contains('btn')) return;
    //pressed clearAll
    if (e.target.classList.contains('ac')) return;
    // console.log(e.target)
    out.textContent = '';
    //get pressed numer
    const key = e.target.textContent;

    //if pressed number or .
    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key;
        
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sing)
        return;

    }
    //if pressed sing
    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
        console.log(a, b, sing)
        return;
    }
    //pressed '='
    if (key === '=') {
        if (b === '') b = a;
        switch (sing) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                 window.alert("cannot be divided by zero!");
                out.textContent = 'Error';                
                a = '';
                b = '';
                sing = '';
                return;
            }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sing)
    }
}