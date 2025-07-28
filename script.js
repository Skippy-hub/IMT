const button = document.querySelector(".form__button");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const inputIMT = document.querySelector("#imt");


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputHeight.value > 0 && inputWeight.value > 0){
        let imt = inputWeight.value / (inputHeight.value / 100)**2;
        inputIMT.value = imt.toFixed(2);

        //Текст
        const form = document.querySelector(".hero__form");
        const result = document.createElement("p");
        result.className = "hero__form-description";

        if (imt < 16){
            result.textContent = "Выраженный дефицит массы тела";
            result.style.color = "red";
        } else if (imt < 18.5){
            result.textContent = "Недостаточная масса тела";
            result.style.color = "yellow";
        } else if (imt < 25){
            result.textContent = "Нормальная масса тела";
            result.style.color = "green";
        } else if (imt < 30){
            result.textContent = "Избыточная масса тела (предожирение)";
            result.style.color = "yellow";
        } else if (imt < 35){
            result.textContent = "Ожирение 1-ой степени";
            result.style.color = "red";
        } else if (imt < 40){
            result.textContent = "Ожирение 2-ой степени";
            result.style.color = "red";
        } else if (imt > 40){
            result.textContent = "Ожирение 3-ей степени";
            result.style.color = "red";
        }


        //Костыль
        const paragraph = document.querySelector(".hero__form-description");
        if(paragraph){
            paragraph.remove();
            form.appendChild(result);
        } else{
            result.remove();
            form.appendChild(result);
        }


    } else{
        alert("Заполните поля!");
        inputIMT.value = "";
    }
});