
function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preecher");
    }else{
        alert("Campos preechidos com sucesso!");
    }
}

function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preecher");
    }else{
        window.location.href = "aula2.html";
    }
}
    // CRIA LISTA DE USUÁRIO DENTRO DE UM ARRAY
    var dadosLista = [];
    function salvarUser(){
        let nomeUser = document.getElementById("nomeUser").value;
        if(nomeUser){
            dadosLista.push(nomeUser);
            criaLista();
            document.getElementById("nomeUser").value = '';
        }else{
            alert("Usuário por favor preencher o campo nome");
        }
    }
    // FUNÇÃO PARA CRIAÇÃO DE LISTA NA TABELA
    function criaLista(){
        let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
        // LAÇO DE REPETIÇÃO PARA COLOCAR NOMES NA TABELA
        for(let i=0;i <= (dadosLista.length-1);i++){
            tabela += "<tr><td>"  + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
            document.getElementById("tabela").innerHTML = tabela;
        }
    }
// FUNÇÃO PARA EDITAR NOME
    function editar(i){
        document.getElementById("nomeUser").value = dadosLista[(i - 1)];
        dadosLista.splice(dadosLista[(i - 1)], 1);
    }
    // FUNÇÃO PARA EXCLUIR NOME
    function excluir(i){
        dadosLista.splice((i - 1), 1);
        document.getElementById('tabela').deleteRow(i);
    }