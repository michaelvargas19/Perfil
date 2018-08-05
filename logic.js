function changeSeccion(element){
    element.style.backgroundColor="green";
    element.style.border="solid";
    element.style.borderColor="red";
   
}

function BackchangeSeccion(element){
    element.style.backgroundColor="transparent";
    element.style.border="transparent";
    element.style.borderColor="transparent";    

}




function mark(element){
    element.style.color="red";
}



var nombres = [];
var mensajes = [];

function enviarMensaje(nombre,texto){
	
	var vn = document.getElementById("vnombre");	
	var vt = document.getElementById("vtexto");	
	var ul = document.getElementById("ulchat");
  	var li = document.createElement("li");
	var b1 = false;
	var b2 = false;

	if(nombre.value){
		vn.childNodes[0].nodeValue="Valido";
		vn.style.color="green";	
		b1=true;
	}
	
	else if(!nombre.value){
		vn.childNodes[0].nodeValue="Invalido";
		vn.style.color="red";
	}
	
	if(texto.value){
		vt.childNodes[0].nodeValue="Valido";
		vt.style.color="green";	
		if(texto.value.length <=300){
		b2=true;
		}
	}
	
	else if(!texto.value){
		vt.childNodes[0].nodeValue="Invalido";
		vt.style.color="red";
	}		
	
	if(b1 && b2){

		nombres.push(nombre.value);
		mensajes.push(texto.value);
		
		var pos = nombres.length-1;

		  li.appendChild(document.createTextNode(nombres[pos] + ": "+ mensajes[pos]));

		ul.appendChild(li);


	}
	
}

window.onload = function(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
   

}


//////////////////////////////77777777

