document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-agendamento");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede envio do form
  
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const data = document.getElementById("data").value;
      const mensagem = document.getElementById("mensagem").value;
  
      const texto = `Olá, eu gostaria de agendar um horário para esse dia ${data} ` +
                    `Nome: ${nome}  ` +
                    `E-mail: ${email}  ` +
                    `Telefone: ${telefone}  ` +
                    `Mensagem: ${mensagem}  `;
  
      const numeroWhatsApp = "5585985009105"; // ✅ Substitua pelo seu número com DDI e DDD
      const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
      window.open(link, "_blank");
    });
  });
  