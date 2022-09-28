	var errores;	
	var letrasTipeadas=[];
	var cantidadAciertos;
	var lista;
	var espacios=0;
	
	function seleccionarPalabra(){
			lista = sessionStorage.getItem("palabras").split(","); 
			
			var listaIngresos = document.getElementById("letrasIngresadas").focus();
			
			//var listaIngresos = document.getElementById("ingresadas").focus();
			var valor = Math.floor(Math.random()*lista.length);
			palabra = lista[valor].toUpperCase();
			cantidadAciertos=0;
			errores=0;
			letrasTipeadas=[];
			espacios=0;
			const canvas = document.querySelector("canvas");
			const context = canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			
		
		dibujarFigura(errores);
		dibujarGuion(palabra.length,palabra);
		habilitar();
	}
	
	
	
	function dibujarFigura(numero){
		var x=50;
		var y=120;
		
		var coordImagenes=[[x,y,200,2],[x+80,y,2,-100],[x+80,y-100,40,2],[x+118,y-100,2,18],[x+114,y-83,10,10],[x+118,y-73,2,20],[x+110,y-73,10,10],[x+117,y-73,10,10],[x+110,y-53,10,10],[x+117,y-53,10,10]];
	
		var imagenes=['imagenes/base.svg','imagenes/poste.svg','imagenes/techo.svg','imagenes/soga.svg','imagenes/cabeza.svg','imagenes/cuerpo.svg','imagenes/brazoDcho.svg','imagenes/brazoIzq.svg','imagenes/pieDcho.svg','imagenes/pieIzq.svg'];
		const canvas = document.querySelector("canvas");
		const context = canvas.getContext('2d');
			var img = new Image(); 
			img.src =imagenes[numero];
			img.onload =function(){
			
			context.drawImage(img,coordImagenes[numero][0],coordImagenes[numero][1],coordImagenes[numero][2],coordImagenes[numero][3]);
			
			context.restore();
			}
			
		/*} else{
			context.fillStyle = "blue";
			context.beginPath();
			context.arc(coordenadas[numero][0],coordenadas[numero][1],coordenadas[numero][2],0,2*Math.PI);
			context.fill();	
				
		}*/
	}
	
	/*function dibujarGuion(cantidad){
		
		var canva = document.getElementById('cajaPalabra');	
		var context = canva.getContext('2d');
		var img = new Image(); 
		img.src ='imagenes/baseLetras.svg';
		
		var tamanho=img.width;
		
		
		var space=canva.width-(tamanho*cantidad);
		
		var paddingInicial=space/(cantidad+1);
		var padding=paddingInicial;
		console.log(canva.width);
		console.log(cantidad);
		for(let x=0;x<cantidad;x++){
			console.log(padding);
			context.drawImage(img,padding,120,tamanho,2);
			padding=padding+paddingInicial+tamanho;
			
		}
	

		
	}*/
	
	function dibujarGuion(cantidad,palabra){
		
		var caja = document.getElementById('cajaPalabra');	
		var elemento=document.getElementById('letrasIngresadas');
		
		// reseteo las dos cajas de letras
		caja.innerHTML='';
		elemento.innerHTML='';
		const img= document.createElement('img');
		img.src='imagenes/baseLetras.svg';
		img.className='imagenGuion';
		
		var tamanho=img.width;
		
		
		var space=caja.width-(tamanho*cantidad);
		
		var paddingInicial=space/(cantidad+1);
		
		img.style.paddingLeft=paddingInicial;
		for(let x=0;x<cantidad;x++){
		//si No es un espacio en blanco pongo los guiones
			const img= document.createElement('img');
			img.className='imagenGuion';
			img.id=x;
			if (palabra[x]!=' '){
				img.src='imagenes/baseLetras.svg';
		//si es espacio en blanco pongo la imagen con el espacio en blanco
			}else{
				img.src='imagenes/baseEspacio.png';
				espacios++;
			}
			caja.appendChild(img);
		}
	

		
	}
	
	function teclaPresionada(event){
		
		//var letra=event.data.toUpperCase();
		var letra=event.key.toUpperCase();
		if (letra=='BACKSPACE'){
			event.preventDefault();	
		}else if (((letra>='A' && letra<='Z')) && !(letrasTipeadas.includes(letra))){
			 var resultado=evaluarLetra(letra);
	 		 letrasTipeadas.push(letra);

			if (!resultado){
				event.preventDefault();	
			}
		}else{
			event.preventDefault();
		}
		
		
		
		
		
		
		
			
	}
	
	
	function evaluarLetra(letra){
		var noEncontrada=true;
		
		for(const indice in palabra){
			
			if (letra==palabra[indice]){
				noEncontrada=false;		
			
				var img = document.getElementById(indice);
				img.src="";
				img.outerHTML = "<p class='imagenGuion'>"+letra+"</p>";
				/*img.onerror=() => {
					img.onerror = null;
					
					img.outerHTML = "<p class='imagenGuion'>"+letra+"</p>";
				  };
				
				img.alt=letra;*/
				
				cantidadAciertos++;	
			}


			
			
		}
		
		 if (cantidadAciertos==(palabra.length-espacios)){
			
			ganaste();
			
			
		}	
		if (noEncontrada){
			const audio=new Audio();
			audio.src="audios/incorrecta.mp3";
			
			var elemento=document.getElementById('letrasIngresadas');
			
			//if (!letrasTipeadas.includes(letra)){
				//const p= document.createElement("p");
				//const node= document.createTextNode(letra);
				
				//p.appendChild(node);
				//elemento.appendChild(p);
				audio.play();
				errores++;
				dibujarFigura(errores);
			
			//}
			
			if (errores==9){
				perdiste();
				
			}
		}
		
		return noEncontrada;
		}
		
	function perdiste(){
		const audio=new Audio();
		audio.src="audios/wahwah.mp3";
		deshabilitar();
		var br = document.createElement("span");
		var br2 = document.createElement("span");
		br.setAttribute("data-text","La Palabra era");
		br2.setAttribute("data-text",palabra);
		
		var msj = document.getElementById('mensaje');
		var texto=document.getElementById('perdiste');
		texto.textContent = "";
		texto.setAttribute("data-text", "PERDISTE");
		texto.appendChild(br);
		texto.appendChild(br2);
		texto.className='perdiste';
		
		msj.style.visibility='visible';
		setTimeout(ocultar,5000);
		audio.play();
	};
	
	function ganaste(){
		
		const audio=new Audio();
		audio.src="audios/ganaste.mp3";
		deshabilitar();
		var msj = document.getElementById('mensaje');
		var texto=document.getElementById('perdiste');
		texto.classList.replace("perdiste", "ganaste");
		//texto.className='ganaste';
		texto.textContent = "GANASTE"
		texto.setAttribute("data-text", "GANASTE");
		
		
		
		msj.style.visibility='visible';
		setTimeout(ocultar,5000);
		audio.play();
	};

	function ocultar(){
		var msj=document.getElementById('mensaje');
		var nuevoJuego=document.getElementById('nuevo');
		nuevoJuego.focus();
		msj.style.visibility='hidden';
		
	};
	
	function deshabilitar(){
		var msj=document.getElementById('letrasIngresadas').disabled=true;
	}

	function habilitar(){
		var msj=document.getElementById('letrasIngresadas').disabled=false;
	}
		
		
		
	
	
	
	
	function nuevaPartida(){
		const audio=new Audio();
		audio.src="audios/tap_button.mp3";
		audio.play();
		
		if (lista.length<5){
			window.location.href ='ingresarPalabra.html';
		}else{
		audio.src="audios/tap_button.mp3";
		audio.play();
		document.getElementById("letrasIngresadas").value="";
		seleccionarPalabra();
		}
	}