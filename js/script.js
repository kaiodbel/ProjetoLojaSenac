function calcular(){
var preco = parseFloat(document.getElementById('preco').value);
var quantidade = parseInt(document.getElementById('quantidade').value);
var total = preco * quantidade;
document.getElementById('total').value = total;
}

function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
       return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })
    elementoAlvo.value = cpfAtualizado;
    }
    /*Em JavaScript, expressões regulares são frequentemente usadas com os dois métodos string: search() e replace(). O método search() usa uma expressão para procurar uma correspondência e retorna a posição da correspondência enquanto o método replace() retorna uma string modificada onde o padrão é substituído.*/
    
    function formataTelefone(telefone) {
    const elementoAlvo = telefone
    const telefoneAtual = telefone.value
    
    let telefoneAtualizado;
    
    telefoneAtualizado = telefoneAtual.replace(/(\d{2})(\d{5})(\d{4})/,
     function( regex, argumento1, argumento2, argumento3 ) {
            return '(' +argumento1 + ')' + argumento2 + '-' + argumento3;
    })
    elementoAlvo.value = telefoneAtualizado;
    }
    
    
    function formataCEP(cep){
      const elementoAlvo = cep
      const cepAtual = cep.value
    
      let cepAtualizado;
    
      cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/,
        function(regex, argumento1, argumento2){
          return argumento1  + '-' + argumento2;
        })
        elementoAlvo.value = cepAtualizado;
    }
    /*script cep */
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
   document.getElementById('uf').value=(conteudo.uf);
}
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};