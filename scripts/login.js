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
    .then((info) => logIn(info))
    .catch((error) => console.log(error));
}

function logIn(info) {
  if (!info.error) {
    localStorage.logged = "true";
    location = "./dashboard.html";
  }
}


