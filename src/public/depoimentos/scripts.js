function carregar() {
  carregarDados();
  carregarDepoimentos();
}

let logado = false;
let usuario = {};

async function carregarDepoimentos() {
  const divDepoimentos = document.getElementById('depoimentos');
  await fetch("/api/depoimentos").then((depoimentoJson) => {
    console.log(depoimentoJson);
    depoimentoJson.json().then((json) => {
      json.forEach((depoimento) => {
        divDepoimentos.innerHTML += `
        <article class="col-md-4 card mx-auto my-2" style="width: 18rem" onclick="window.open('${depoimento.url}', '_blank')">
            <header>
              <img
                class="card-img-top"
                src="${depoimento.thumbnailUrl}"
                alt="Card image cap"
              />
            </header>
            <div class="card-body">
              <h5 class="card-title text-center">${depoimento.authorName}</h5>
              <p class="card-text text-center">
                ${depoimento.description}
              </p>
            </div>
          </article>
        `;
      });
    });
  });
}

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
function logout(){
  localStorage.removeItem("login")
  document.location.reload()
}
