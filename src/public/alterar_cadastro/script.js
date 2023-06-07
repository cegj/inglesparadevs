
  function carregar() {
    document.querySelector("#cadastro").addEventListener("submit", cadastrar);
    carregarDados()
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
        var id=JSON.parse(localStorage.getItem("login"))[0].id
      fetch("/api/usuarios/"+id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha,
          nivelDeIngles: nivelDeIngles,
        }),
      })
        .then(() => {
          alert("Alteração efetuada com sucesso");
        })
        .catch(() => {
          alert("Houve um problema ao efetuar sua alteração");
        });
    }
  
  }
  function carregarDados(){
    var idUsuario=JSON.parse(localStorage.getItem("login"))[0].id
    fetch("/api/usuarios/"+idUsuario)
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post);
    document.getElementById("name").value=post.nome
    document.getElementById("email").value=post.email
    document.getElementById("senha").value=post.senha
    document.getElementById("nivelDeIngles").value=post.nivelDeIngles
    });

  }