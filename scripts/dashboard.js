volverbtn = document.getElementById("volverboton");


volverbtn.onclick = (e) => {
localStorage.logged = false;
if (localStorage.logged == "false") {
    location = "./login.html"
}
}