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

  const validarDados = () =>{
    let nome = frmContato.inNome.value
    let email = frmContato.inEmail.value
    let mensagem = frmContato.inMensagem.value
    
    if(nome.trim() == ""){
        alert("O campo nome não pode estar vazio!")
       frmContato.inNome.focus()
        return false;
    }
    
    if(email.trim() == ""){
        alert("O campo Email não pode estar vazio!")
       frmContato.inEmail.focus()
        return false;
    }

    if(mensagem.trim() == ""){
      alert("Não vai nos dizer nada? 😕")
     frmContato.inMensagem.focus()
      return false;
  }
    
    if(nome.trim() != "" && email.trim() != "" && mensagem.trim() != "")
        alert("Obrigado pelo seu Feedback!");
    location.reload();
    };