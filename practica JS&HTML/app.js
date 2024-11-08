function toUpper(){

    let test = document.getElementById('test');
    let test2 = document.getElementById('texto');
    let element = document.getElementById('texto');

    console.log(element)
    // element.value = element.value.toUpperCase();

    test.innerHTML = element.value.toUpperCase();
    test2.value = '';
}


function toUpperCaseProprio(element){
    let test = document.getElementById('test');

    element.value = element.value.toUpperCase();
    console.log(element)
    // element.value = texto.toUpperCase();
    test.innerHTML = texto.toUpperCase();
}


window.onload=() => {

    let elemento = document.getElementById("texto");

    // elemento.addEventListener("keyup",function(){
    //     toUpperCase();
    // });

    elemento.addEventListener("keyup", (event) => {
        event.target
        event.target.value = event.target.value.toUpperCase();
    });
}

