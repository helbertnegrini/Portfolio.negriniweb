document.getElementById('form-lead').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Pega os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Simula o envio para um servidor (aqui você poderia integrar com um CRM)
    console.log(`Enviando lead: ${nome} - ${email}`);

    // Mostra uma mensagem de sucesso para o usuário
    alert(`Obrigado, ${nome}! O seu e-book foi enviado para o e-mail: ${email}`);

    // Limpa o formulário
    this.reset();
});