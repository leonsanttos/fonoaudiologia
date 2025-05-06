document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-agendamento");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede envio do form
  
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const data = document.getElementById("data").value;
      const mensagem = document.getElementById("mensagem").value;
      const hora = document.getElementById("horario").value;
  
      const texto = `Olá meu nome é ${nome}` + 
      ` as ${hora}` + `, e gostaria de verificiar a disponibilidade para uma avaliação na seguinte data ${data}` +
                    `Segue minhas formas de contato E-mail: ${email}  ` +
                    `Telefone: ${telefone}  ` +
                    `Mensagem: ${mensagem}  `;
  
      const numeroWhatsApp = "5585985009105"; // ✅ Substitua pelo seu número com DDI e DDD
      const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
      window.open(link, "_blank");
    });
  });
  