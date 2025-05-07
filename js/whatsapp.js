document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-agendamento");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio do form

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const mensagem = document.getElementById("mensagem").value.trim();
    const hora = document.getElementById("horario").value;

    // Converte data de YYYY-MM-DD para DD/MM/YYYY
    const partesData = data.split("-");
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    let texto = `Olá, meu nome é ${nome}` +
      `, e eu gostaria de verificar a disponibilidade para uma avaliação na seguinte data ${dataFormatada}` +
      ` às ${hora}h.` +
      ` Segue minhas formas de contato: E-mail: ${email}, Telefone: ${telefone}.`;

    if (mensagem !== "") {
      texto += ` Outras informações: ${mensagem}`;
    }

    const numeroWhatsApp = "5585985009105"; // ✅ Substitua pelo seu número com DDI e DDD
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
  });
});
