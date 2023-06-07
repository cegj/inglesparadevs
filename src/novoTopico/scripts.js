let logado = false;
let usuario = {};

function carregarDados() {
  buscarDadosLogin();
  carregarLogin();
}

function carregarLogin() {
  console.log(logado);
  if (logado) {
    let loginDiv = document.getElementById("loginDiv");
    loginDiv.hidden = false;
    loginDiv.childNodes.forEach((child) => {
      child.hidden = false;
    });
    const welcome = document.getElementById("welcome");
    welcome.innerHTML = "Bem vindo(a) " + usuario.nome;
  } else {
    const button = document.getElementById("loginButton");
    button.hidden = false;

    button.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-center"
    );
    window.location.href = "../login/login.html";
  }
}

function buscarDadosLogin() {
  const usuarioLogado = JSON.parse(localStorage.getItem("login"));
  if (usuarioLogado != null && usuarioLogado != undefined) {
    logado = true;
    usuario = usuarioLogado[0];
  }
}

function logout(){
  localStorage.removeItem("login")
  document.location.reload()
}
function criaTopico() {
  let titulo = document.getElementById("titulo").value;
  let explicacaoDuvida = document.getElementById("explicacao").value;
  let data = new Date();

  novoTopico = JSON.stringify({
    usuarioId: JSON.parse(localStorage.getItem("login"))[0].id,
    titulo: titulo,
    conteudo_da_mensagem: explicacaoDuvida,
    data: data,
  });

  fetch("http://localhost:3000/topicos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: novoTopico,
  })

    .then((res) => res.json())
    .then(() => (location.href = "../forumTopicos/index.html"));
}

