$(document).ready(function(){

	var ui = localStorage.getItem("ui");
	if(ui == null){
		var ui = 0;
	}

	function uiReset(){
		$('html').css({backgroundColor: '#111', color: '#fff', backgroundImage: 'url("file:///C:/Users/EHTG/Documents/Computer/_Web/GFX_v0.2/imagens/bg/5.jpg"'});
		$('.header').css('background-color', '#0a0a0a');
		$('.header a').css('color', '#fff');
		$('.header2').css('color', '#fff');
		$('.body').css('color', '#999');
		$('.body2').css({border: '1px solid #000',backgroundColor: '#111'});
		$('#menu ul').css('background-color', 'rgba(16,16,16,.6)');
		$('#menu ul li a img').attr('src', 'imagens/home.png');
		$('.drop_container').css({borderBottom: '2px solid #444', color: '#fff'});
		$('#menu ul li a').css({borderBottom: '2px solid #444', color: '#fff'});
		$('hr').css('background', 'rgba(16,16,16,0.6)');
		$('#hide').css({border: 'none', background: 'rgba(0,0,0,1)'});
		$('#color').css({border: '1px solid #000', background: 'rgba(0,0,0,1)'});
		$('.lt').css({border: '1px solid #000', borderTop: '3px solid #333', background: 'rgba(0,0,0,1)', color: '#fff'});
		$('.lt ol li').css('border-bottom', '1px solid #444');
		$('.rt').css({border: '1px solid #000', borderTop: '3px solid #333', background: 'rgba(0,0,0,1)', color: '#fff'});
		$('.rt ol li').css('border-bottom', '1px solid #444');	
		$('.dParagraph').css({border: '1px solid #666', background: '#31374020'});
		$('#dSlide').css({border: '1px solid #666', background: '#31374020'});
		$('h1').css({color: '#999', background: 'rgba(16,16,16,.6)'});
		$('p').css('color', '#fff');
		$('li').css('color', '#fff');
		$('table').css('background-color', '#31374020');
		$('caption').css({color: '#999', backgroundColor: 'rgba(16,16,16,.6)'});
		$('.ft').css('background-color', '#000');
		$('.ft2').css('color', '#fff');
		$('.bt').css({background: '#000', border: '1px solid #222'});
		$('.liRed').css('background','#f00');
		$('#lLink').css({background: '#000', border: '1px dotted #666'});
	}

	function uiChange(){
		$('html').css({backgroundColor: '#123', color: '#a7e1ff', backgroundImage: 'url("file:///C:/Users/EHTG/Documents/Computer/_Web/GFX_v0.2/imagens/bg/6.jpg"'});
		$('.header').css('background-color', '#2c324c');
		$('.header a').css('color', '#a7e1ff');
		$('.header2').css('color', '#a7e1ff');
		$('.body').css('color', '#a7e1ff');
		$('.body2').css({border: 'none', backgroundColor: '#1b1e2e'});
		$('#menu ul').css('background-color', '#7d839c');
		$('#menu ul li a img').attr('src', 'imagens/home2.png');
		$('.drop_container').css({borderBottom: '2px solid #c6eaff', color: '#a7e1ff'});
		$('#menu ul li a').css({borderBottom: '2px solid #c6eaff', color: '#a7e1ff'});
		$('hr').css('background', '#7d839c');
		$('#hide').css({border: 'none', background: '#2c324c'});
		$('#color').css({border: 'none', background: '#2c324c'});
		$('.lt').css({border: 'none', borderTop: '3px solid #c6eaff', background: '#2c324c', color: '#a7e1ff'});
		$('.lt ol li').css('border-bottom', '1px solid #7d839c');
		$('.rt').css({border: 'none', borderTop: '3px solid #c6eaff', background: '#2c324c', color: '#a7e1ff'});
		$('.rt ol li').css('border-bottom', '1px solid #7d839c');
		$('.dParagraph').css({border: '1px solid #7d839c', background: '#2c324c'});
		$('#dSlide').css({border: '1px solid #7d839c', background: '#2c324c'});
		$('h1').css({color: '#fff', background: '#1b1e2e'});
		$('p').css('color', '#a7e1ff');
		$('li').css('color', '#a7e1ff');
		$('table').css('background-color', '#2c324c');
		$('caption').css({color: '#fff', backgroundColor: '#1b1e2e'});
		$('.ft').css('background-color', '#1b1e2e');
		$('.ft2').css('color', '#a7e1ff');
		$('.bt').css({background: '#1b1e2e', border: '1px solid #7d839c'});		
		$('#lLink').css({background: '#1b1e2e', border: '1px dotted #a7e1ff'});		
	}

	if(ui == 0){
		uiReset();
	}else{
		uiChange();
	}

	$('#color').click(function(){

		if(ui == 0){
			ui = 1;
			uiChange();
		}else{
			ui = 0;
			uiReset();
		}

		localStorage.setItem("ui", ui);

	});

});