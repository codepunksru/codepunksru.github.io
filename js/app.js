$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.materialboxed').materialbox();
  $('#close-menu').click(function(){
    $('.button-collapse').sideNav('hide');
  });
});

sidenav-overlay
