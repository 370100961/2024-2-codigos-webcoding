
//Constante
const desconto = 0.1;

//Variaveis
let produto = "MousePad Star Wars";
let valor_produto = 100;
let codigo_produto = '8290385';

//Variaveis
let produto2 = "Teclado Gamer";
let valor_produto2 = 500;

//Criação do Objeto
let product = {
    codigo: '829844',
    nome: 'MousePad Star Wars',
    valor: 100
}

let teclado = {
    codigo: '390339',
    nome: 'Teclado Gamer',
    valor: 500
}

//Criando a função -- Declaração da Função
function efetuarDesconto( produtoParaDarDesconto ){
    //criando uma variavel e separando
    //apenas o valor do produto
    let valor = produtoParaDarDesconto.valor;
    
    //criando uma variavel que vai receber
    //o valor do produto vezes o valor da const
    //desconto lá no inicio do código
    //100 * 0.1, qual valor está inserido em
    //valorDesconto
    let valorDescontado = valor * desconto;
    console.log(valor - valorDescontado)
}

efetuarDesconto( product );
efetuarDesconto( teclado );

//Criar um função para adicinar juros
//nos valores dos produtos que serão
//comprados parcelados.
//de 1 a 10 parcelas não terá juros
//de 11 e 12 parcelas terão juros de
//juros de 0.02
function compraParcelada( produto, numParcelas){
    const juros = 0.02;
    if (numParcelas <= 12){
       if( numParcelas <= 10 ){
        let valorParcelado = produto.valor / numParcelas
        console.log(valorParcelado)
       }else{
        let valorDoJuros = produto.valor * juros
        let valorProdutoComJuros = produto.valor + valorDoJuros
        let valorParcelado = valorProdutoComJuros / numParcelas
        console.log(valorParcelado)
       }    
    }else{
        console.log("O número maior de parcelas são 12")
    }
}
compraParcelada( teclado, 10)
