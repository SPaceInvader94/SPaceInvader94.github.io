$(document).ready(function(){
	var     next = 1;
	var	previous = 4;

	// next
	$('#next').click(function(){

		if(next < 4){		
			previous = next;
			next++;
		}else{
			previous = 4;
			next = 1;
		}

		if(next == 1){//gif
			$('#i1').show();
			$('#s1').show().css('display', 'block');
			$('#i2').hide();
			$('#s2').hide();
			$('#i3').hide();
			$('#s3').hide();
			$('#i4').hide();
			$('#s4').hide();
		}else if(next == 2){//popout
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').show();
			$('#s2').show().css('display', 'block');
			$('#i3').hide();
			$('#s3').hide();	
			$('#i4').hide();
			$('#s4').hide();
		}else if(next == 3){//smudge			
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').hide();
			$('#s2').hide();
			$('#i3').show();
			$('#s3').show().css('display', 'block');			
			$('#i4').hide();
			$('#s4').hide();
		}else{// traditional
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').hide();
			$('#s2').hide();
			$('#i3').hide();
			$('#s3').hide();
			$('#i4').show();
			$('#s4').show().css('display', 'block');
		}

	});

	// previous
	$('#previous').click(function(){

		if(previous > 1){	
			next = previous;
			previous--;
		}else{// 1: 1/4
			previous = 4;
			next = 1;
		}

		if(next == 1){// gif
			$('#i1').show();
			$('#s1').show().css('display', 'block');
			$('#i2').hide();
			$('#s2').hide();		
			$('#i3').hide();
			$('#s3').hide();
			$('#i4').hide();
			$('#s4').hide();
		}else if(next == 2){//popout
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').show();
			$('#s2').show().css('display', 'block');
			$('#i3').hide();
			$('#s3').hide();
			$('#i4').hide();
			$('#s4').hide();
		}else if(next == 3){//smudge		
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').hide();
			$('#s2').hide();
			$('#i3').show();
			$('#s3').show().css('display', 'block');	
			$('#i4').hide();
			$('#s4').hide();
		}else{//traditional
			$('#i1').hide();
			$('#s1').hide();
			$('#i2').hide();
			$('#s2').hide();
			$('#i3').hide();
			$('#s3').hide();
			$('#s3').hide();
			$('#i4').show();				
			$('#s4').show().css('display', 'block');
		}

	});

});