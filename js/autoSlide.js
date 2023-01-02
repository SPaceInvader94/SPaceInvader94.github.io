$(document).ready(function(){
	var next = 0;
	console.log('begin, next == ' + next);

	timer();

	function timer(){
		setTimeout(aSlide, 1000);
		setTimeout(aSlide, 3000);
		setTimeout(aSlide, 5000);
		setTimeout(aSlide, 7000);
		setTimeout(timer, 9000);
	}

	function aSlide (){

		if(next < 4){
			next++;
		}else{
			next = 1;
		}

		if(next == 1){
			$('#ia1').show();
			$('#ia2').hide();
			$('#ia3').hide();
			$('#ia4').hide();
		}else if(next == 2){
			$('#ia1').hide();
			$('#ia2').show();
			$('#ia3').hide();	
			$('#ia4').hide();
		}else if(next == 3){
			$('#ia1').hide();
			$('#ia2').hide();
			$('#ia3').show();
			$('#ia4').hide();
		}else{
			$('#ia1').hide();
			$('#ia2').hide();
			$('#ia3').hide();
			$('#ia4').show();
		}
	}

});