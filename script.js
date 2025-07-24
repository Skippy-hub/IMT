const button = document.querySelector(".form__button");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const inputIMT = document.querySelector("#imt");


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputHeight.value > 0 && inputWeight.value > 0){
        let imt = inputWeight.value / (inputHeight.value / 100)**2;
        inputIMT.value = imt.toFixed(2);
    }
});