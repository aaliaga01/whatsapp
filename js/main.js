$(document).ready(function() {


	$("#send").click(function(){
		var mensaje= document.getElementById("escribir").value;

		$(".globo-texto2").removeClass('hide')
		$(".us-env").text("Pablo");
		$(".text-env").text(mensaje);
		$(".hora-env").text("14:01");

		

	});
	
});


/*

<div class="row">
	<div class="col-lg-12">
		<div class="globo-texto2">
									<p class="us-env">Andrea Lamas</p>
									<p class="text-env">Texto mensaje</p>
									<p class="hora-env">11:13</p>
								</div><!-- ./fin globo -->
							</div><!-- ./fin columna  -->
						</div><!-- ./fin row -->

*/