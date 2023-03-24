const sideMenu = document.getElementById("menu-mobile"),
      cover = document.getElementById("cover"),
      wrapper = document.getElementById("wrapper"),
      topMenu = document.getElementById("menu-desktop"),
      menuOn = document.getElementById("menu-on");

function menuOnOff() {
  if(sideMenu.style.visibility === "visible") {
    sideMenu.style.visibility = "hidden";
    cover.style.background = "none"
  } else {
    sideMenu.style.visibility = "visible";
    cover.style.background = "hsla(240, 100%, 5%, .5)";
    wrapper.style.mixBlendMode = "overlay";
  }
}

function menuSwitch() {
  if(screen.width >= 740) {
    topMenu.style.display = "initial";
    sideMenu.style.visibility = "hidden";
    menuOn.style.display = "none"
    cover.style.background = "none"
  } else {
    topMenu.style.display = "none"
    sideMenu.style.visibility = "hidden";
    menuOn.style.display = "initial";
    cover.style.background = "none";
  }
}

window.onresize = function() { menuSwitch() }