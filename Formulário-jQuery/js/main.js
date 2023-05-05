const cepInput = document.querySelector('#cep');
const logradouroInput = document.querySelector('#logradouro');
const bairroInput = document.querySelector('#bairro');
const cidadeInput = document.querySelector('#cidade');
const ufInput = document.querySelector('#uf');


cepInput.addEventListener('blur', () => {
    const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        logradouroInput.value = data.logradouro;
        bairroInput.value = data.bairro;
        cidadeInput.value = data.localidade;
        ufInput.value = data.uf;
    })
    .catch(error => console.error(error));
}
});

$(document).ready(function(){
    
    
    $('#telefone').mask('(00) 0 0000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
            ,email: 'Por favor, insira seu E-mail'
            ,telefone: 'Por favor, insira o seu telefone'
            ,cpf: 'Por favor, insira seu CPF'
            ,cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            location.reload()
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            
            if( camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})