
window.OnPageLoad = function () {}
window.onload = function () {
	$("#suc").addClass('d-none');
}

// Esperar x milisegundos
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ClearError() {
	$('#val').removeClass("is-invalid");
	$('#datain').removeClass("is-invalid");
	$('#datafim').removeClass("is-invalid");
	$('#loc').removeClass("is-invalid");
	$('#desc').removeClass("is-invalid");
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
	var tipoServico = $('#tiposerv').val();
	var dataInicio = $('#datain').val();
	var dataFim = $('#datafim').val();
	var local = $('#loc').val();
	var descricao = $('#desc').val();	
	var imagem = $('#img').val();
	
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
    if (local === null || local.trim() === '') {
		$('#loc').addClass("is-invalid");
		err = 1;
    }
    if (descricao === null || descricao.trim() === '') {
		$('#desc').addClass("is-invalid");
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
	
	//Função para Guardar Pedido

	$("#suc").removeClass('d-none');
	sleep(2000).then(() => { window.location.href = "index.html"; });
}