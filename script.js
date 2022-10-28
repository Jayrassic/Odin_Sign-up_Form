const pass = document.querySelector(`#pass`);
const passCheck = document.querySelector(`#pass-check`);
const different = document.querySelector(`.diff`);

function checker() {
    if(pass.value !== passCheck.value){
        different.textContent = `* Please confirm password`;
    } else {
        different.textContent = ``;
    }
}

passCheck.addEventListener(`focusout`, checker);
pass.addEventListener(`focusout`, checker);