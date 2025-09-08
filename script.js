document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const classe = document.getElementById("classe").value;
  const motivo = document.getElementById("motivo").value;

  if (nome && classe && motivo) {
    document.getElementById("mensagem").textContent = "✅ Obrigado, " + nome + "! Sua inscrição foi enviada.";
    document.getElementById("mensagem").style.color = "#2ea043";
    this.reset();
  } else {
    document.getElementById("mensagem").textContent = "⚠️ Preencha todos os campos!";
    document.getElementById("mensagem").style.color = "#f85149";
  }
});
