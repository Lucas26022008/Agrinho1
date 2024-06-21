const barracas = document.querySelectorAll('.caixa');

barracas.forEach((barraca) => {
  barraca.addEventListener('mouseover', () => {
    barracas.forEach(b => b.classList.remove('active'));
    barraca.classList.add('active');
    const info = barraca.querySelector('p');
    info.style.display = 'block';
  });

  barraca.addEventListener('mouseout', () => {
    barraca.classList.remove('active');
    const info = barraca.querySelector('p');
    info.style.display = 'none';
  });
});
