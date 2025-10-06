document.addEventListener('DOMContentLoaded', function () {
  var telefone = document.getElementById('telefone');
  IMask(telefone, {
    mask: '(00) 00000-0000'
  });
});