window.OnPageLoad = function () {}
window.onload = function () {


    var tabela = document.getElementById('tabela');
    var tabelaHead = tabela.createTHead().insertRow(0);
    tabela.createTBody().insertRow(0);
    var tabelaBody = tabela.getElementsByTagName('tbody')[0];


    var colunas = [
        { nome: 'Código', classe: 'col-12 col-md-1' },
        { nome: 'Tipo', classe: 'col-12 col-md-2' },
        { nome: 'Disponibilidade', classe: 'col-12 col-md-4' },
        { nome: 'Valor', classe: 'col-12 col-md-2' },
        { nome: 'Opções', classe: 'col-12 col-md-1' }
    ];


    colunas.forEach(tituloColuna => {
        var th = document.createElement('th');
        var titulo = document.createTextNode(tituloColuna.nome);
        th.appendChild(titulo);
        th.className = tituloColuna.classe;
        tabelaHead.appendChild(th);
    });

    var dados = [
        { id: 1, cliente: 1, tipo: 'Tipo 1', disponibilidade: '2024-01-01 -> 2024-02-01', valor: 44.50 },
        { id: 2, cliente: 2, tipo: 'Tipo 3', disponibilidade: '2024-01-02 -> 2024-06-01', valor: 244.50 },
        { id: 3, cliente: 1, tipo: 'Tipo 4', disponibilidade: '2024-01-15 -> 2024-02-20', valor: 70.00 }
    ];

    dados.forEach(item => {
        var linha = tabelaBody.insertRow(tabelaBody.rows.length);

        var c1 = linha.insertCell(0);
        var c2 = linha.insertCell(1);
        var c3 = linha.insertCell(2);
        var c4 = linha.insertCell(3);
        var c5 = linha.insertCell(4);

        // Botões para demonstração, se for cliente não pode fazer proposta, se for profissional não pode editar pedido.
        var botoes = '<a title="Ver Pedido" class="pointer" onClick="verPedido(' + item.id + ');"><span class="material-icons">drafts</span></a>' + 
            '<a title="Fazer Proposta" class="pointer" onClick="fazerProposta(' + item.id + ');"><span class="material-icons">send</span></a>' + 
            '<a title="Editar Pedido" class="pointer" onClick="editarPedido(' + item.id + ');"><span class="material-icons">create</span></a>';

        c1.innerHTML = item.id;
        c2.innerHTML = item.tipo;
        c3.innerHTML = item.disponibilidade;
        c4.innerHTML = item.valor;
        c5.innerHTML = botoes;
    });

}