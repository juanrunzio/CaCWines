//--------------Juan--------------------------------
// Selecciona el menú hamburguesa
const menuIcon = document.getElementById("menu");

// Añade un evento de clic al menú hamburguesa
menuIcon.addEventListener("click", function () {
  // Alternar la clase 'menu-open' en el elemento header
  document.querySelector(".header").classList.toggle("menu-open");
});

//--------------------------------------------------
