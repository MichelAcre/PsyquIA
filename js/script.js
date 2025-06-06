document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        // Remove a classe 'active' de todos os links
        navLinks.forEach(link => link.classList.remove("active"));

        // Adiciona a classe 'active' ao link clicado
        this.classList.add("active");
      });
    });
  });