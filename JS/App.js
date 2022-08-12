// Se crea una constante y se asigna al boton
const btnsumar=document.getElementById("Btnsumar");
// El boton estará atento cuando de click y ejecutará la funcion "sumar"
btnsumar.addEventListener("click", sumar);
function sumar(){
    // Detectar las variables
    const numero1=Number(document.getElementById("numero1").value);
    const numero2=Number(document.getElementById("numero2").value);
    //Muestra los resultados en el cuadro verde
    const divresultado=document.getElementById("result_suma");
    // Operación
    resultado=numero1+numero2;
    // Muestra el resultado
    divresultado.innerText=resultado;
}

//Sección restar

const btnrestar=document.getElementById("Btnrestar");
btnrestar.addEventListener("click", restar);
function restar(){
    const numero1= Number(document.getElementById("numero3").value);
    const numero2= Number(document.getElementById("numero4").value);
    const divresultado1=document.getElementById("result_resta");
    resultado=numero1-numero2;
    divresultado1.innerText=resultado;
}

//Sección multiplicar

const btnmulti=document.getElementById("Btnmultiplicar");
btnmulti.addEventListener ("click", multiplicar);
function multiplicar(){
    const numero1= Number(document.getElementById("numero5").value);
    const numero2= Number(document.getElementById("numero6").value);
    const divresultado2=document.getElementById("result_multi");
    resultado=numero1*numero2;
    divresultado2.innerText=resultado;
}

//Sección dividir

const btndiv=document.getElementById("Btndividir");
btndiv.addEventListener ("click", dividir);
function dividir(){
    const numero1= Number(document.getElementById("numero7").value);
    const numero2= Number(document.getElementById("numero8").value);
    const divresultado3=document.getElementById("result_div");
    resultado=numero1/numero2;
    divresultado3.innerText=resultado;
}

//Sección números ascendentes

const btnnum=document.getElementById("Btnnumeros");
btnnum.addEventListener("click", numeros);
function numeros(){
    const listas=document.getElementById("listado");
    //Limpia la información o solo la muestra una vez. 
    listas.innerText="";
    for(let x=1; x<=100; x=x+1){
        console.log(x);
        const li=document.createElement("li");
        li.setAtribute("Class", "list-group-item");
        li.innerText =x;
        listas.appendChiId(li);
    }
    //Los comandos for(), while() sirven par repetir una acción hasta que se cumpla lo establecido 
    //Las comparaciones if(), switch() sirven para verificar que las setencias sean verdaderas o falsas
    //for(1:x=0;2:x=100;3:x+1)
    //Se asigna un valor inicial
    //Se asigna un valor final 
    //incremento del numero
}

const btncali=document.getElementById("Btncali");
boton6.addEventListener("click", calificaciones);
function calificaciones(){
    const calificaciones=document.getElementById("Calificación", value);
    const resultado=document.getElementById("result_cal");
    if(calificaciones>=8){
        resultado.innerText="Aprobado"
    }
    else{
        resultado.innerText="Reprobado"
        const audio=document.getElementById("audio");
    }
}
