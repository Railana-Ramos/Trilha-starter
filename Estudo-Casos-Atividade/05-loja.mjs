
// Parte A: funções da loja

function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
} 

function aplicarDesconto(valor, percentual = 0) {
  return valor - (valor * percentual);
}

function calcularFrete(valor) {
  return valor >= 200 ? 0 : 25;
}

function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2)}`;
}

function resumirPedido(produto, preco, quantidade, desconto) {
  const subtotal = calcularSubtotal(preco, quantidade);
  const valorComDesconto = aplicarDesconto(subtotal, desconto);
  const frete = calcularFrete(valorComDesconto);
  const total = valorComDesconto + frete;

  console.log(`Produto: ${produto}`);
  console.log(`Subtotal: ${formatarMoeda(subtotal)}`);
  console.log(`Valor com desconto: ${formatarMoeda(valorComDesconto)}`);
  console.log(`Frete: ${formatarMoeda(frete)}`);
  console.log(`Total: ${formatarMoeda(total)}`);
}

resumirPedido('Fone de ouvido', 120, 2, 0.1);
console.log('-------------------');
resumirPedido('Mouse', 80, 1);

// Parte B: escopo, preveja a saída

// Linha            Sua resposta               Por quê?
// 1                bloco                      A variável mensagem declarada com let dentro do bloco if possui escopo de bloco restrito àquele contexto, assumindo o valor 'bloco'.
// 2                função                     Fora do bloco if, mas ainda dentro da função testarEscopo, o código utiliza a variável mensagem definida no escopo da função, cujo valor é 'função'.
// 3                global                     No escopo global (fora de qualquer função), a variável mensagem mantém o seu valor original definido no topo do script como 'global'.
// 4                1                          A função contar() cria uma variável local contador inicializada com 0, incrementa-a em uma unidade (contador++) e retorna o resultado (1).
// 5                1                          Como a variável contador tem escopo local dentro da função, a cada nova chamada de contar() ela é reinicializada a partir de 0 e incrementada para 1
// 6       contador is not defined (Erro)      A variável contador foi declarada localmente dentro da função contar(), pelo que não existe no escopo global onde este último console.log está a tentar aceder-lhe.