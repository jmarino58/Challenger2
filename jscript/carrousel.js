		let container = document.querySelector('.contenedor');
		let interno=document.querySelector('.interno');
		
		
		let pressed = false;
		let startX;
		let x;
		let scrollLeft;
		
		container.addEventListener('mousedown',(e)=>{
			
			pressed = true;
			startX=e.pageX;
			container.style.cursor = 'grabbing';
			//scrollLeft= container.scrollLeft;
		});
		
		container.addEventListener('mouseleave',()=>{
			pressed = false;
			
			
		});
		
		container.addEventListener('mouseup',()=>{
			container.style.cursor = 'grab';
			pressed = false;
		});
		
		container.addEventListener('mousemove',(e)=>{
			if (!pressed) return;
			e.preventDefault();
			
			x = e.clientX; 
			interno.scrollLeft=x+startX;
			
		 
		});
	
	
	
	
	