document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password").value;
  let password2 = document.querySelector("#password2").value;

  let error = document.querySelector("#error");

  if (password == "" && password2 == "") {
    error.innerHTML = "* Passwords do not match"
  }
  else if (password === password2) {
    error.innerHTML = "";
  }
  
});
