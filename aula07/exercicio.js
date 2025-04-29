// 1 - Listar os produtos somente da categoria 'C'
// 2 - Criar um novo array somente com "nome" dos produtos acima de R$ 20,00
// 3 - Criar um novo array somente com produtos que tenham estoque maior que 0
// 4 - Criar um novo array somente com produtos onde ID é par
// 5 - Criar um novo array com apenas 1 produto da categoria 'A' e estoque e estoque maior que 0
// 6 - Criar um novo array com preço dos produtos com 10% de desconto

// Usar para cada exercicio: FOR, FOREACH, MAP, FILTER, FIND, REDUCE.

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.2, categoria: 'C', estoque: -10 },
    { id: 2, nome: 'Produto 2', preco: 20.5, categoria: 'B', estoque: 1000 },
    { id: 3, nome: 'Produto 3', preco: 40.03, categoria: 'A', estoque: 13000 },
    { id: 4, nome: 'Produto 4', preco: 54.10, categoria: 'B', estoque: 100 },
    { id: 5, nome: 'Produto 5', preco: 100.0, categoria: 'A', estoque: 3200 },
    { id: 6, nome: 'Produto 6', preco: 9.99, categoria: 'C', estoque: 300 }
]

let produtosAcimaDe20 = []
let produtosComEstoqueMaiorQue0 = []
let produtosComIdPar = []
let produtosCategoriaA = []
let produtosComDesconto = []
let desconto = 0

// USANDO 'FOR'
document.getElementById('btnFor').addEventListener('click', () => {
    for (let i = 0; i < produtos.length; i++) {
        // 1 - 
        if (produtos[i].categoria == 'C') {
            console.log(produtos[i])
        };

        // 2 -
        if (produtos[i].preco > 20) {
            produtosAcimaDe20.push(produtos[i].nome)
        };

        // 3 -
        if (produtos[i].estoque > 0) {
            produtosComEstoqueMaiorQue0.push(produtos[i])
        };

        // 4 -
        if (produtos[i].id % 2 == 0) {
            produtosComIdPar.push(produtos[i])
        };

        // 5 -
        if (produtos[i].categoria == 'A' && produtos[i].estoque > 0) {
            produtosCategoriaA.push(produtos[i])
        };

        // 6 - (nessa parte tá dificil por que o desconto ta se aplicando nos loops anteriores tambem)
        if (produtos[i].preco > 0) {
            desconto = produtos[i].preco * 0.1
            produtos[i].preco = produtos[i].preco - desconto
            produtosComDesconto.push(produtos[i])
        }
    }

    // Exibindo os resultados no console
    console.log(produtosAcimaDe20)
    console.log(produtosComEstoqueMaiorQue0)
    console.log(produtosComIdPar)
    console.log(produtosCategoriaA[0])
    console.log(produtosComDesconto)
});

// USANDO 'FOREACH'
document.getElementById('btnForEach').addEventListener('click', function () {
    produtos.forEach((produto) => {
        // 1 -
        if (produto.categoria == 'C') {
            console.log(produto)
        };

        // 2 -
        if (produto.preco > 20) {
            produtosAcimaDe20.push(produto.nome)
        };

        // 3 -
        if (produto.estoque > 0) {
            produtosComEstoqueMaiorQue0.push(produto)
        };

        // 4 -
        if (produto.id % 2 == 0) {
            produtosComIdPar.push(produto)
        };

        // 5 -
        if (produto.categoria == 'A' && produto.estoque > 0) {
            produtosCategoriaA.push(produto)
        };

        // 6 - (Aqui eu decidi fazer desta maneira)
        if (produto.preco > 0) {
            desconto = produto.preco * 0.1
            produtosComDesconto.push(produto.nome, produto.preco - desconto)
        }
    })

    // Exibindo os resultados no console
    console.log(produtosAcimaDe20)
    console.log(produtosComEstoqueMaiorQue0)
    console.log(produtosComIdPar)
    console.log(produtosCategoriaA[0])
    console.log(produtosComDesconto)
})

// USANDO 'MAP'
document.getElementById('btnMap').addEventListener('click', function () {
    // 1 -
    const produtosCategoriaC = produtos.map((produto) => {
        if (produto.categoria == 'C') {
            return produto
        }
    })
    console.log(produtosCategoriaC)

    // 2 -
    const produtosAcimaDe20 = produtos.map((produto) => {
        if (produto.preco > 20) {
            return produto.nome
        }
    })
    console.log(produtosAcimaDe20)

    // 3 -
    const produtosComEstoqueMaiorQue0 = produtos.map((produto) => {
        if (produto.estoque > 0) {
            return produto
        }
    })
    console.log(produtosComEstoqueMaiorQue0)

    // 4 -
    const produtoComIdPar = produtos.map((produto) => {
        if (produto.id % 2 == 0) {
            return produto
        }
    })
    console.log(produtoComIdPar)

    // 5 -
    const produtoCategoriaA = produtos.map((produto) => {
        if (produto.categoria == 'A' && produto.estoque > 0) {
            return produto
        }
    })
    console.log(produtoCategoriaA)

    /*
    const produtoCategoriaA = produtos.find (produto => produto.categoria == 'A' && produto.estoque > 0)
    console.log(produtoCategoriaA)
    */

    // 6 -
    const produtosComDesconto = produtos.map((produto) => {
        if (produto.preco > 0) {
            desconto = produto.preco * 0.1
            return produto.preco - desconto
        }
    })
    console.log(produtosComDesconto)
})

// USANDO 'FILTER'
document.getElementById('btnFilter').addEventListener('click', function() {
    // 1 -
    const produtosCategoriaC = produtos.filter((produto) => {return produto.categoria == 'C'})
    console.log(produtosCategoriaC)

    // 2 -
    const produtosAcimaDe20 = produtos.filter((produto) => {return produto.preco > 20})
    console.log (produtosAcimaDe20)

    // 3 -
    const produtosComEstoqueMaiorQue0 = produtos.filter((produto) => {return produto.estoque > 0})
    console.log(produtosComEstoqueMaiorQue0)

    // 4 -
    const produtoComIdPar = produtos.filter((produto) => {return produto.id % 2 == 0})
    console.log(produtoComIdPar)

    // 5 -
    const produtoCategoriaA = produtos.filter((produto) => {return produto.categoria == 'A' && produto.estoque > 0})
    console.log(produtoCategoriaA[0])

    // 6 -
    const produtosComDesconto = produtos.filter((produto) => {
        desconto = produto.preco * 0.1;
        let novopreco = produto.preco - desconto
        produto.preco = novopreco
        return produto.preco
    })
    console.log(produtosComDesconto)
})