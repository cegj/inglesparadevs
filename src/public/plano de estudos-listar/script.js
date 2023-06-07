function carregar() {
  carregarDados();
  carregarPlanos(document.getElementById("listaBasicos"), 1);
  carregarPlanos(document.getElementById("listaIntermediarios"), 2);
  carregarPlanos(document.getElementById("listaAvancados"), 3);
}

function redirectToCriar() {
  window.location.href = "../criacaoPlanoEstudos/index.html";
}

async function carregarPlanos(element, level) {
  await fetch("/api/planos?nivel=" + level).then((coisa) => {
    coisa.json().then((json) => {
      json.forEach((plano, i) => {
        element.innerHTML += `
        <li class="list-group-item">
        <a href="../plano-de-estudos-expandido/index.html?id=${plano.id}"
          class="icon-button bg-transparent ms-1 border-0 text-decoration-none text-white">
          ${i + 1} - ${plano.nome}
          <span class="icon like-icon">${plano.likes}</span>
        </a>
      </li>
        `;
      });
    });
  });
}

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
  }
}

function buscarDadosLogin() {
  const usuarioLogado = JSON.parse(localStorage.getItem("login"));
  if (usuarioLogado != null && usuarioLogado != undefined) {
    logado = true;
    usuario = usuarioLogado[0];
  }
}

function logout() {
  localStorage.removeItem("login");
  document.location.reload();
}
