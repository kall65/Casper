let menu_icon = document.getElementById("menu_icon");
let menu_bar = document.getElementById("menu_bar");
menu_icon.onclick = () => {
  if (menu_bar.style.display == "block") {
    menu_bar.style.display = "none";
  } else {
    menu_bar.style.display = "block";
  }
};
