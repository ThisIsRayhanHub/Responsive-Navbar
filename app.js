const burger = document.querySelector("#menuIcon img");
const sidbar = document.getElementById("sidbar");

burger.addEventListener("click", () => {
  sidbar.classList.toggle("active");

  if (sidbar.classList.contains("active")) {
    burger.src = "./img/cross.png";
  } else {
    burger.src = "./img/Menu.png";
  }
});

// other code in this logic

// const menuIcon = document.querySelector('#menuIcon img');
// const sidbar = document.getElementById('sidbar');

// menuIcon.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     const isActive = sidbar.classList.toggle('active');

//     menuIcon.src = isActive
//         ? "./img/cross.png"
//         : "./img/Menu.png";
// }
