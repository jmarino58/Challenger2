		var listaPalabras=["hola","elefante","tigre","espejo","sauron"];
		
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
		listaPalabras.push(texto);
		window.location.href ='juego.html';
	}

	