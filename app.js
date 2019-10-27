var widthMAX = window.innerWidth,		// largura da parte de dentro da tela do navegador
	heightMAX = window.innerHeight;		// altura da parte de dentro da tela do navegador

var previousBGColor = String(document.body.style.backgroundColor),
	previousBG = String(document.body.style.backgroundImage);
	
var lang = -1;

window.onload = function() {
	currentPage('index', lang);
}

function currentPage(i, language) {
	if (i == 'index') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("index_container").style.display = "flex";
		
		document.body.style.overflowY = "hidden";
	}
	
	if (i == 'about') {
		document.getElementById("index_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("about_container").style.display = "flex";
		
		document.body.style.overflowY = "hidden";
	}
	
	if (i == 'illustration') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("index_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "inline";
		
		illustTab('original')
		thumbnails_illust();
		document.getElementById("button_orig").disabled = true;
		document.getElementById("button_fan").disabled = false;
		
		document.body.style.overflowY = "scroll";
	}
	
	if (i == 'design') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("index_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "inline";
	
		thumbnails_illust();
		
		document.body.style.overflowY = "scroll";
	}
	
	
	
	if (language != 0 && language != 1) {
		translate(language);
		document.getElementById("eng").disabled = true;
		document.getElementById("ptbr").disabled = false;
	}
}

function illustTab(i) {
	if (i == 'original') {
		document.getElementById("fanart").style.display = "none";
		document.getElementById("original").style.display = "inline";
		document.getElementById("button_orig").disabled = true;
		document.getElementById("button_fan").disabled = false;
	}
	
	if (i == 'fanart') {
		document.getElementById("original").style.display = "none";
		document.getElementById("fanart").style.display = "inline";
		document.getElementById("button_fan").disabled = true;
		document.getElementById("button_orig").disabled = false;
	}
}

function changeLang(language) {
	translate(language);
	
	if (language == 0) {
		document.getElementById("eng").disabled = true;
		document.getElementById("ptbr").disabled = false;
	}
	
	if (language == 1) {
		document.getElementById("ptbr").disabled = true;
		document.getElementById("eng").disabled = false;
	}
}

function translate(language) {
	if (language != 0 && language != 1)
		lang = 0;
	else {
		lang = language;
	}
	
	// INDEX
	if (lang == 0)	{
		document.getElementById("txt_intro").innerHTML = index[0];
		document.getElementById("txt_top_lang").innerHTML = index[2];
		document.getElementById("txt_abtcontact").innerHTML = index[4];
		//links
		document.getElementById("txt_link_illusts").innerHTML = index[6];
		document.getElementById("txt_link_animation").innerHTML = index[8];
		
	}
		
	if (lang == 1)	{
		document.getElementById("txt_intro").innerHTML = index[1];
		document.getElementById("txt_top_lang").innerHTML = index[3];
		document.getElementById("txt_abtcontact").innerHTML = index[5];
		//links
		document.getElementById("txt_link_illusts").innerHTML = index[7];
		document.getElementById("txt_link_animation").innerHTML = index[9];
	}
	
	// ABOUT
	
	if (lang == 0)	{
		document.getElementById("txt_top_about").innerHTML = about[2];
		document.getElementById("txt_back_about").innerHTML = about[4];
	}
		
	if (lang == 1)	{
		document.getElementById("txt_top_about").innerHTML = about[3];
		document.getElementById("txt_back_about").innerHTML = about[5];
	}
	
	// ILLUST
	if (lang == 0)	{
		document.getElementById("txt_top_illust").innerHTML = illust[0];
		document.getElementById("txt_back_illust").innerHTML = illust[2];
	}
		
	if (lang == 1)	{
		document.getElementById("txt_top_illust").innerHTML = illust[1];
		document.getElementById("txt_back_illust").innerHTML = illust[3];
	}
	
	// DESIGN
	if (lang == 0)	{
		document.getElementById("txt_back_design").innerHTML = design[0];
	}
		
	if (lang == 1)	{
		document.getElementById("txt_back_design").innerHTML = design[1];
	}
	
	// ABOUT
	if (lang == 0)	{
		document.getElementById("txt_actualabout").innerHTML = about[0];
		document.getElementById("txt_top_actualabout").innerHTML = about[2];
	}
		
	if (lang == 1)	{
		document.getElementById("txt_actualabout").innerHTML = about[1];
		document.getElementById("txt_top_actualabout").innerHTML = about[3];
	}
}	

function thumbnails_illust() {
	var n;
	
	//original
	for (n = 0; n < max_orig; n++)
		document.getElementsByClassName("thumbnailimage_orig")[n].style.backgroundImage = orig_thumb[n];
	
	// fanart
	for (n = 0; n < max_fan; n++)
		document.getElementsByClassName("thumbnailimage_fan")[n].style.backgroundImage = fan_thumb[n];
}

function desc(tipo, i) {
	if (tipo == "orig") {
		document.getElementsByClassName("thumbnailcoat_orig")[i].style.background = "rgba(0, 0, 0, 0.8)";
		document.getElementsByClassName("thumbnailimage_orig")[i].style.opacity = "0.2";
		document.getElementsByClassName("orig_desc")[i].style.opacity = "1";
		document.getElementsByClassName("orig_desc")[i].innerHTML = orig_desc[i];
	}
	if (tipo == "fan") {
		document.getElementsByClassName("thumbnailcoat_fan")[i].style.background = "rgba(0, 0, 0, 0.8)";
		document.getElementsByClassName("thumbnailimage_fan")[i].style.opacity = "0.2";
		document.getElementsByClassName("fan_desc")[i].style.opacity = "1";
		document.getElementsByClassName("fan_desc")[i].innerHTML = fan_desc[i];
	}
}

function outdesc(tipo, i) {
	
	if (tipo == "orig") {
		document.getElementsByClassName("thumbnailcoat_orig")[i].style.background = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("thumbnailimage_orig")[i].style.opacity = "1";
		document.getElementsByClassName("orig_desc")[i].style.opacity = "0";
	}
	if (tipo == "fan") {
		document.getElementsByClassName("thumbnailcoat_fan")[i].style.background = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("thumbnailimage_fan")[i].style.opacity = "1";
		document.getElementsByClassName("fan_desc")[i].style.opacity = "0";
	}
}

function ampliar (tipo, i) {
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
	
	
	if (tipo == "orig")
		document.getElementById("imagemampliada").src = orig_full[i];
	
	if (tipo == "fan")
		document.getElementById("imagemampliada").src = fan_full[i];
	
	
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

function treta() {
	
	getElementsByClassName("tretap")[0].innerHTML = "<div class = 'treta'><div class = 'abouttop'><div style = 'padding-top: 2px; float: left;'>///</div><div style = 'float: right; margin-right: 12px; margin-top: 5px;'><img src = 'img/close.png' style = 'float: right; margin-left: 2px;' /><img src = 'img/maximize.png' style = 'float: right;' /><img src = 'img/minimize.png' style = 'float: right;' /></div></div><br>aaaaaaaaa</div>";
	
}
