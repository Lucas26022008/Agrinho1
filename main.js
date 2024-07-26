const barracas = document.querySelectorAll('.caixa');
const popup = document.querySelector('.popup');
const popupIcon = document.getElementById('popup-icon');
const popupTitle = document.getElementById('popup-title');
const popupInfo = document.getElementById('popup-info');

function isMobileOrTablet() {
    return window.innerWidth <= 1023;
}

barracas.forEach((barraca) => {
    const produtos = barraca.querySelector('.produtos');
    const toggleBtn = barraca.querySelector('.toggle-btn');

    barraca.addEventListener('mouseover', () => {
        if (isMobileOrTablet()) return; // Não mostra o popup em dispositivos móveis e tablets

        const icon = barraca.getAttribute('data-icon');
        const title = barraca.getAttribute('data-title');
        const info = barraca.getAttribute('data-info');

        popupIcon.src = icon;
        popupTitle.textContent = title;
        popupInfo.innerHTML = info.replace(/,/g, '<br>');

        popup.classList.remove('hide');
        popup.classList.add('show');
    });

    barraca.addEventListener('mouseout', () => {
        if (isMobileOrTablet()) return; // Não esconde o popup em dispositivos móveis e tablets

        popup.classList.remove('show');
        popup.classList.add('hide');
    });

    toggleBtn.addEventListener('click', () => {
        if (produtos.style.display === 'none' || produtos.style.display === '') {
            produtos.style.display = 'block';
            toggleBtn.textContent = 'Esconder Produtos';
        } else {
            produtos.style.display = 'none';
            toggleBtn.textContent = 'Mostrar Produtos';
        }
    });
});

popup.addEventListener('mouseover', () => {
    if (isMobileOrTablet()) return; // Não mostra o popup em dispositivos móveis e tablets

    popup.classList.remove('hide');
    popup.classList.add('show');
});

popup.addEventListener('mouseout', () => {
    if (isMobileOrTablet()) return; // Não esconde o popup em dispositivos móveis e tablets

    popup.classList.remove('show');
    popup.classList.add('hide');
});
