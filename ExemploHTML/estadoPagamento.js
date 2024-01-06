const params = new URLSearchParams(window.location.search);
const codigoTrabalho = params.get('cod');

var colunas;
var dados;
var total, totalPago = 0;

function CarregaDados() {
    // Na aplicação final, carrega dados do trabalho obtido com o codigoTrabalho, e os pagamentos
    // já realizados para este trabalho

    colunas = [
        { nome: 'Data de Pagamento', classe: 'col-12 col-md-4' },
        { nome: 'Tipo', classe: 'col-12 col-md-4' },
        { nome: 'Valor', classe: 'col-12 col-md-4' }
    ];

    total = 200;

    dados = [
        { data: '2023-12-22', tipo: 'Tipo 1', valor: 44.50 },
        { data: '2024-01-01', tipo: 'Transferência bancária', valor: 60 },
        { data: '2024-01-06', tipo: 'Tipo 1', valor: 20 }
    ];
}

function CriarTabela() {
    var tabela = document.getElementById('tabela');
    var tabelaHead = tabela.createTHead().insertRow(0);
    tabela.createTBody().insertRow(0);
    var tabelaBody = tabela.getElementsByTagName('tbody')[0];

    colunas.forEach(tituloColuna => {
        var th = document.createElement('th');
        var titulo = document.createTextNode(tituloColuna.nome);
        th.appendChild(titulo);
        th.className = tituloColuna.classe;
        tabelaHead.appendChild(th);
    });

    dados.forEach(item => {
        var linha = tabelaBody.insertRow(tabelaBody.rows.length);

        var c1 = linha.insertCell(0);
        var c2 = linha.insertCell(1);
        var c3 = linha.insertCell(2);      

        c1.innerHTML = item.data;
        c2.innerHTML = item.tipo;
        c3.innerHTML = item.valor;

        totalPago += item.valor;
    });

    $('#valPago').val(totalPago);
    $('#valPagar').val(total);
}

window.OnPageLoad = function () { }
window.onload = function () {
    CarregaDados();
    CriarTabela();
}