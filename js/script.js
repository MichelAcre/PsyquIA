document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Remove a classe 'active' de todos os links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Adiciona a classe 'active' ao link clicado
      this.classList.add("active");
    });
  });
});

const validarFeedback = () => {
  let nome = frmContato.inNome.value;
  let email = frmContato.inEmail.value;
  let mensagem = frmContato.inMensagem.value;

  if (nome.trim() == "") {
    alert("O campo nome não pode estar vazio!");
    frmContato.inNome.focus();
    return false;
  }

  if (email.trim() == "") {
    alert("O campo Email não pode estar vazio!");
    frmContato.inEmail.focus();
    return false;
  }

  if (mensagem.trim() == "") {
    alert("Não vai nos dizer nada? 😕");
    frmContato.inMensagem.focus();
    return false;
  }

  if (nome.trim() != "" && email.trim() != "" && mensagem.trim() != "")
    alert("Obrigado pelo seu Feedback!");
  location.reload();
};

const checkboxTermos = document.getElementById("termos");

const validarCadastroM = () => {
  let nome = frmLoginM.nome.value;
  let email = frmLoginM.email.value;
  let cpf = frmLoginM.cpf.value;
  let crp = frmLoginM.crp.value;
  let telefone = frmLoginM.telefone.value;
  let senha = frmLoginM.senha.value;
  let confirmarSenha = frmLoginM.confirmacaoSenha.value;
  let errorMElement = document.getElementById("errorM");

  if (nome.trim() == "") {
    alert("O campo nome não pode estar vazio!");
    frmLoginM.nome.focus();
    return false;
  }

  if (email.trim() == "") {
    alert("O campo Email não pode estar vazio!");
    frmLoginM.email.focus();
    return false;
  }

  if (cpf.trim() == "") {
    alert("O campo CPF não pode estar vazio!");
    frmLoginM.cpf.focus();
    return false;
  }

  if (telefone.trim() == "") {
    alert("O campo Telefone não pode estar vazio!");
    frmLoginM.telefone.focus();
    return false;
  }

  if (crp.trim() == "") {
    alert("O campo CRP não pode estar vazio ou ser inválido!");
    frmLoginM.cpf.focus();
    return false;
  }
  if (senha.trim() == "") {
    alert("O campo Senha não pode estar vazio!");
    frmLoginM.senha.focus();
    return false;
  }

  if (confirmarSenha.trim() != senha.trim()) {
    alert("As senhas não coincidem!");
    frmLoginM.confirmarSenha.focus();
    return false;
  }

  if (!checkboxTermos.checked) {
    // Remove a classe "d-none" e adiciona a classe "d-block"
    errorMElement?.classList.remove("d-none");
    errorMElement?.classList.add("d-block");
    return false;
  }

  if (
    nome.trim() != "" &&
    email.trim() != "" &&
    cpf.trim() != "" &&
    telefone.trim() != "" &&
    crp.trim() != "" &&
    senha.trim() != "" &&
    confirmarSenha.trim() == senha.trim() &&
    checkboxTermos.checked
  ) {
    alert("Cadastro realizado com sucesso!");
    location.reload();
  }
};

const validarCadastro = () => {
  let nome = frmLogin.nome.value;
  let email = frmLogin.email.value;
  let cpf = frmLogin.cpf.value;
  let crp = frmLogin.crp.value;
  let telefone = frmLogin.telefone.value;
  let senha = frmLogin.senha.value;
  let confirmarSenha = frmLogin.confirmacaoSenha.value;
  let errorElement = document.getElementById("error");

  if (nome.trim() == "") {
    alert("O campo nome não pode estar vazio!");
    frmLogin.nome.focus();
    return false;
  }

  if (email.trim() == "") {
    alert("O campo Email não pode estar vazio!");
    frmLogin.email.focus();
    return false;
  }

  if (cpf.trim() == "") {
    alert("O campo CPF não pode estar vazio!");
    frmLogin.cpf.focus();
    return false;
  }

  if (telefone.trim() == "") {
    alert("O campo Telefone não pode estar vazio!");
    frmLogin.telefone.focus();
    return false;
  }
  if (crp.trim() == "") {
    alert("O campo CRP não pode estar vazio!");
    frmLogin.cpf.focus();
    return false;
  }

  if (senha.trim() == "") {
    alert("O campo Senha não pode estar vazio!");
    frmLogin.senha.focus();
    return false;
  }

  if (confirmarSenha.trim() != senha.trim()) {
    alert("As senhas não coincidem!");
    frmLogin.confirmarSenha.focus();
    return false;
  }

  if (!checkboxTermos.checked) {
    // Remove a classe "d-none" e adiciona a classe "d-block"
    errorElement?.classList.remove("d-none");
    errorElement?.classList.add("d-block");
    return false;
  }

  // Se todos os campos estiverem preenchidos corretamente
  if (
    nome.trim() != "" &&
    email.trim() != "" &&
    cpf.trim() != "" &&
    telefone.trim() != "" &&
    crp.trim() != "" &&
    senha.trim() != "" &&
    confirmarSenha.trim() == senha.trim() &&
    checkboxTermos.checked
  ) {
    alert("Cadastro realizado com sucesso!");
    location.reload();
  }
};
