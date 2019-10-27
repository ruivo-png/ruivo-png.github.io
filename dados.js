
	// !!!!!!!!!!!!!!!!
	// ABOUT
	// !!!!!!!!!!!!!!!!

		// index

			var index = [];
				
						// intro
				
							// english
								index[0] = "Rio de Janeiro based artist. Welcome to my portfolio!<br>Apologies - 'Design' page currently only available in portuguese.";
							// portuguese
								index[1] = "Artista carioca. Bem vindo ao meu portfólio!";
	
		// about
		
			var about = [];
	
						// actual about
						
							// english
								about[0] = "Hey there, <b style = 'color: #2781B3;'>Gabriella Ruivo</b> here!<br><br>I'm a Brazilian Digital Media Design student at university PUC-Rio, currently in my 4th semester.<br><br>Forever drowned in <b>curiosity</b>, I consider myself an interdisciplinary kinda person. My heart beats both for art and technology, but though i seek to specialize in illustration and animation, I make a point to not limit my fascination to any field, and like to see them connecting. The world is too big and interesting!<br><br>This means I also have a <b>wide range of tastes</b>: my interests go from wholesome children's stories to the occasional psychological horror. I also have a thing for glitch art and old-school tech aesthetics, as it shows in this 90s/synthwave-esque page I've coded.<br><br>I strive to show my passion through my work, giving it my all, and am very adaptable. If you have any nice ideas, let's talk!";
							// portuguese
								about[1] = "Hey, <b style = 'color: #2781B3;'>Gabriella Ruivo</b> aqui!<br><br>Sou estudante de Design de Mídia Digital na PUC-Rio, atualmente no meu quarto semestre.<br><br>Sempre afogada em <b>curiosidade</b>, eu me considero uma pessoa interdisciplinar. Meu coração bate para arte e tecnologia, e embora eu procure me especializar em ilustração e animação, não limito minha fascinação para nenhum campo, e gosto de vê-los se conectando. O mundo é grande e interessante demais!<br><br>Isso quer dizer que eu tenho uma <b>ampla gama de gostos</b>: meus interesses vão de histórias infantis até o ocasional horror psicológico. Também tenho algo por arte glitch e estéticas de tech retrô, como é possível ver nessa presente página anos 90/meio synthwave que codei.<br><br>Eu procuro mostrar minha paixão pelas coisas através do meu trabalho, dando meu melhor, e sou muito adaptável. Se você tiver alguma ideia, vamos trocar!";
	
	// !!!!!!!!!!!!!!!!
	// AUTOMATIC TRANSLATIONS ENG & PTBR
	// !!!!!!!!!!!!!!!!

		// INDEX

		
				// top
				
					// english
						index[2] = "languages.exe";
					// portuguese
						index[3] = "idioma.exe";
						
						
				// links
				
					// english
					
					// portuguese
						
		// ILLUSTRATION
		
		
		var illust = [];
		
				// top
	
					// english
						illust[0] = "illustration.zip";
					// portuguese
						illust[1] = "ilustracao.zip";
						
				// botões
				
					// english
						illust[2] = "Back";
					// portuguese
						illust[3] = "Voltar";

		var design = [];
		
				// botões
				
					// english
						design[0] = "Back";
					// portuguese
						design[1] = "Voltar";
						
		// ABOUT
		
				// top
	
					// english
						about[2] = "about.txt";
					// portuguese
						about[3] = "sobre.txt";
						
				// botões
					
					// english
						about[4] = "Back";
					// portuguese
						about[5] = "Voltar";

	// !!!!!!!!!!!!!!!!
	// BIBLIOTECA
	// !!!!!!!!!!!!!!!!

		// DESCRIÇÕES
			
				// fanart
				
					// english
						var desc_narancia_popart			= "<b>Pop Art Jojo</b><br>A5 print series<br>2019<br><br>[Other characters soon]";
						var desc_mother3_photography		= "<b>MOTHER3</b><br>2019";
						var desc_mob_flutuando				= "<b>MP100</b><br>2019";
						
					// portuguese
						
				
				// original
				
					// english
						var desc_holymother					= "<b>O Holy Mother</b><br>2018";
						var desc_notanybetter				= "<b>Exhausted</b><br>2018";
						var desc_bubbles					= "<b>Bubbles</b><br>2019";
						var desc_projcadernos				= "<b>Notebooks project - cover</b><br>2019";
						
					// portuguese
				
				
		// THUMBNAILS
			
				// original
				
					var thumb_holymother				= "url('thumbs/thumb_holymother.png')";
					var thumb_notanybetter				= "url('thumbs/thumb_notanybetter.png')";
					var thumb_bubbles					= "url('thumbs/thumb_bubbles.png')";
					var thumb_projcadernos				= "url('thumbs/thumb_projcadernos.png')";
			
				// fanart
				
					var thumb_narancia_popart			= "url('thumbs/thumb_narancia_popart.png')";
					var thumb_mother3_photography 		= "url('thumbs/thumb_mother3_photography.png')";
					var thumb_mob_flutuando				= "url('thumbs/thumb_mob_flutuando.png')";
					
				
				
				
			
		// IMAGENS AMPLIADAS
			
				// original
				
					var full_holymother						= "illusts/holymother.jpg";
					var full_notanybetter					= "illusts/notanybetter.png";
					var full_bubbles						= "illusts/bubbles.png";
					var full_projcadernos					= "illusts/projcadernos.png";
			
				// fanart
				
					var full_narancia_popart				= "illusts/narancia_popart.png";
					var full_mother3_photography			= "illusts/mother3_photography.png";
					var full_mob_flutuando					= "illusts/mob_flutuando.png";
					
				
				
	
	// !!!!!!!!!!!!!!!!
	// PAGE: ILLUST - ORDEM DAS ILUSTRAÇÕES
	// !!!!!!!!!!!!!!!!
	
		var max_orig =	4,
			max_fan	=	3;
	
	
		// thumbnails
		
			// original
			
				var orig_thumb = [];
				
				orig_thumb[0] = thumb_bubbles;
				orig_thumb[1] = thumb_projcadernos;
				orig_thumb[2] = thumb_holymother;
				orig_thumb[3] = thumb_notanybetter;
		
			// fanart
		
				var fan_thumb = [];
				
				fan_thumb[0] = thumb_narancia_popart;
				fan_thumb[1] = thumb_mother3_photography;
				fan_thumb[2] = thumb_mob_flutuando;
				fan_thumb[3];
	
		// imagens ampliadas
		
			// original
			
				var orig_full = [];
				
				orig_full[0] = full_bubbles;
				orig_full[1] = full_projcadernos;
				orig_full[2] = full_holymother;
				orig_full[3] = full_notanybetter;
				
			// fanart
		
				var fan_full = [];
				
				fan_full[0] = full_narancia_popart;
				fan_full[1] = full_mother3_photography;
				fan_full[2] = full_mob_flutuando;
				fan_full[3];
					
		// descrições
				
			// original
			
				var orig_desc = [];
				
				orig_desc[0] = desc_bubbles;
				orig_desc[1] = desc_projcadernos;
				orig_desc[2] = desc_holymother;
				orig_desc[3] = desc_notanybetter;
			
			// fanart
			
				var fan_desc = [];
				
				fan_desc[0] = desc_narancia_popart;
				fan_desc[1] = desc_mother3_photography;
				fan_desc[2] = desc_mob_flutuando;
				fan_desc[3];
				
				
	