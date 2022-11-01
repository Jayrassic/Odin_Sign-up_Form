const pass = document.querySelector(`#pass`);
const passCheck = document.querySelector(`#pass-check`);
const different = document.querySelector(`.diff`);
// const btn = document.querySelector(`button`);

function checker() {
    if (pass.value.length > 1 && passCheck.value.length > 1){
        if(pass.value !== passCheck.value){
            different.textContent = `* Please confirm password`;
            btn.disabled=true;
            pass.className = `error`
        } else {
            different.textContent = ``;
            btn.disabled=false;
            pass.className = `normal`
        }
    }
};

passCheck.addEventListener(`keyup`, checker);
pass.addEventListener(`keyup`, checker);

const inputs = document.querySelectorAll(`input`);

for (let i = 0 ; i < inputs.length; i++) {
    inputs[i].addEventListener(`focusout`, () => {
    if (inputs[i].validity.valid === false) {
        inputs[i].className = `error`;
    } else {
        inputs[i].className = `normal`;
    }  
 })};