// SLIDESHOW

const icons = document.querySelectorAll(".section-1-icons i");

// console.log(icons);
let i = 0;
setInterval(() => {
  //   const icon = document.querySelector(".section-1-icons i.active");
  //   icon.classList.remove("active");
  //   icon.nextElementSibling.classList.add("active");

  icons[i].classList.remove("active");
  i += 1;

  if (i >= icons.length) {
    i = 0;
    icons[i].classList.add("active");
  } else {
    icons[i].classList.add("active");
  }
}, 3000);

// END SLIDESHOW
