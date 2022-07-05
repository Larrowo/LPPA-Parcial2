logoutButton = document.getElementById("logoutButton");

validateSession();
populateRequest();

function validateSession() {
  if (localStorage.logged == "false") {
    location = "./index.html";
  }
}

function populateRequest() {
  fetch("https://basic-server-one.vercel.app/users")
  .then(response => response.json())
  .then(users => populateTable(users.data))
}

function populateTable(users) {
    let tableBody = document.getElementById("tableBody")
    let output = ""
    for (const user of users) {
        output += `
         <tr>
         <td>${user.name}</td>
         <td>${user.address.city}</td>
         <td>${user.phone}</td>
         <td>${user.username}</td>
         <td>${user.email}</td>
         </tr>`
    }
    tableBody.innerHTML = output;
}

logoutButton.onclick = (e) => {
  localStorage.logged = false;
  validateSession();
};
