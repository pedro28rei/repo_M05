/*Projeto Prático da UC de AMS
Diogo Fernandes nº26008
Gonçalo Costa   nº26024
Pedro Rei       nº26013
LESI-IPCA */

window.OnPageLoad = function () {}
window.onload = function () {
	$("#suc").addClass('d-none');
	CarregarDados();
}

function CarregarDados() {
	$('#crep').val(5);
	$('#descp').val("Etiam augue odio, facilisis et nibh ut, ultricies lacinia sem. In vitae risus lacinia, ornare nisl ultrices, suscipit tortor. Etiam dictum, nibh vitae iaculis consequat, ante felis fringilla tellus, vitae pharetra neque arcu ut urna. Suspendisse quis fermentum lectus. Aenean porttitor mauris non metus molestie, at lacinia sem consequat. Aliquam posuere nibh velit, sit amet pharetra neque lobortis eget. Aliquam auctor sagittis libero, nec fermentum tellus tristique in. ");
	$('#descr').val("Fusce leo nibh, gravida vitae tellus sed, congue congue sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec bibendum ut enim vel placerat. Donec eget fermentum arcu. Vestibulum et lacus nec lectus molestie placerat nec id mauris. Nullam tempus ipsum massa, id vehicula velit auctor eu. Vivamus sed tempus felis. Proin malesuada urna vitae nibh pharetra tempor. Integer congue metus nibh, a blandit tortor dignissim in. Aliquam vel aliquam nisi. Sed dapibus vehicula vehicula. In hac habitasse platea dictumst. Curabitur nec lacus eu erat tristique bibendum et placerat mi. ");
}

// Esperar x milisegundos
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ClearError() {
	$('#obs').removeClass("is-invalid");
	$('#vals').removeClass("is-invalid");
	$('#valn').removeClass("is-invalid");
}

function VerificarClick() {
	ClearError();
	
	var err = 0;
	
    //Ler Dados
	var observacoes = $('#obs').val();
	var verifica = $('[name=inlineRadioOptions]:checked').attr('value');
	
	//Verificar Dados
	if (observacoes === null || observacoes.trim() === '') {
		$('#obs').addClass("is-invalid");
		err = 1;
    }
	if (verifica === null || verifica === '' || verifica === undefined) {
		$("input[name='inlineRadioOptions']").addClass('is-invalid')
		err = 1;
    }
	
	if(err == 1){
		return;
	}
	
	//Fun��o para Guardar Verifica��o

	$("#suc").removeClass('d-none');
	sleep(2000).then(() => { window.location.href = "index.html"; });
}