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
  parallax: true,

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

  pagination: {
    el: '.page-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page-bullet",
    bulletActiveClass: "page-bullet-active",
  },

  scrollbar: {
    el: '.page-scroll',
    dragClass: "page-drag-scroll",
    draggable: true,
  },
})