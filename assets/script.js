
//Logo aparece con borde de color seleccionado al hacer click//

const boton = document.querySelector("#boton")

const logo = document.querySelector("#logo");
const p = document.querySelector("#Comprar")
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");


logo.addEventListener("click", () => {
    logo.classList.toggle("borde");
});



boton.addEventListener("click", () => {


    resultado = parseInt(number1.value) + parseInt(number2.value) + parseInt(number3.value);

    console.log(resultado);


    if (resultado >0 && resultado <10){
    
       p.textContent=`Llevas ${resultado} stickers`
       p.style.fontSize=`2rem`
       p.style.backgroundColor=`orange`
       p.style.borderRadius=`10px`
    }

    else if (resultado >10){
    
       p.textContent=`Sobrepasas el límite de 10 Stickers!!!`
       p.style.fontSize=`2rem`
       p.style.backgroundColor=`orange`
       p.style.borderRadius=`10px`
    }

    else if (resultado == 0){
    
        p.textContent=`Debes seleccionar la cantidad de stickers`
        p.style.fontSize=`2rem`
        p.style.backgroundColor=`orange`
        p.style.borderRadius=`10px`
     }
}
)

boton2.addEventListener("click",()=>{
    const password = (digito1.value+digito2.value+digito3.value);

    if(password == "911"){
        parrafo2.textContent="password 1 correcta";
        parrafo2.style.color="green";
        parrafo2.style.fontSize="20px";
        return;
    }

    if(password == "714"){
        parrafo2.textContent="password 2 correcta";
        parrafo2.style.color="green";
        parrafo2.style.fontSize="20px";
        return;
    }

    if(password !== "714" || password!== "911"){
        parrafo2.textContent="password incorrecta";
        parrafo2.style.color="red";
        parrafo2.style.fontSize="20px";
        return;
    }
})