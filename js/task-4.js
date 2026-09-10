const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(data);

  form.reset();
});
