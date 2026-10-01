// FILTRAR PROJETOS DO PORTFÓLIO
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

// ABRIR MODAL DE PACOTES
function abrirModalPacotes() {
    document.getElementById('modalPacotes').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Impede rolagem do fundo
}

// FECHAR MODAL DE PACOTES
function fecharModalPacotes() {
    document.getElementById('modalPacotes').style.display = 'none';
    document.body.style.overflow = 'auto'; // Volta a rolagem
}

// FECHAR MODAL AO CLICAR FORA
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modalPacotes');
    if (event.target === modal) {
        fecharModalPacotes();
    }
});