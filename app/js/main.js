$(function() {

   $('.user-nav__search-btn').on('click', function() {
     $('.user-nav__form').toggleClass('user-nav__form--active');
   });

   $('.slider__inner').slick({
      arrows: false,
      dots:true,
      fade: true,    
   });


   // $('.popular__items').mixItUp({
   //    selectors: {
   //      filter: '.popular__filt-btn',
   //    }
   //  });
    
   //  $('.new-design__items').mixItUp({
   //    selectors: {
   //      filter: '.new-design__filt-btn',
   //    }
   //  });

   // var mixer1 = mixitup('.popular__items');
   // var mixer2 = mixitup('.new-design__items');


   
   
// var containerEl1 = document.querySelector('.popular__items');
// var containerEl2 = document.querySelector('.new-design__items');

var containerEl1 = document.querySelector('#MixItUp1');
var containerEl2 = document.querySelector('#MixItUp2');

var mixer1 = mixitup(containerEl1, {
   selectors: {
      elementFilter: 'popular__filt-btn'
   }
});
var mixer2 = mixitup(containerEl2, {
   selectors: {
      elementFilter: 'new-design__filt-btn'
   }
});

});