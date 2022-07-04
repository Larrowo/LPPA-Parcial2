submitBtn = document.getElementById("logInButton");
email = document.getElementById("email");
pass = document.getElementById("password");

validateSession();

function validateSession() {
  if (localStorage.logged == "true") {
    location = "./dashboard.html";
  }
}

submitBtn.onclick = (e) => {
  e.preventDefault();
  logInRequest();
};

function logInRequest() {
  fetch("https://basic-server-one.vercel.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: pass.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => logIn(data))
    .catch((error) => console.log(error));
}

function logIn(data) {
  if (!data.error) {
    localStorage.logged = "true";
    location = "./dashboard.html";
  }
}




const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
