document.addEventListener('DOMContentLoaded', function () {
    const caixas = document.querySelectorAll('.caixa');

    caixas.forEach(caixa => {
        caixa.addEventListener('click', function () {
            const icon = this.getAttribute('data-icon');
            const title = this.getAttribute('data-title');
            const info = this.getAttribute('data-info');

            document.getElementById('popup-icon').src = icon;
            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-info').textContent = info;

            document.querySelector('.popup').classList.add('active');
        });
    });

    document.querySelector('.popup').addEventListener('click', function () {
        this.classList.remove('active');
    });

    // Verificação do campo de telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        if (this.value < 0) {
            alert('O número de telefone não pode ser negativo.');
            this.value = ''; // Limpa o campo se o número for negativo
        }
    });
});

function validarIdade() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - birthdate.getFullYear();
    const m = hoje.getMonth() - birthdate.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < birthdate.getDate())) {
        idade--;
    }

    if (idade < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return false;
    }

    return true;
}
