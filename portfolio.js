function filtrarProjetos(categoria, event) {
    const projetos = document.querySelectorAll('.card-projeto');
    const botoes = document.querySelectorAll('.filtros button');
    
    botoes.forEach(btn => btn.classList.remove('ativo'));
    if (event) event.target.classList.add('ativo');

    projetos.forEach(projeto => {
        const categoriaProjeto = projeto.getAttribute('data-categoria');
        
        if (categoria === 'todos' || categoria === categoriaProjeto) {
            projeto.classList.remove('esconder');
        } else {
            projeto.classList.add('esconder');
        }
    });
}