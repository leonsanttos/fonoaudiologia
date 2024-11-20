const abrirMenu = document.getElementById("abrirMenu");
const fecharMenu = document.getElementById("fecharMenu");
const menu = document.getElementById("menu");


abrirMenu.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + "px";
    abrirMenu.style.display = "none";

    setTimeout(() => {
        menu.style.opacity = "1"
        menu.style.right = "0"
    }, 10)
    
})

fecharMenu.addEventListener('click', () =>{
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + "px"
    setTimeout(() => {
        menu.removeAttribute("style")
        abrirMenu.removeAttribute("style")
    }, 200)
    
})