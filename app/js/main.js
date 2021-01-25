$(function() {

   $('.user-nav__search-btn').on('click', function() {
     $('.user-nav__form').toggleClass('user-nav__form--active');
   });

   $('.slider__inner').slick({
      arrows: false,
      dots:true,
      fade: true,    
   });

});