//Header scrolling
$(document).ready(function(){
  $(window).scroll(function(){
    var mq = window.matchMedia("(max-width: 1023px)");
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
      $(".menu__link").css({
        'color': '#000'
      });
      $(".menu__ham").css({
        'fill': '#000'
      });
      $(".menu__close").css({
        'fill': '#000'
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
      });
      $(".logo-main span").css({
        'color': '#000',
        'border-color': '#000'
      });
      $(".logo-part").css({
        'stroke': '#000',
      });
      $(".header__btn").css({
        'border-color': '#000'
      });
      if (mq.matches) {
        $(".menu__list").css({
          'background-color': '#ffffff',
          'transition': 'background-color 0.5s ease'
        });
      } else {
        $(".menu__list").css({
          'background-color': 'transparent',
        });
        console.log(mq);
      }
    } else {
      $(".header").css({
        'background-color': 'transparent',
        'box-shadow': 'none',
        'transition': 'background-color 0.5s ease'
      });
      $(".menu__link").css({
        'color': 'rgba(255,255,255,0.6)'
      });
      $(".menu__ham").css({
        'fill': '#fff'
      });
      $(".menu__close").css({
        'fill': '#fff'
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
      });
      $(".logo-main span").css({
        'color': 'rgba(255,255,255,0.8)',
        'border-color': '#fff'
      });
      $(".logo-part").css({
        'stroke': '#fff',
      });
      $(".header__btn").css({
        'border-color': '#fff'
      });
      if (mq.matches) {
        $(".menu__list").css({
          'background-color': 'transparent',
          'transition': 'background-color 0.5s ease'
        });
      }
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
