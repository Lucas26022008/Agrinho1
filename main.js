const barracas = document.querySelectorAll('.caixa');

barracas.forEach((barraca) => {
  barraca.addEventListener('mouseover', () => {
    const info = barraca.querySelector('p');
    info.style.display = 'block';
  });

  barraca.addEventListener('mouseout', () => {
    const info = barraca.querySelector('p');
    info.style.display = 'none';
  });
});