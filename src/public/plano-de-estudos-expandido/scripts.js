const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let logado = false;
let usuario = {};

function carregarLogin() {
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

function carregarDados() {
  carregarPlanosSecundarios(document.getElementById("olBasicos"), 1);
  carregarPlanosSecundarios(document.getElementById("olIntermediarios"), 2);
  carregarPlanosSecundarios(document.getElementById("olAvancados"), 3);
  buscarDadosLogin();
  carregarLogin();
  carregarLogin();
  carregarPlano(params.id).then(() => {
    checkForToast();
  });
}

async function carregarPlano(id) {
  await fetch("/api/planos/" + id + "?_embed=passos").then(
    (response) => {
      response.json().then((body) => {
        carregarLikes(body.likes);
        carregarTitulo(body.nome);
        carregarPassos(body.passos, body.nome);
      });
    }
  );
}

function isEven(number) {
  return number % 2 === 0;
}

function carregarLikes(numeroLikes) {
  document.getElementById("likes").innerHTML =
    '<i class="bi bi-heart-fill d-inline-block" fill="#59359c"></i>' +
    numeroLikes;
}

function carregarTitulo(tituloPlano) {
  document.getElementById("tituloPlano").innerHTML = tituloPlano;
}

function carregarPassos(listaPassos, tituloPlano) {
  const divPassosEven = document.getElementById("passosEven");
  const divPassosOdd = document.getElementById("passosOdd");
  const toast = document.getElementById("toast");
  toast.innerHTML = `<i class="bi bi-bookmark-check-fill"></i> Parabéns por terminar o plano ${tituloPlano}, você está um passo mais próximo da fluência!`;
  toast.hidden = false;

  for (let i = 0; i < listaPassos.length; i++) {
    if (!listaPassos[i].checked) {
      toast.hidden = true;
    }

    if (isEven(i)) {
      divPassosEven.innerHTML =
        divPassosEven.innerHTML +
        `
          <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}" onclick="checkBoxClickHandler(${
          listaPassos[i].id
        })" ${listaPassos[i].checked === true ? "checked" : ""}>
                                  <label class="form-check-label" for="flexCheckDefault${i}">
                                      ${listaPassos[i].nome}
                                  </label>
                              </div>`;
    } else {
      divPassosOdd.innerHTML =
        divPassosOdd.innerHTML +
        `
          <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}" onclick="checkBoxClickHandler(${
          listaPassos[i].id
        })" ${listaPassos[i].checked === true ? "checked" : ""}>
                                  <label class="form-check-label" for="flexCheckDefault${i}">
                                  ${listaPassos[i].nome}
                                  </label>
                              </div>`;
    }
  }
}

function findAllStepCheckboxes() {
  const collection = document.getElementsByTagName("input");
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id.startsWith("flexCheckDefault")) {
      passos.push(input);
    }
  }
}

function checkBoxClickHandler(i) {
  checkForToast();
  atualizarPasso(i);
}

function checkForToast() {
  let passos = [];
  const collection = document.getElementsByTagName("input");
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id.startsWith("flexCheckDefault")) {
      passos.push(collection[i]);
    }
  }
  const toast = document.getElementById("toast");
  toast.hidden = false;
  passos.map((passo) => {
    if (!passo.checked) {
      toast.hidden = true;
    }
  });
}

async function carregarPlanosSecundarios(element, level) {
  await fetch(
    `/api/planos?_embed=passos&nivel=${level}&_page=0&_limit=3`
  ).then((coisa) => {
    coisa.json().then((json) => {
      json.forEach((plano, i) => {
        element.innerHTML += `
        <li>
        <a href="../plano-de-estudos-expandido/index.html?id=${plano.id}"
          class="icon-button bg-transparent ms-1 border-0 text-decoration-none text-white">
          ${plano.nome}
        </a>
      </li>
        `;
      });
    });
  });
}
function logout() {
  localStorage.removeItem("login");
  document.location.reload();
}

function atualizarPasso(id) {
  fetch("/api/passos/" + id).then((response) => {
    response.json().then((body) => {
      let bodyObj = body;
      bodyObj.checked = !bodyObj.checked;
      console.log(body);
      fetch("/api/passos/" + body.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyObj),
      });
    });
  });
}
