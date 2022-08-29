	var errores=0;	
	var letrasTipeadas="";
	function seleccionarPalabra(){
			var valor = Math.floor(Math.random()*listaPalabras.length);
			palabra = listaPalabras[valor].toUpperCase();
		//dibujarFigura(0);
		dibujarGuion(palabra.length);
	}
	
	
	
	/*function mostrarImagenes(numeroError){
		dibujarFigura(numeroError);	  
    }*/
	
	
	
	function dibujarFigura(numero){
		var x=50;
		var y=120;
		/*coordenadas=[[50,140,150,140],[100,140,100,20],[99,20,130,20],[130,20,130,50],[130,50,5],[130,55,130,80],[130,55,120,65],[130,55,140,65],[130,80,120,90],[130,80,140,90]];*/
		var coordImagenes=[[x,y,200,2],[x+80,y,2,-100],[x+80,y-100,40,2],[x+118,y-110,2,40],[x+114,y-83,10,10],[x+118,y-73,2,20],[x+110,y-73,10,10],[x+117,y-73,10,10],[x+110,y-53,10,10],[x+117,y-53,10,10]];
	
		var imagenes=['imagenes/base.svg','imagenes/poste.svg','imagenes/techo.svg','imagenes/soga.svg','imagenes/cabeza.svg','imagenes/cuerpo.svg','imagenes/brazoDcho.svg','imagenes/brazoIzq.svg','imagenes/pieDcho.svg','imagenes/pieIzq.svg'];
		console.log(numero);
		const canvas = document.querySelector("canvas");
		const context = canvas.getContext('2d');
		/*if (numero!=4){
			context.beginPath();
			context.moveTo(coordenadas[numero][0],coordenadas[numero][1]);
			context.lineTo(coordenadas[numero][2],coordenadas[numero][3]);
			context.stroke();
			*/
			var img = new Image(); 
			img.src =imagenes[numero];
	
			context.drawImage(img,coordImagenes[numero][0],coordImagenes[numero][1],coordImagenes[numero][2],coordImagenes[numero][3]);
      
			
			
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
	
	function dibujarGuion(cantidad){
		
		var caja = document.getElementById('cajaPalabra');	
		const img= document.createElement('img');
		img.src='imagenes/baseLetras.svg';
		img.className='imagenGuion';
		var tamanho=img.width;
		
		
		var space=caja.width-(tamanho*cantidad);
		
		var paddingInicial=space/(cantidad+1);
		
		img.style.paddingLeft=paddingInicial;
		for(let x=0;x<cantidad;x++){
			const img= document.createElement('img');
			img.src='imagenes/baseLetras.svg';
			img.className='imagenGuion';
			img.id=x;
			console.log(paddingInicial);
			console.log(cantidad);
			caja.appendChild(img);
			
		}
	

		
	}
	
	function teclaPresionada(event){
		if ((event.keyCode >=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122)){
		var elemento=document.getElementById('letrasIngresadas');
		const p= document.createElement("p");
		var letra=String.fromCharCode(event.keyCode);
		if (!letrasTipeadas.includes(letra)){
			const node= document.createTextNode(letra);
			letrasTipeadas=+letra;
			p.appendChild(node);
			elemento.appendChild(p);
			evaluarLetra(letra);
			}
		} else {
			alert("Error debe presionar una letra del abecedario");
			
			
		}
	}
	
	function evaluarLetra(letra){
		var encontrada=true;
		
		for(const indice in palabra){
			
			if (letra==palabra[indice]){
				encontrada=false;		
				var img = document.getElementById(indice);
				img.src="";
				img.alt=letra;
						
			}
			
				
		}
		 	
		if (encontrada){
			
			dibujarFigura(errores);
			errores++;
			if (errores==10){
				alert("Haz Perdido la Palabra era  " + palabra); 
				
			}
		}
		
		
		}
		
	