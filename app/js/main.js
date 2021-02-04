$(function() {

   $('.user-nav__search-btn').on('click', function() {
     $('.user-nav__form').toggleClass('user-nav__form--active');
   });

   $('.slider__inner').slick({
      arrows: false,
      dots:true,
      fade: true,    
   });

var popular__items = document.querySelector('.popular__items');
var newdesign__items = document.querySelector('.new-design__items');

var mixer1 = mixitup(popular__items, {
   selectors: {
      control: '.popular__filt-btn'
   }
});
var mixer2 = mixitup(newdesign__items, {
   selectors: {
      control: '.new-design__filt-btn'
   }
});

});