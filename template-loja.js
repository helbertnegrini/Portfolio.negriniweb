// FILTRAR PRODUTOS
function filtrarProdutos(categoria, event) {
    const produtos = document.querySelectorAll('.card-produto');
    const botoes = document.querySelectorAll('.filtros-loja button');
    
    // Remove a classe 'ativo' de todos os botões e adiciona no clicado
    botoes.forEach(btn => btn.classList.remove('ativo'));
    event.target.classList.add('ativo');

    // Percorre todos os produtos e mostra ou esconde
    produtos.forEach(produto => {
        const categoriaProduto = produto.getAttribute('data-categoria');
        
        if (categoria === 'todos' || categoria === categoriaProduto) {
            produto.classList.remove('esconder');
        } else {
            produto.classList.add('esconder');
        }
    });
}

// ADICIONAR AO CARRINHO (Simulado)
let carrinho = [];
function adicionarCarrinho(nomeProduto) {
    carrinho.push(nomeProduto);
    
    // Atualiza o contador no cabeçalho
    const btnCarrinho = document.querySelector('.btn-carrinho');
    btnCarrinho.innerText = `🛒 Carrinho (${carrinho.length})`;
    
    // Mostra uma mensagem de confirmação
    alert(`✅ "${nomeProduto}" foi adicionado ao carrinho!`);
}