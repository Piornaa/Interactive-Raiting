
// numero de botones
var numbers = document.querySelectorAll("button").length;


// agrega y quita la clase
function selectDeselect (tecla) {
    document.querySelector(".a").classList.remove("background-button");
    document.querySelector(".b").classList.remove("background-button");
    document.querySelector(".c").classList.remove("background-button");
    document.querySelector(".d").classList.remove("background-button");
    document.querySelector(".e").classList.remove("background-button");

    document.querySelector("."+tecla).classList.add("background-button");
}


// selecciona el button
function colorSelect (tecla) {
    switch (tecla) {
        case "1":
            selectDeselect("a");
            break;
        case "2":
            selectDeselect("b");
            break;
        case "3":
            selectDeselect("c");
            break;
        case "4":
            selectDeselect("d");
            break;
        case "5":
            selectDeselect("e");
            break;  
        default:
            break;
    }

}

// agregar raking a la frase
function raking (tecla) {
    document.querySelector(".frase").innerHTML="You selected " + tecla + " out of 5";
}


// agregue un oyente a cada button
for (var i=0;i<numbers;i++) {
    var oyente = document.querySelectorAll("button");
    oyente[i].addEventListener("click",btn)
}
function btn () {
    var tecla = this.innerHTML; 

    colorSelect(tecla);
    raking(tecla);
}
    

// funcion del boton submit
function submit () {
    document.querySelector(".conteiner-question").classList.add("invisible");
    document.querySelector(".conteiner-thank").classList.remove("invisible");

    var ranking = document.querySelector(".frase").innerHTML;
    console.log (ranking);
}

