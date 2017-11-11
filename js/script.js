//Header scrolling
$(document).ready(function(){
  $(window).scroll(function(){
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 300) {
      $(".menu__link").css({
        'color': '#000'
      });
      $(".menu__list").css({
        'background-color': '#ffffff',
        'transition': 'background-color 0.5s ease'
      });
      $(".header").css({
        'background-color': '#ffffff',
        'box-shadow': '0px 3px 59px 0px rgba(0, 0, 0, 0.05)',
        'transition': 'background-color 0.5s ease'
      });
      $(".user__phone").css({
        'color': '#000'
      });
      $(".user__btn").css({
        'color': '#000',
        'border-color': '#000'
      });
      $(".logo-main p").css({
        'color': '#000',
        'background-image': 'url(img/logo-part-black.png)'
      });
      $(".logo-main span").css({
        'color': '#000',
        'border-color': '#000'
      });
      $(".header__btn").css({
        'background-image': 'url(img/mobile_menu.png)'
      });
    } else {
      $(".header").css({
        'background-color': 'transparent',
        'box-shadow': 'none'
      });
      $(".menu__link").css({
        'color': 'rgba(255,255,255,0.6)'
      });
      $(".menu__list").css({
        'background-color': 'transparent',
        'transition': 'background-color 0.5s ease'
      });
      $(".user__phone").css({
        'color': '#fff'
      });
      $(".user__btn").css({
        'color': '#fff',
        'border-color': 'rgba(255,255,255,0.8)'
      });
      $(".logo-main p").css({
        'color': 'rgba(255,255,255,0.6)',
        'background-image': 'url(../img/logo-part.png)'
      });
      $(".logo-main span").css({
        'color': 'rgba(255,255,255,0.8)',
        'border-color': '#fff'
      });
      $(".header__btn").css({
        'background-image': 'url(img/mobile_menu-white.png)'
      });
    };
  });
});

//menu
var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".header__btn");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
  }
});
