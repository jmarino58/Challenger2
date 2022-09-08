var potter=["Ashwinders","Aaethonan","Avada kedabra","Acromántula","Bowtruckle","Bludger","Waddiwassi","Rictunsempra","Morsmordre"];		
var peliculas=["El Padrino","Casablanca","Tiburon","El Graduado","ChinaTown","Fargo","Alien","Titanic","Watchmen","Seven","Psicosis"];
var series=["Sandman","WestWorld","Hulk","Mandaloriano","Bridgerton","Outlander"];
var geografia=["Acantilado","Alemania","Anticiclon","Asteroide","Archipielago","Biosfera","CentroAmerica","Cataratas","Cometa"];
var enciclopedia=["hola","elefante","tigre","espejo","sauron","Caballo","Latinoamerica","Chubasco","Xilofon","Concentracion"];
var medicina=["Acromegalia","Antipireticos","Astigmatismo","Bradicardia","Diabetes","Enfermedad","Estreñimiento","Estrabismo","Fibrinolisis","Glucosuria"];
var colores=["Blanco","Rojo","Marron","Negro","Purpura","Naranja","Rosa","Amarillo","Purpura","Verde"];
var ciudades=["Buenos Aires","Santiago de Chile","Mejico","La Paz","Asuncion","Brasilia","Bogota","Managua","Medellin", "Monterrey", "Rio de Janeiro","Curitiba","Cordoba","Rosario"];

var palabrasCustom=[];
/*
sessionStorage.setItem("palabrasPotter", palabrasPotter); 		
sessionStorage.setItem("palabrasPeliulas", palabrasPeliculas); 		
sessionStorage.setItem("palabrasSeries", palabrasSeries); 		
sessionStorage.setItem("palabrasGeografia", palabrasGeografia); 		
sessionStorage.setItem("palabrasEmciclopedia", palabrasEnciclopedia); 		
sessionStorage.setItem("palabrasMedicina", palabrasMedicina); 		
sessionStorage.setItem("palabrasColores", palabrasColores); 		
sessionStorage.setItem("palabrasCiudades", palabrasCiudades); 		
*/
function activarDesactivarBotones(){
		var frase = document.getElementById('palabra').value;
		var boton1 = document.getElementById('guardar');
		

		if (frase.length!=0){
		boton1.disabled=false;
		
		}else{
				boton1.disabled=true;
				
		}
		
	};
	

	function guardarTexto(){
		texto = document.getElementById('palabra').value;
		palabrasCustom.push(texto);
		sessionStorage.setItem("palabras", palabrasCustom); 
		window.location.href ='juego.html';
	}

	
	function muteButton(audio){
		var pistaAudio = document.getElementById(audio);
		var imageMute= document.getElementById('btn_mute');
		pistaAudio.muted = !pistaAudio.muted;
		
		if (pistaAudio.muted){
			imageMute.src="imagenes/mute_icon.png";
		}else{
			imageMute.src="imagenes/unmute_icon.png";
		}	
	}
	
	function jugarClick(id){
		const audio=new Audio();
		audio.src="audios/tap_button.mp3";
		audio.play();
		setTimeout(function(){
		mover(id);},400);
		
		
	}
	function mover(id){
		console.log(id);
		switch (id){
			case 'potter':
				sessionStorage.setItem("palabras", potter); 
				window.location.href ='juego.html';
			break;
			case 'peliculas':
				sessionStorage.setItem("palabras", peliculas); 
				window.location.href ='juego.html';
			break;
			case 'series':
				sessionStorage.setItem("palabras", series); 
				window.location.href ='juego.html';
			break;
			case 'geografia':
				sessionStorage.setItem("palabras", geografia); 
				window.location.href ='juego.html';
			break;
			case 'ciudades':
				sessionStorage.setItem("palabras", ciudades); 
				window.location.href ='juego.html';
			break;
			case 'medicina':
				sessionStorage.setItem("palabras", medicina); 
				window.location.href ='juego.html';
			break;
			case 'colores':
				sessionStorage.setItem("palabras", colores); 
				window.location.href ='juego.html';
			break;
			case 'enciclopedia':
				sessionStorage.setItem("palabras", enciclopedia); 
				window.location.href ='juego.html';
			break;
			case 'botonAgregar':
				window.location.href ='ingresarPalabra.html';
			break;	
			case 'guardar':
				guardarTexto();
			break;
			case 'cancelar':
				window.location.href ='index.html';
			break;
			case 'desistir':
				window.location.href ='index.html'
			break;
			
		}
	}
	
	function playAudio(){
		
		const audio=new Audio();
		audio.src="audios/tap_button.mp3";
		audio.play();
	}