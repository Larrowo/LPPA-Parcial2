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

  if (validateInputs()) {
    logInRequest();
  }
};

function logInRequest() {
  fetch("https://basic-server-one.vercel.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

function validateInputs() {
  validate = true;

  if (email.value === "" || email.value === null) {
    setError(email, "Email is required");
    validate = false;
  } else if (!isValidEmail(email.value)) {
    setError(email, "Provide a valid email address");
    validate = false;
  } else if (email.value != "valeria@gmail.com") {
    setError(email, "Email does not match any valid emails");
    validate = false;
  } else {
    setSuccess(email);
  }

  if (pass.value === "" || pass.value === null) {
    setError(pass, "Pass is required");
    validate = false;
  } else if (pass.value != "lppa2022") {
    setError(pass, "Incorrect password");
    validate = false;
  } else {
    setSuccess(pass);
  }

  return validate;
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  errorDisplay.classList.add("active")
  errorDisplay.classList.remove("hidden")
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  errorDisplay.classList.add("hidden")
  errorDisplay.classList.remove("active")
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};



