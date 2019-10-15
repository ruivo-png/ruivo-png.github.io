var widthMAX = window.innerWidth,		// largura da parte de dentro da tela do navegador
	heightMAX = window.innerHeight;		// altura da parte de dentro da tela do navegador

var previousBGColor = String(document.body.style.backgroundColor),
	previousBG = String(document.body.style.backgroundImage);

window.onload = function() {
	
	
	
}

function ampliar (i) {

	document.getElementById("coat").style.width = "100%";
	document.getElementById("coat").style.height = "100%";
	
	document.body.style.transition = "all 0.3s";
	document.getElementById("coat").transition = "all 0.3s";
	document.getElementById("imagemampliada").transition = "all 2s";
	document.getElementById("thumbcontainer").transition = "all 0.1s";
	
	document.getElementById("origfanwindow").style.opacity = "0";
	document.getElementById("thumbcontainer").style.opacity = "0";
	document.body.style.backgroundColor = "black";
	document.body.style.backgroundImage = "none";
	document.body.style.overflowY = "hidden";
	document.getElementById("coat").style.zIndex = "100";
	document.getElementById("coat").style.opacity = "1";
	document.getElementById("X").style.opacity = "1";
	
	
	if (i == "narancia") 
		document.getElementById("imagemampliada").src = "illusts/narancia.png";
	if (i == "mother3") 
		document.getElementById("imagemampliada").src = "illusts/mother3.png";
	if (i == "holymother") 
		document.getElementById("imagemampliada").src = "illusts/holymother.jpg";
}

function fechar (){
	document.body.style.backgroundColor = previousBGColor;
	document.body.style.backgroundImage = previousBG;
	document.getElementById("coat").style.zIndex = "-10";
	document.getElementById("coat").style.opacity = "0";
	document.getElementById("X").style.opacity = "0";
	document.body.style.overflowY = "auto";
	document.getElementById("origfanwindow").style.opacity = "1";
	document.getElementById("thumbcontainer").style.opacity = "1";
}
