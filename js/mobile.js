$(document).ready(function(){

	var width  = screen.width;
	var height = screen.height;

	if(width < 329){
		$('.body').css('top', '25%');
		$('#menu').css('margin-top', '55px');			
	}

	if(width < 280){
		$('.ft').css('padding', '3px');	
		$('.ft a').css('font-size', '.55rem');	
		$('.ft2').css('font-size', '.55rem');	
		$('.ft2 a img').css({minWidth: '5px', minHeight: '5px', maxWidth: '5px', maxHeight: '5px'});		
	}

	if(width <= 200 || height <= 200){
		$('#menu').css('margin-top', '125px');		
	}

});