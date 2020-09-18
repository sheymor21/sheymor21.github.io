const listpalabras = ["gallo","caballo","dormir","comer","pelear","beber","caminar","jugar","manzana","pera"
,"leon","cangrejo","camello","surfear","tamarindo","agua","ola","feo","lindo","mariposa","yegua","ventana","farol"
,"lona","percha","zapato","programa","java","python","hola","gordo","sofoque","menol","naruto","rosario","torre"
,"reina","rey","caballero","principe","pantera","noche","dia","fruta","toro","republica","dominicano","jarro"
,"mancha","rapero","mouse"];

var Palabra = [];
var LugarPalabra = document.querySelector('#palabra');
var LugarIntentos = document.querySelector('#intentos');
var mostrar = [];
var intentos = 5;

function aleatorio(){
  let posicion = Math.floor(Math.random()*51);
   let aleapalabra = listpalabras[posicion];
    Palabra = aleapalabra.split('');
   for(let tacha of Palabra){
        mostrar.push('-');
   }
   Mostrar();
}

function botones(letra){
    for(const [position,Letra] of Palabra.entries()){
        if(letra == Letra){
            mostrar[position] = letra;
            colorbtnBien(letra);            
        }
        
    }

    LugarPalabra.textContent = mostrar.join('');

    if(!Palabra.includes(letra)){
        intentos--;
    } 

    Mostrar();
    imagen();
    desabilitar(letra);
    acabar();
}

function Mostrar(){
    LugarPalabra.textContent = mostrar.join('');
    LugarIntentos.textContent = "Cantidad de intentos: "+intentos;
}

function acabar(){
    if(!mostrar.includes('-')){
        acabarBien();
    }

    if(intentos == 0){
        acabarMal();
    }
}

function acabarMal(){
    let tex = document.getElementById('Mbody')
    tex.innerText = "Fue un buen intento, la palabra era "+Palabra.join('')+", click al boton azul si desea volver a jugar";
    let cerrar = document.getElementById('modalcerrar');
        let jquery = document.getElementById("jqueryzone");
        let scrip = document.createElement("script");
        scrip.textContent = "$('#modal').modal('show');";
        jquery.appendChild(scrip);
        
}

function acabarBien(){
    let cerrar = document.getElementById('modalcerrar');
        let jquery = document.getElementById("jqueryzone");
        let scrip = document.createElement("script");
        scrip.textContent = "$('#modal').modal('show');";

        jquery.appendChild(scrip);
}

function botonCerrar(){
    let jquery = document.getElementById("jqueryzone");
    let scrip = document.createElement("script");
    scrip.textContent = "$('.btn-outline-dark').attr('disabled','disabled');";

    jquery.appendChild(scrip);

}

function desabilitar(boton){
 
    switch(boton){
        case 'q':
            let btnQ = document.getElementById("btnQ");
            btnQ.disabled = true;
            break;
        case 'w':
            let btnW = document.getElementById("btnW");
            btnW.disabled = true;
            break;
        case 'e':
            let btnE = document.getElementById("btnE");
            btnE.disabled = true;
            break;
        case 'r':
            let btnR = document.getElementById("btnR");
            btnR.disabled = true;
            break;
        case 't':
            let btnT = document.getElementById("btnT");
            btnT.disabled = true;
            break;
        case 'y':
            let btnY = document.getElementById("btnY");
            btnY.disabled = true;
            break;
        case 'u':
            let btnU = document.getElementById("btnU");
            btnU.disabled = true;
            break;
        case 'i':
            let btnI = document.getElementById("btnI");
            btnI.disabled = true;
            break;
        case 'o':
            let btnO = document.getElementById("btnO");
            btnO.disabled = true;
            break;
        case 'p':
            let btnP = document.getElementById("btnP");
            btnP.disabled = true;
            break;
        case 'a':
            let btnA = document.getElementById("btnA");
            btnA.disabled = true;
            break;
        case 's':
            let btnS = document.getElementById("btnS");
            btnS.disabled = true;
            break;
        case 'd':
            let btnD = document.getElementById("btnD");
            btnD.disabled = true;
            break;
        case 'f':
            let btnF = document.getElementById("btnF");
            btnF.disabled = true;
            break;
        case 'g':
            let btnG = document.getElementById("btnG");
            btnG.disabled = true;
            break;
        case 'h':
            let btnH = document.getElementById("btnH");
            btnH.disabled = true;
            break;
        case 'j':
            let btnJ = document.getElementById("btnJ");
            btnJ.disabled = true;
            break;
        case 'k':
            let btnK = document.getElementById("btnK");
            btnK.disabled = true;
            break;
        case 'l':
            let btnL = document.getElementById("btnL");
            btnL.disabled = true;
            break;
        case 'z':
            let btnZ = document.getElementById("btnZ");
            btnZ.disabled = true;
            break;
        case 'x':
            let btnX = document.getElementById("btnX");
            btnX.disabled = true;
            break;
        case 'c':
            let btnC = document.getElementById("btnC");
            btnC.disabled = true;
            break;
        case 'v':
            let btnV = document.getElementById("btnV");
            btnV.disabled = true;
            break;
        case 'b':
            let btnB = document.getElementById("btnB");
            btnB.disabled = true;
            break;
        case 'n':
            let btnN = document.getElementById("btnN");
            btnN.disabled = true;
            break;
        case 'm':
            let btnM = document.getElementById("btnM");
            btnM.disabled = true;
            break;
        

    }
    
}

function imagen(){
    let jquery = document.getElementById("jqueryzone");
    switch(intentos){
        case 4:
            let scrip1 = document.createElement("script");
            scrip1.textContent =  $("img").replaceWith('<img src="img/img2.jpg" alt="" srcset="" id="imagen">');
            jquery.appendChild(scrip1);
            break;
        case 3:
            let scrip2 = document.createElement("script");
            scrip2.textContent =  $("img").replaceWith('<img src="img/img3.jpg" alt="" srcset="" id="imagen">');
            jquery.appendChild(scrip2);
            break;
        case 2:
            let scrip3 = document.createElement("script");
            scrip3.textContent =  $("img").replaceWith('<img src="img/img4.jpg" alt="" srcset="" id="imagen">');
            jquery.appendChild(scrip3);
            break;
        case 1:
            let scrip4 = document.createElement("script");
            scrip4.textContent =  $("img").replaceWith('<img src="img/img5.jpg" alt="" srcset="" id="imagen">');
            jquery.appendChild(scrip4);
            break;
        case 0:
            let scrip5 = document.createElement("script");
            scrip5.textContent =  $("img").replaceWith('<img src="img/img6.jpg" alt="" srcset="" id="imagen">');
            jquery.appendChild(scrip5);
             break;
            
    }
        
        
}


function colorbtnBien(boto){
 
    switch(boto){
        case 'q':
            let btnQ = document.getElementById("btnQ");
            btnQ.style.backgroundColor = 'green';
            break;
        case 'w':
            let btnW = document.getElementById("btnW");
            btnW.style.backgroundColor = 'green';
            break;
        case 'e':
            let btnE = document.getElementById("btnE");
            btnE.style.backgroundColor = 'green';
            break;
        case 'r':
            let btnR = document.getElementById("btnR");
            btnR.style.backgroundColor = 'green';
            break;
        case 't':
            let btnT = document.getElementById("btnT");
            btnT.style.backgroundColor = 'green';
            break;
        case 'y':
            let btnY = document.getElementById("btnY");
            btnY.style.backgroundColor = 'green';
            break;
        case 'u':
            let btnU = document.getElementById("btnU");
            btnU.style.backgroundColor = 'green';
            break;
        case 'i':
            let btnI = document.getElementById("btnI");
            btnI.style.backgroundColor = 'green';
            break;
        case 'o':
            let btnO = document.getElementById("btnO");
            btnO.style.backgroundColor = 'green';
            break;
        case 'p':
            let btnP = document.getElementById("btnP");
            btnP.style.backgroundColor = 'green'; 
            break;
        case 'a':
            let btnA = document.getElementById("btnA");
            btnA.style.backgroundColor = 'green';
            break;
        case 's':
            let btnS = document.getElementById("btnS");
            btnS.style.backgroundColor = 'green';
            break;
        case 'd':
            let btnD = document.getElementById("btnD");
            btnD.style.backgroundColor = 'green';
            break;
        case 'f':
            let btnF = document.getElementById("btnF");
            btnF.style.backgroundColor = 'green';
            break;
        case 'g':
            let btnG = document.getElementById("btnG");
            btnG.style.backgroundColor = 'green';
            break;
        case 'h':
            let btnH = document.getElementById("btnH");
            btnH.style.backgroundColor = 'green';
            break;
        case 'j':
            let btnJ = document.getElementById("btnJ");
            btnJ.style.backgroundColor = 'green';
            break;
        case 'k':
            let btnK = document.getElementById("btnK");
            btnK.style.backgroundColor = 'green';
            break;
        case 'l':
            let btnL = document.getElementById("btnL");
            btnL.style.backgroundColor = 'green';
            break;
        case 'z':
            let btnZ = document.getElementById("btnZ");
            btnZ.style.backgroundColor = 'green';
            break;
        case 'x':
            let btnX = document.getElementById("btnX");
            btnX.style.backgroundColor = 'green';
            break;
        case 'c':
            let btnC = document.getElementById("btnC");
            btnC.style.backgroundColor = 'green';
            break;
        case 'v':
            let btnV = document.getElementById("btnV");
            btnV.style.backgroundColor = 'green';
            break;
        case 'b':
            let btnB = document.getElementById("btnB");
            btnB.style.backgroundColor = 'green';
            break;
        case 'n':
            let btnN = document.getElementById("btnN");
            btnN.style.backgroundColor = 'green';
            break;
        case 'm':
            let btnM = document.getElementById("btnM");
            btnM.style.backgroundColor = 'green';
            break;      
    }
    
}

aleatorio();