$(function() {

   $('.user-nav__search-btn').on('click', function() {
     $('.user-nav__form').toggleClass('user-nav__form--active');
   });

   $('.slider__inner').slick({
      arrows: false,
      dots:true,
      fade: true,    
   });


   // $('#MixItUp1').mixItUp({
   //    selectors: {
   //      filter: '.popular__filt-btn',
   //      sort: '.sort-1'
   //    }
   //  });
    
   //  $('#MixItUp2').mixItUp({
   //    selectors: {
   //      filter: '.new-design__filt-btn',
   //      sort: '.sort-2'
   //    }
   //  });

   var mixer1 = mixitup('.popular__items');
   var mixer2 = mixitup('.new-design__items');

});