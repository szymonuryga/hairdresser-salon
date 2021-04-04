var myNav = document.getElementById('navbar');
window.onscroll = () => {
    if(window.scrollY > 20 ){
        myNav.classList.add("sticky");
    }else{
        myNav.classList.remove("sticky");
    }
}
