document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-agendamento");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio do form

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    let data = document.getElementById("data").value;
    const mensagem = document.getElementById("mensagem").value.trim();
    const hora = document.getElementById("horario").value;

    // Obtém a data de hoje em formato YYYY-MM-DD
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    const hojeFormatado = `${ano}-${mes}-${dia}`;

    // Se a data escolhida for anterior a hoje, substitui pela data de hoje
    if (data < hojeFormatado) {
      //data = hojeFormatado;
      alert("voce selecionou essa data! "+ data)
    }

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

    const numeroWhatsApp = "5585997319638"; // ✅ Substitua pelo seu número com DDI e DDD
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
  });
});
