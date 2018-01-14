$(".owl-carousel").owlCarousel({
  dots: true,
  loop: true,
  responsive: {
    1000:
    {
      items: 6
    },
    900:
    {
      items: 5
    },
    800:{
      items: 4
    },
    600: {
      items: 3
    },
    500: {
      items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000
    }
  }
});
$(".owl-carousel3").owlCarousel({
  dots: true,
  loop: true,
  items: 1

});

$(".owl-carousel1").owlCarousel({
  dots: true,
  loop: true,
  responsive: {
    1001:
    {
      items: 2
    },
    200:
    {
      items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000
    }
  }
});
$(".header__menu-button, .header__hamb-close").on("click", function(){
  $(".header__hamb").toggleClass('active');
  $("body").toggleClass('overflow-body');

})
