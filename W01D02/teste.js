var _ = require('lodash');

const estagiarios = [
    {nome: 'Eduardo',   sobrenome: 'Kiyoshi',   email: 'eduardo.kiyoshi@prevision.com.br',  idade: 22},
    {nome: 'Marcelo',   sobrenome: 'Santos',    email: 'marcelo.edivan@prevision.com.br',   idade: 24},
    {nome: 'Andre',     sobrenome: 'Firmino',   email: 'andre.firmino@prevision.com.br',    idade: 20},
    {nome: 'Samuel',    sobrenome: 'Filipe',    email: 'samuel.filipe@prevision.com.br',    idade: 20},
    {nome: 'Mateus',    sobrenome: 'Monteiro',  email: 'mateus.monteiro@prevision.com.br',  idade: 20},
]

function find() { 
    let findIdade = _.find(estagiarios, (estagiario) => {return estagiario.idade<=20})
    let findSobrenome = _.find(estagiarios, {sobrenome: 'Santos'})
    
    console.log('Busca por idade: \n', findIdade, '\n')
    console.log('Busca por sobrenome: \n', findSobrenome, '\n')
}

function filter() {
    let filterIdade = _.filter(estagiarios, (estagiario) => {return estagiario.idade>=20})

    console.log('Filtro por idade: \n', filterIdade, '\n')
}

function sortBy() {
    let sortByNome = _.sortBy(estagiarios, 'idade')

    console.log('Ordenação por nome: \n', sortByNome, '\n')
}

function map() {
    let mapEmail = _.map(estagiarios, 'email')

    console.log('Emails: \n', mapEmail, '\n')
}

function join() {
    let joinLista = _.join(estagiarios, ' | ')

    console.log('String: \n', joinLista, '\n')
}

function chain() {
    let chainFuncoes = _.chain(estagiarios).filter({idade: 20}).sortBy('nome').map('email').join(' | ').value()

    console.log('Chain: \n', chainFuncoes, '\n')
}

//find()
//filter()
sortBy()
//map()
//join()
//chain()
