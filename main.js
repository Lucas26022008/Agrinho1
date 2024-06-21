const barracas = document.querySelectorAll('.caixa');
const popup = document.querySelector('.popup');
const popupIcon = document.getElementById('popup-icon');
const popupTitle = document.getElementById('popup-title');
const popupInfo = document.getElementById('popup-info');

barracas.forEach((barraca) => {
  barraca.addEventListener('mouseover', () => {
    const icon = barraca.getAttribute('data-icon');
    const title = barraca.getAttribute('data-title');
    const info = barraca.getAttribute('data-info');

    popupIcon.src = icon;
    popupTitle.textContent = title;
    popupInfo.innerHTML = info.replace(/,/g, '<br>');

    popup.style.display = 'flex';
    popup.style.opacity = '1'; 
  });

  barraca.addEventListener('mouseout', () => {
    popup.style.display = 'none';
  });
});

popup.addEventListener('mouseover', () => {
  popup.style.opacity = '1';
});

popup.addEventListener('mouseout', () => {
  popup.style.display = 'none';
});
