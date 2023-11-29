window.OnPageLoad = function () {}
window.onload = function () {
	$("#suc").addClass('d-none');
	CarregarDados();
}

function CarregarDados() {
	$('#cped').val(1);
	$('#descp').val("Vestibulum vulputate tortor ut felis fringilla dictum. Ut consequat ligula in nisl pharetra maximus. Ut mi arcu, pretium quis sapien ut, condimentum tincidunt sem. Duis eget bibendum lorem. Morbi vulputate sem sit amet tortor dictum laoreet. Sed sit amet egestas diam. Praesent varius aliquet ligula, in posuere nulla lobortis id. ");
}

// Esperar x milisegundos
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ClearError() {
	$('#val').removeClass("is-invalid");
	$('#datain').removeClass("is-invalid");
	$('#datafim').removeClass("is-invalid");
	$('#com').removeClass("is-invalid");
}

function ComparaData(d1, d2) {
	
  let data1 = new Date(d1).getTime();
  let data2 = new Date(d2).getTime();
  
  if(data1 < data2){
	  return -1;
  } else if (data1 > data2){
	  return 1;
  } else {
	  return 0;
  }
}

function CriarClick() {
	ClearError();
	
	var err = 0;
	
    //Ler Dados
	var valor = $('#val').val();
	var dataInicio = $('#datain').val();
	var dataFim = $('#datafim').val();
	var comentario = $('#com').val();	
	
	//Verificar Dados
    if (valor === null || valor.trim() === '' || valor <= 0) {
		$('#val').addClass("is-invalid");
		err = 1;
    }
    if (dataInicio === null || dataInicio === '') {
		$('#datain').addClass("is-invalid");
		err = 1;
    }
    if (dataFim === null || dataFim === '') {
		$('#datafim').addClass("is-invalid");
		err = 1;
    }
	if (comentario === null || comentario.trim() === '') {
		$('#com').addClass("is-invalid");
		err = 1;
    }
	
	if(err == 1){
		return;
	}
	
	var tsts = new Date(dataInicio).getFullYear();
	
	if (ComparaData(dataInicio, dataFim) == 1 || ComparaData(dataInicio, new Date().setHours(0, 0, 0, 0)) == -1) {
		$('#datain').addClass("is-invalid");
		$('#datafim').addClass("is-invalid");
		return;
	}
	
	//Função para Guardar Proposta

	$("#suc").removeClass('d-none');
	sleep(2000).then(() => { window.location.href = "index.html"; });
}