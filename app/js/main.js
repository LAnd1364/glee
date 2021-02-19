$(function() {

   // --------------------userNav--------------------
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

// --------------------display-btn--------------------
$('.product-display__btn').on('click', function() {
   $('.product-display__btn').removeClass('product-display__btn--active');
   $(this).addClass('product-display__btn--active');
});

$('.product-display__grid').on('click', function() {
   $('.product-items').removeClass('product-items--list');
   $('.pagination').removeClass('pagination--list');
});

$('.product-display__list').on('click', function() {
   $('.product-items').addClass('product-items--list');
   $('.pagination').addClass('pagination--list');
});

// --------------------product-det__more-btn--------------------
$('.product-det__more-btn').on('click', function(e) {
   e.preventDefault()
   $('.product-det__more-btn').removeClass('product-det__more-btn--active');
   $(this).addClass('product-det__more-btn--active');
   $('.product-det__more-content').removeClass('product-det__more-content--active');
   $($(this).attr('href')).addClass('product-det__more-content--active');
});

// --------------------------------------------------------------
// $('.contact__item--email').hover(function() {
//    $('.contact__pretitle').css("transform", "scale(5)");
// }, function(){
// $('.contact__pretitle').css("transform", "scale(1)");
// });

// --------------------Sliick-------------------
$('.product-det__slider-s').slick({
   vertical: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   focusOnSelect: true,
   asNavFor: '.product-det__slider-l'
 });
 $('.product-det__slider-l').slick({
   fade: true,
   arrows: false,
   asNavFor: '.product-det__slider-s',
   centerMode: true,
 });

// --------------------Sliick-------------------
$('.related-prod__slider-wrap .product-items').slick({
   infinite: false,
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: '<button type="button" class="slick-prev"></button>',
   nextArrow: '<button type="button" class="slick-next"></button>',
});

// --------------------Sliick-------------------
$('.slider__inner').slick({
   arrows: false,
   dots:true,
   fade: true,    
});

// --------------------RangeSlider-------------------
$(".price-filter__input").ionRangeSlider({
   type: "double",
   prefix: "$",
   step: 0.01,
   onStart: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
   },
   onChange: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
   },
});

// --------------------RateYo-------------------
$('.star').rateYo({
   readOnly: true,
   starWidth: "11px",
   spacing: "8px",
   normalFill: "#d6d6d6",
   ratedFill: "#ffcc00",
   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="11pt" height="10pt" viewBox="0 0 11 10" version="1.1"> <path d="M 4.953125 0.347656 L 3.703125 2.933594 L 0.914062 3.351562 C 0.414062 3.421875 0.214844 4.054688 0.578125 4.414062 L 2.59375 6.429688 L 2.117188 9.269531 C 2.03125 9.78125 2.5625 10.167969 3.003906 9.929688 L 5.5 8.585938 L 7.996094 9.929688 C 8.4375 10.164062 8.96875 9.78125 8.882812 9.269531 L 8.40625 6.429688 L 10.421875 4.414062 C 10.785156 4.054688 10.585938 3.421875 10.085938 3.351562 L 7.296875 2.933594 L 6.046875 0.347656 C 5.824219 -0.113281 5.175781 -0.117188 4.953125 0.347656 Z M 4.953125 0.347656 "/></svg>',
});

$('.star-l').rateYo({
   readOnly: true,
   starWidth: "18px",
   spacing: "13px",
   normalFill: "#d6d6d6",
   ratedFill: "#ffcc00",
   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="17pt" height="16pt" viewBox="0 0 17 16" version="1.1"><path d="M 7.519531 0.535156 L 5.621094 4.511719 L 1.386719 5.15625 C 0.628906 5.265625 0.324219 6.238281 0.878906 6.789062 L 3.9375 9.890625 L 3.214844 14.261719 C 3.082031 15.046875 3.890625 15.644531 4.558594 15.277344 L 8.347656 13.210938 L 12.136719 15.277344 C 12.808594 15.636719 13.613281 15.046875 13.484375 14.261719 L 12.757812 9.890625 L 15.820312 6.789062 C 16.371094 6.238281 16.066406 5.265625 15.308594 5.15625 L 11.074219 4.511719 L 9.179688 0.535156 C 8.839844 -0.175781 7.855469 -0.179688 7.519531 0.535156 Z M 7.519531 0.535156 "/></svg>',
});

// --------------------Styler-------------------
$('.product-det__cart-input').styler({});


// --------------------MixItUp-------------------
var product_items = document.querySelector('.product-items');
var newdesign__items = document.querySelector('.new-design__items');

var mixer1 = mixitup(product_items, {
   selectors: {
      control: '.product-filt__btn'
   }
});
var mixer2 = mixitup(newdesign__items, {
   selectors: {
      control: '.new-design__filt-btn'
   }
});

});