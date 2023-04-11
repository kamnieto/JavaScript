// declarativa

function miFunction(){
    return 3;
}


// expresion

var myFunction = function(a,b){
    return a+b;
}

myFunction();




function saludar(estudiante) {
    let end=estudiante.length;
    for (let index = 0; index < end; index++) {
    console.log("hola, como estas " + estudiante[index]+"? :D");
    }

}

var nombres=["Andres","Camilo","Juan","Miguel","Leonarso"];