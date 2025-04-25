function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const mensagem = document.getElementById("mensagem").value;
  
    const texto = `Olá, eu gostaria de agendar um horário para esse dia ${data}%0A` +
                  `Nome: ${nome}%0A` +
                  `E-mail: ${email}%0A` +
                  `Telefone: ${telefone}%0A` +
                  `Mensagem: ${mensagem}`;
  
    const numeroWhatsApp = "5585985009105"; // Ex: 5511999999999
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURI(texto)}`;
  
    window.open(link, "_blank");
  }
  