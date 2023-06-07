function logar(evento) {
  evento.preventDefault();
  var form = new FormData(evento.target);
  var email = form.get("email");
  var senha = form.get("senha");
  fetch(`/api/usuarios?email=${email}&senha=${senha}`).then(
    (resposta) => {
      resposta.json().then((body) => {
        if (body.length > 0) {
          localStorage.setItem("login", JSON.stringify(body));
          window.location.href = "../pagina-inicial/index.html";
        } else {
          alert("sua conta não foi encontrada");
        }
      });
    }
  );
}
function carregar() {
  document.querySelector("#login").addEventListener("submit", logar);
  document.querySelector("#cadastro").addEventListener("submit", cadastrar);
}

function cadastrar(evento) {
  evento.preventDefault();
  var form = new FormData(evento.target);
  var nome = form.get("name");
  var email = form.get("email");
  var senha = form.get("senha");
  var confirmarSenha = form.get("confirmarSenha");
  var nivelDeIngles = form.get("nivelDeIngles");
  if (nome === null || nome === "") {
    alert("nome precisa estar preenchido");
  }
  if (email === null || email === "") {
    alert("email precisa estar preenchido");
  }
  if (senha === null || senha === "") {
    alert("senha precisa estar preenchida");
  }
  if (confirmarSenha != senha) {
    alert("senha e confirmacao diferentes");
  }
  if (nivelDeIngles === null || nivelDeIngles === "") {
    alert("Nivel de ingles precisa estar preenchido");
  } else {
    fetch("/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
        nivelDeIngles: nivelDeIngles,
      }),
    })
      .then(() => {
        alert("cadastro efetuado com sucesso");
      })
      .catch(() => {
        alert("houve um problema ao efetuar seu cadastro");
      });
  }

}
