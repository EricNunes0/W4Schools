function PxEmFocus() {
    let emPxConvertInput = document.querySelector(`#em-px-convert-input`);
    emPxConvertInput.value = null;
    emPxConvertInput.disabled = true;
}
function PxEmFocusOut() {
    let emPxConvertInput = document.querySelector(`#em-px-convert-input`);
    emPxConvertInput.disabled = false;
}

function EmPxFocus() {
    let pxEmConvertInput = document.querySelector(`#px-em-convert-input`);
    pxEmConvertInput.value = null;
    pxEmConvertInput.disabled = true;
}
function EmPxFocusOut() {
    let pxEmConvertInput = document.querySelector(`#px-em-convert-input`);
    pxEmConvertInput.disabled = false;
}

function PxEmConvert() {
    const pxDefault = document.querySelector(`#px-default`);
    const pxEmConvertInput = document.querySelector(`#px-em-convert-input`);
    const emPxConvertInput = document.querySelector(`#em-px-convert-input`);
    const pxEmResult = document.querySelector(`#px-em-result`);
    if(pxDefault && pxEmConvertInput && emPxConvertInput && pxEmResult) {
        let pxDefaultValue = parseInt(pxDefault.value);
        let pxEmConvertInputValue = parseInt(pxEmConvertInput.value) || 0;
        let emPxConvertInputValue = parseInt(emPxConvertInput.value) || 0;
        //console.log("Padrão:", pxDefaultValue, "PX-EM:", pxEmConvertInputValue, "EM-PX:", emPxConvertInputValue);
        if(pxEmConvertInputValue) {
            pxEmResult.innerHTML = pxEmConvertInputValue / pxDefaultValue  + "em"; 
        } else {
            pxEmResult.innerHTML = emPxConvertInputValue * pxDefaultValue + "px";
        }

        if (isNaN (pxDefaultValue) || isNaN (emPxConvertInputValue) || isNaN (pxEmConvertInputValue)) {
            pxEmResult.innerHTML = "Erro! Use apenas números";
            pxEmResult.style.color = "red";
        } else {
            pxEmResult.style.color = "";
        }
    };
}