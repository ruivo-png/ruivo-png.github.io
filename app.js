var widthMAX = window.innerWidth,		// largura da parte de dentro da tela do navegador
	heightMAX = window.innerHeight;		// altura da parte de dentro da tela do navegador

var previousBGColor = String(document.body.style.backgroundColor),
	previousBG = String(document.body.style.backgroundImage);

window.onload = function() {
	
	
	thumbnails();
}


function thumbnails() {
	document.getElementsByClassName("thumbnailimage")[0].style.backgroundImage = thumb01;
	document.getElementsByClassName("thumbnailimage")[1].style.backgroundImage = thumb02;
	document.getElementsByClassName("thumbnailimage")[2].style.backgroundImage = thumb03;
	document.getElementsByClassName("thumbnailimage")[3].style.backgroundImage = thumb04;
}


function desc(desenho) {
		if (desenho == '01')
			document.getElementsByClassName("desc")[0].innerHTML = desc01;
		if (desenho == '02')
			document.getElementsByClassName("desc")[1].innerHTML = desc02;
		if (desenho == '03')
			document.getElementsByClassName("desc")[2].innerHTML = desc03;
		if (desenho == '04')
			document.getElementsByClassName("desc")[3].innerHTML = desc04;
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
	
	
	if (i == "01") 
		document.getElementById("imagemampliada").src = full01;
	if (i == "02") 
		document.getElementById("imagemampliada").src = full02;
	if (i == "03") 
		document.getElementById("imagemampliada").src = full03;
	if (i == "04") 
		document.getElementById("imagemampliada").src = full04;
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
	
	document.getElementById("imagemampliada").src = "";
}

