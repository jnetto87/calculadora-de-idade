function calcularIdade() {
    const anoNascimentoInput = document.getElementById('anoNascimento')
    const resultadoIdadeDiv = document.getElementById('resultadoIdade')

    const anoNascimento = parseInt(anoNascimentoInput.value)
    const anoAtual = new Date().getFullYear();

    if (!isNaN(anoNascimento)) {
        const idade = anoAtual - anoNascimento;
        resultadoIdadeDiv.textContent = `A idade é ${idade} anos.`;
    } else {
        resultadoIdadeDiv.textContent = 'Por favor, insira um ano de nascimento válido.';
    }
}