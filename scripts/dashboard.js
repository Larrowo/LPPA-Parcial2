volverbtn = document.getElementById("volverboton");


volverbtn.onclick = (e) => {
  
localstorage.logged = false;
}
if (localStorage.logged == "false") {
    location = "./login.html"
}