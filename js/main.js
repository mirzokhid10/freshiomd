let elOption = document.querySelector(".site-hero__search-div");
let elSearchOpen = document.querySelector(".search");
let elNavigList = document.querySelector(".navig__list");
let elNavigClose = document.querySelector(".navig__close");
let elNavigOpen = document.querySelector(".site-hero__menu");
let elNavigToggle = document.querySelector(".navig-toggle");
let elNavigMenuBtn = document.querySelector(".navig__menu-btn");
let n = 0;

elSearchOpen.addEventListener("click", function () {
  if (n == 0) {
    elOption.classList.add("open");
    document.getElementById("serch").className = "fal fa-times";
    n++;
  } else {
    elOption.classList.remove("open");
    document.getElementById("serch").className = "fal fa-search";
    n = 0;
  }
});
elNavigOpen.addEventListener("click", () => {
  elNavigList.classList.add("open");
});
elNavigClose.addEventListener("click", () => {
  elNavigList.classList.remove("open");
});
elNavigMenuBtn.addEventListener("click", () => {
  elNavigToggle.classList.toggle("shown");
  elNavigMenuBtn.classList.toggle("shown");
});
$(".products__list").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".partners__list").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// modal js

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the mal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
