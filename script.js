window.onload = () => {
  let openMenu = document.getElementById("ham");
  let closeMenu = document.getElementById("close");
  let menuLinks = document.querySelector(".header__nav_links");

  // I added this to make the background of the menu blurry
  let hero = document.querySelector(".hero");

  //This is to disable scroll while menu is toggled
  let body = document.body;

  openMenu.onclick = () => {
    console.log("It works");
    menuLinks.classList.toggle("active");
    closeMenu.classList.toggle("active");
    body.classList.toggle("active");
    openMenu.classList.toggle("active");
    hero.classList.toggle("active");
  };

  closeMenu.onclick = () => {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    menuLinks.classList.toggle("active");
    body.classList.toggle("active");
    hero.classList.toggle("active");
  };
};
