document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contato form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = form.querySelector('input[placeholder="Nome"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const mensagem = form.querySelector("textarea").value;

    emailjs
      .send(service_gv7upv6, template_glveh72, {
        from_name: nome,
        from_email: email,
        message: mensagem,
      })
      .then(function () {
        alert("Recebido!");
        form.reset(); 
      });
  });
});
