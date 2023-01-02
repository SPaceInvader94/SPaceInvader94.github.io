$(document).ready(function(){

	var width = screen.width;

	var state = localStorage.getItem("state");
	if(state == null){
		var state = 0;
	}

	function showBars(){
		$('.lt').css('display', 'inline');
		$('.rt').css('display', 'inline');
		$('.body2').css({width: '70%', marginLeft: '15%'});	
	}

	function hideBars(){
		$('.lt').css('display', 'none');
		$('.rt').css('display', 'none');
		$('.body2').css({width: 'auto', marginLeft: 'auto'});
	}

	if(width > 1150){
		if(state == 0){
			showBars();
		}else{
			hideBars();
		}
	}

	$('#hide').click(function(){

		if(state == 0){
			state = 1;
			hideBars();
		}else{
			state = 0;
			showBars();
		}

		localStorage.setItem("state", state);

	});

});