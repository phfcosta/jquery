$(document).ready(function(){
	$('button').click(function(){
			$('#unico').css("color","red")
<!--		$('h1').hide();-->
	});

	$('#azul').click(function(){
		$('p').css("background-color","blue");
		$('p').fadeOut("fast");
		$('p').delay(1000);
		$('p').fadeIn(5000);
	});

	$('#vermelho').click(function(){
		$('p').css("background-color","red");
		$('p').fadeOut("slow");
		$('p').delay(3000);
		$('p').fadeIn("slow");
		$('#mensagem').text("Mensagem alterada com sucesso");
		$('#mensagem').css('color','red');
		$('#mensagem').css('border','1px solid red')
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut(3000)
	})
})
