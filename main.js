$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000'),
    $('#cep').mask('00.000-000'),
    $('#cpf').mask('000.000.000-00')


    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true 
            },
            rua:{
                required: true 
            },
            numero: {
                required: true 
            },
            bairro: {
                required: true 
            },
            cidadeEstado: {
                required: true,
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Digite seu nome Completo',
            email: 'Digite seu E-mail',
            telefone: 'Insira seu número de telefone',
            cpf: 'Digite seu CPF',
            rua: 'Informe sua rua',
            numero: 'Digite o número de sua residência',
            bairro: 'Digite seu bairro',
            cidadeEstado: 'Digite sua cidade e estado',
            cep: 'Digite seu CEP'
        },

        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if( camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});