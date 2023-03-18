let block = document.querySelector(".circle")



function animation( elem) { 
	var $ = {
		radius  :     250, 
		speed   :     25 
	}
	var f = 0;
	var s = 2 * Math.PI / 180; 
	setInterval(function() { 
		f += s; 
		  elem.style.left =  235 + $.radius * Math.sin(f)  + 'px'; 
		  elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
	}, $.speed)
}
  

animation(block)