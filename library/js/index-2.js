document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button__burger-open").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button__burger-close").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
});

document.getElementById("header__nav").addEventListener('click', event => {
  event._isClickWithUnMenu = true;
});
document.getElementById("button__burger-open").addEventListener('click', event => {
  event._isClickWithUnMenu = true;
});

document.body.addEventListener('click', event => {
  if (event._isClickWithUnMenu) return;
  document.querySelector(".header").classList.remove("open")
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header__list").addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("open")
  })
});


// click icon profile
const iconUser = document.querySelector(".button__user-profile");
const profileMenu = document.querySelector('.header__profile')
// const profileMenuVerificated = document.querySelector('.verificated-acc')
iconUser.addEventListener('click', () => {
  profileMenu.classList.toggle('hidden');
})

// slider 
const blockImg = document.querySelector(".slider__block__img");
const liButtons = document.querySelectorAll(".carousel__item");
const carouselButtons = document.querySelectorAll(".carousel__item__circle");

let position = 0;
let dotIndex = 0;


const dotsActive = (index) => {
  for (let dot of carouselButtons) {
    dot.classList.remove('carousel__item__circle-v2')
  }
  carouselButtons[index].classList.add('carousel__item__circle-v2')
}

liButtons.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 475 * (index - 1);
    blockImg.style.left = -position + 'px'
    dotIndex = index;
    dotsActive(dotIndex)
  })
})

