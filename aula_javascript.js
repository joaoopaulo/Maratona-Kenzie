let idade = '21'

idade = '22'

const verdadeiroFalso = 'false'

const nomes = [
  'Maria',
  21,
  'Curitiba',
  'Manu',
  20,
  'Presidente Prudente',
  'Hudson',
  'Vitor',
  'Yasmin',
  'Felipe'
]

const maria = {
  nome: 'Maria',
  idade: 21,
  cidade: 'Curitiba'
}
console.log(maria.idade)

const manu = {
  nome: 'Emanuela',
  idade: 20,
  cidade: 'Presidente Prudente'
}

const pessoas = []

const estouComSono = false

if (estouComSono === false) {
  console.log('Vou estudar')
} else {
  console.log('Vou dormir')
}

if (manu.idade >= 18 && manu.cidade === 'Presidente Prudente') {
  console.log('é maior de idade e é de Prudente')
} else {
  console.log('é menor de idade')
}

if (manu.idade >= 18 || manu.cidade === 'Presidente Prudente') {
  console.log('Você passou em pelo menos uma das condições!')
} else {
  console.log('Não passou em nenhuma condição!')
}

const euEstouComSono = false

if (!euEstouComSono) {
  console.log('Não estou com sono')
}

if (!(manu.idade < 25)) {
  console.log('é menor do que 25')
}

function darOi5Vezes(nome) {
  for (let indice = 0; indice < 5; indice++) {
    console.log('Oi' + ' ' + nome)
  }
}

darOi5Vezes('Maria')

const botao = document.getElementById('btn')
console.log(botao)

function clicouNoBotao(evento) {
  console.log(evento)
}

botao.addEventListener('click', clicouNoBotao)
