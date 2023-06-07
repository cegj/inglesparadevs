const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function carregar() {
  document
    .getElementById("form_responder")
    .addEventListener("submit", enviarResposta);
  carregarTopico(params.id);
}
function carregarTopico(id) {
  var div = document.getElementById("meio02");
  fetch(
    `/api/topicos/${id}?_embed=respostas&_expand=usuario`
  ).then((resposta) => {
    resposta.json().then((corpo) => {
      div.innerHTML += ` <div class="media-left">
            
        </div>
        <h3> ${corpo.titulo}</h3>
<h4 class="media-heading">${corpo.usuario.nome}<small><i>${corpo.data}</i></small>
</h4>
<p>${corpo.conteudo_da_mensagem}</p>`;
      corpo.respostas.forEach((resposta) => {
        fetch("/api/usuarios/" + resposta.usuarioId).then(
          (response) => {
            response.json().then((user) => {
              div.innerHTML += `<div class="media">
                <div class="media-left">
                    <img src="./Avatares/Pedro.jpeg" class="media-object"
                        style="width:45px">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">${user.nome}<small><i>${resposta.data}</i></small></h4>
                    <p>${resposta.conteudo}</p>
                </div>
            </div>`;
            });
          }
        );
      });
    });
  });
}
function enviarResposta(evento) {
  evento.preventDefault();
  console.log(evento.target);
  const form = new FormData(evento.target);
  let usuario = "";
  const usuarioLogado = JSON.parse(localStorage.getItem("login"));
  if (usuarioLogado != null && usuarioLogado != undefined) {
    usuario = usuarioLogado[0].id;
  }
  console.log({
    id_topico: params.id,
    conteudo: form.get("resposta"),
    usuarioId: usuario,
    data:
      "Postado em " +
      new Date().toLocaleDateString() +
      " às " +
      new Date().toLocaleTimeString(),
  });
  fetch("/api/respostas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      topicoId: parseInt(params.id),
      conteudo: form.get("resposta"),
      usuarioId: usuario,
      data:
        "Postado em " +
        new Date().toLocaleDateString() +
        " às " +
        new Date().toLocaleTimeString(),
    }),
  }).then(() => {
    window.location.reload();
  });
}
