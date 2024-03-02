button.addEventListener("click", (event) => {
    event.preventDefault();
    var login = document.getElementById("logar").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin") {
      alert("Sucesso");
      window.location.href = "pages/page1.html";
    } else if(login == "" || senha == ""){
        alert("Preencha os campos ou login e senha errados!");
    }else{
        alert("Preencha os campos ou login e senha errados!");
    }
  });