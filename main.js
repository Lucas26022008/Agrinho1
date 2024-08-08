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

    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        let telefone = this.value.replace(/\D/g, '');
        
        if (telefone.length > 0) {
            telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona os parênteses nos dois primeiros dígitos
        }

        if (telefone.length > 9) {
            telefone = telefone.replace(/(\d{4})(\d{4})$/, '$1-$2'); // Adiciona o hífen antes dos quatro últimos dígitos
        }

        this.value = telefone; 
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