let logado = false;
let usuario = {};

function carregarDados() {
  buscarDadosLogin();
  carregarLogin();
  carregarTopicos();
  preencheTags();
}

function carregarLogin() {
  if (logado) {
    const loginDiv = document.getElementById("loginDiv");
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

function carregarTopicos() {
  let id;
  if (
    localStorage.getItem("login") != null &&
    localStorage.getItem("login") != undefined
  ) {
    id = JSON.parse(localStorage.getItem("login"))[0].id;
  } else {
    id = null;
  }

  let topicos = document.getElementById("topicos");
  fetch("http://localhost:3000/topicos?_embed=respostas").then((resposta) => {
    resposta.json().then((corpo) => {
      corpo.forEach((item) => {
        let botao =
          id == item.usuarioId
            ? `
        <button onclick="redirecionaEdicaoTopico(${item.id})" class="icon-button bg-transparent ms-1 border-0 p-0 m-0">
        <span class="icon edit-icon"></span>
        </button> `
            : "";
        topicos.innerHTML += `
        <div  class="text-decoration-none row p-3 bg-topico my-2">
        <div class="col-sm-9">
            <a href="../forumTopicoExpandido/index.html?id=${item.id}" class="m-0 text-white text-decoration-none"> ${item.titulo}</a>
        </div>
        <div class="col-sm-1 d-flex justify-content-end p-0"> ${botao}
        </div>
        <div class="col-sm-2 text-end">
            <p class="m-0"> ${item.respostas.length} respostas</p>
        </div>
        </div>
        `;
      });
    });
  });
}

function redirecionaEdicaoTopico(id) {
  window.location.href = "../editarTopicoForum/index.html?id=" + id;
}

function buscaPalavraChave() {
  let topicos = document.getElementById("topicos");
  topicos.innerHTML = "";
  let variavel = document.getElementById("palavra-chave").value;
  console.log(variavel);
  fetch(
    `http://localhost:3000/topicos?_embed=respostas&conteudo_da_mensagem_like=${variavel}`
  ).then((resposta) => {
    resposta.json().then((corpo) => {
      corpo.forEach((item) => {
        topicos.innerHTML += `
        <a href="../forumTopicoExpandido/index.html?id=${item.id}" class="text-decoration-none row p-3 bg-topico my-2">
        <div class="col-10">
            <p class="m-0"> ${item.titulo}</p>
        </div>
        <div class="col-2 text-end">
            <p class="m-0"> ${item.respostas.length} respostas</p>
        </div>
        </a>
        `;
      });
    });
  });
}

function preencheTags() {
  let valores = [
    "dicionário",
    "estudos",
    "teste de inglês",
    "exames de proficiência",
  ];
  let tags = document.getElementById("tags");
  valores.forEach((valor) => {
    tags.innerHTML += `<span onclick="preencheInput('${valor}')" class="badge bg-warning text-dark mx-1 my-1">${valor}</span>`;
  });
}

function preencheInput(valor) {
  document.getElementById("palavra-chave").value = valor;
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
