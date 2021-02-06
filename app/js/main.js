$(function() {

   $('.user-nav__search-btn').on('click', function() {
     $('.user-nav__form').toggleClass('user-nav__form--active');
   });

// --------------------Pagination--------------------
$('.pagination__item-btn').on('click', function() {
   $('.pagination__item-btn').removeClass('pagination__item-btn--active');
   $(this).addClass('pagination__item-btn--active');
   $('.pagination__prev-btn').addClass('pagination__prev-btn--active');
   $('.pagination__next-btn').removeClass('pagination__next-btn--hide');
   $('.pagination').addClass('pagination--transf');
});

$('.pagination__item-btn:first').on('click', function() {
   $('.pagination__prev-btn').removeClass('pagination__prev-btn--active');
   $('.pagination').removeClass('pagination--transf');
});

$('.pagination__item-btn:last').on('click', function() {
   $('.pagination__next-btn').addClass('pagination__next-btn--hide');
});

$('.pagination__next-btn').on('click', function() {
   $('.pagination__prev-btn').addClass('pagination__prev-btn--active');
   $('.pagination').addClass('pagination--transf');
});

$('.pagination__prev-btn').on('click', function() {
   $('.pagination__next-btn').removeClass('pagination__next-btn--hide');
});





// --------------------Sliick-------------------
$('.slider__inner').slick({
   arrows: false,
   dots:true,
   fade: true,    
});


// --------------------MixItUp-------------------
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