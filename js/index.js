var elementoDuvidas = document.querySelectorAll(".d-duvida")

elementoDuvidas.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})
