setInterval(() => {
    location.reload();
  }, 30000);

  // Remove a tela de introdução com fade após 2,5 segundos
  window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');

    setTimeout(() => {
      intro.classList.add('fade-out');

      // Remove completamente do DOM após o fade-out (1s)
      setTimeout(() => {
        intro.remove();
      }, 1000);

    }, 2500); // Aguarda 2,5 segundos antes de sumir
  });