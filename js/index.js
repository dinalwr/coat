$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu').toggleClass('active');
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

let pageSlider = new Swiper('.page', {
  wrapperClass: "page-wrapper",
  slideClass: "page-screen",
  direction: 'vertical',
  slidesPerViev: 'auto',

  keyboard: {
    enabled: true,

    onlyInViewport: true,

    pageUpDown: true,
  },

  mousewheel: {
    senstivity: 1,
  },

  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  scrollbar: {
    el: '.page-scroll',
    dragClass: "page-drag-scroll",
    draggable: true,
  },
})

function b1() {
  var x = document.getElementById("myDIV1");
      x.style.display = "none";
}

function b2() {
  var x = document.getElementById("myDIV2");
      x.style.display = "none";
}