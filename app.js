var widthMAX = window.innerWidth - 30,		// largura da parte de dentro da tela do navegador
	heightMAX = window.innerHeight - 30;		// altura da parte de dentro da tela do navegador




window.onload = function() {
	
	
	
}

function ampliar (i) {
	document.getElementById("coat").style.zIndex = "100";
	document.getElementById("coat").style.opacity = "1";
	document.getElementById("X").style.opacity = "1";
	
	document.getElementById("imagemampliada").height = heightMAX;
	
	if (i == "narancia") 
		document.getElementById("imagemampliada").src = "illusts/narancia.png";
	if (i == "mother3") 
		document.getElementById("imagemampliada").src = "illusts/mother3.png";
	if (i == "holymother") 
		document.getElementById("imagemampliada").src = "illusts/holymother.jpg";
}

function fechar (){
	document.getElementById("coat").style.zIndex = "0";
	document.getElementById("coat").style.opacity = "0";
	document.getElementById("X").style.opacity = "0";
}
