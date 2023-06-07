const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let logado = false;
let usuario = {};

function carregarDados() {
  buscarDadosLogin();
  carregarLogin();
  document
    .getElementById("form_criacao")
    .addEventListener("submit", formHandler);
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

async function formHandler(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  let passos = [];
  const promises = [];
  console.log(form.get("name"));
  console.log(form.get("level"));
  for (entry of form.entries()) {
    if (entry[0] === "passo[]") {
      passos.push(entry[1]);
    }
  }

  await fetch("http://localhost:3000/planos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: form.get("name"),
      nivel: form.get("level"),
      likes: 0,
      usuarioId: usuario.id,
    }),
  }).then((response) => {
    response
      .json()
      .then((body) => {
        passos.forEach((str) => {
          console.log("passo");
          let promise = fetch("http://localhost:3000/passos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              planoId: parseInt(body.id),
              nome: str,
              checked: false,
            }),
          });
          promises.push(promise);
        });
      })
      .then(() => {
        Promise.all(promises).then(() => {
          window.location.href = "../plano de estudos-listar/index.html";
        });
      });
  });
}

let count;
function adicionarPassos() {
  const namePasso = document.getElementById("nome_passo").value;
  if (namePasso.length > 0) {
    if (document.getElementById("list_passos").lastChild.id == undefined) {
      console.log(document.getElementById("list_passos").lastChild);
      count = 0;
    } else {
      count = parseInt(document.getElementById("list_passos").lastChild.id) + 1;
    }

    document.getElementById("list_passos").insertAdjacentHTML(
      "beforeend",
      `<li class="form-check w-50" id="${count}" class="passo_item">
        <input class="form-check-input" type="checkbox" value="${namePasso}" name="passo[]"
            id="check${count}" checked>
        <label class="form-check-label" for="check${count}"">
        ${namePasso}
        </label>
    </li>`
    );

    document.getElementById(`check${count}`).addEventListener("click", uncheck);
  } else {
    alert(
      "O nome do passo do plano de estudo deve ser preenchido para inserir"
    );
  }
}

function uncheck(event) {
  console.log("fsergfsgfsregf");
  event.target.parentElement.remove();
}
