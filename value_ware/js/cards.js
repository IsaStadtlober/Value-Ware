document.querySelectorAll('.btn-saiba-mais').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // evita o link padrão

    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
