<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Glee</title>
   <link rel="stylesheet" href="css/index.min.css">
</head>

<body>

   <header class="header">
   <div class="container-l">
      <div class="header__inner">
         <a class="logo" href="#">
            <img class="logo__img" src="images/logo.png" alt="logo">
         </a>
         <nav class="menu">
            <ul class="menu__list">
               <li class="menu__item">
                  <a class="menu__item-link" href="#">Home +</a>
               </li>
               <li class="menu__item">
                  <a class="menu__item-link" href="#">About</a>
               </li>
               <li class="menu__item">
                  <a class="menu__item-link" href="#">Services</a>
               </li>
               <li class="menu__item">
                  <a class="menu__item-link" href="#">Pages +</a>
               </li>
               <li class="menu__item">
                  <a class="menu__item-link" href="#">News</a>
               </li>
               <li class="menu__item">
                  <a class="menu__item-link" href="#">Contact</a>
               </li>
            </ul>
            <button class="menu__btn">
               <span class="menu__btn-line-1"></span>
               <span class="menu__btn-line-2"></span>
               <span class="menu__btn-line-3"></span>
            </button>
         </nav>
         <div class="user-nav">
            <form class="user-nav__form">
               <input class="user-nav__input" type="search" placeholder="Type what do you search">
            </form>
            <button class="user-nav__search-btn">
               <img class="user-nav__search-img" src="images/icons/search.svg" alt="search icon">
            </button>
            <div class="user-nav__links">
               <a class="user-nav__wishlist-link" href="#">
                  <img class="user-nav__wishlist-img" src="images/icons/heart.png" alt="wishlist icon">
                  <span class="user-nav__num">0</span>
               </a>
               <a class="user-nav__cart-link" href="#">
                  <img class="user-nav__cart-img" src="images/icons/cart.svg" alt="cart icon">
                  <span class="user-nav__num">0</span>
               </a>
            </div>
            <a class="user-nav__catalog-link" href="#">
               <img class="user-nav__catalog-img" class="" src="images/icons/catalog.svg" alt="catalog icon">
            </a>
         </div>
      </div>
   </div>
</header>

   <main class="main">

      <div class="slider">
   <div class="container-l">
      <div class="slider__wrap">
      <div class="slider__circle" style="background: linear-gradient(90deg, transparent 0%, white 85%);"></div>
         <div class="container-s">
            <div class="slider__inner">
               <div class="slider__item-wrap">
                  <div class="slider__item">
                     <div class="slider__content">
                        <div class="slider__content-box">
                           <h1 class="slider__title">SMART AND TRENDY</h1>
                           <p class="slider__text">
                              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                           </p>
                        </div>
                        <a class="slider__link" href="#">Shop Now</a>
                     </div>
                     <img class="slider__img" src="images/slider/1.png" alt="furniture image">
                  </div>
               </div>
               <div class="slider__item-wrap">
                  <div class="slider__item">
                     <div class="slider__content">
                        <div class="slider__content-box">
                           <h1 class="slider__title">SMART AND TRENDY</h1>
                           <p class="slider__text">
                              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                           </p>
                        </div>
                        <a class="slider__link" href="#">Shop Now</a>
                     </div>
                     <img class="slider__img" src="images/slider/1.png" alt="furniture image">
                  </div>
               </div>
               <div class="slider__item-wrap">
                  <div class="slider__item">
                     <div class="slider__content">
                        <div class="slider__content-box">
                           <h1 class="slider__title">SMART AND TRENDY</h1>
                           <p class="slider__text">
                              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                           </p>
                        </div>
                        <a class="slider__link" href="#">Shop Now</a>
                     </div>
                     <img class="slider__img" src="images/slider/1.png" alt="furniture image">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

      <div class="services">
   <div class="container-l">
      <ul class="services__list">
         <li class="services__item">
            <img class="services__item-img" src="images/icons/24.svg" alt="support icon">
            <div class="services__item-content">
               <h5 class="services__item-title">Support 24/7.</h5>
               <p class="services__item-desc">
                  Contact us 24 hours a day, 7 days a week.
               </p>
            </div>
         </li>
         <li class="services__item">
            <img class="services__item-img" src="images/icons/truck.svg" alt="delivery icon">
            <div class="services__item-content">
               <h5 class="services__item-title">Delivery.</h5>
               <p class="services__item-desc">
                  Free shipping on all US order.
               </p>
            </div>
         </li>
         <li class="services__item">
            <img class="services__item-img" src="images/icons/credit-card.svg" alt="payment secure icon">
            <div class="services__item-content">
               <h5 class="services__item-title">100% Payment secure.</h5>
               <p class="services__item-desc">
                  We ensure secure payment with PEV.
               </p>
            </div>
         </li>
      </ul>
   </div>
</div>

      <section class="products">
   <div class="container-s">
      <h2 class="products__title section-title">Products of the week</h2>
      <div class="product-filters">
   <button class="product-filters__btn product-filt__btn" data-filter="all">All</button>
   <button class="product-filters__btn product-filt__btn"
      data-filter=".category-furnitures">Furnitures</button>
   <button class="product-filters__btn product-filt__btn" data-filter=".category-chairs">Chairs</button>
   <button class="product-filters__btn product-filt__btn" data-filter=".category-lighting">Lighting</button>
   <button class="product-filters__btn product-filt__btn" data-filter=".category-decor">Decor</button>
</div>

      <div class="product-items">
  <div class="product-item__wrap mix category-furnitures">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-1.png" alt="furniture image">
          <img class="product-item__img--list" src="images/products/product-1-list.png"
             alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden radio</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-chairs">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-2.png" alt="furniture image">
          <img class="product-item__img--list" src="images/products/product-2-list.png"
             alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-furnitures">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-3.png" alt="furniture image">
          <img class="product-item__img--list" src="images/products/product-3-list.png"
             alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">White chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-lighting">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-4.png" alt="furniture image">
          <img class="product-item__img--list" src="images/products/product-4-list.png"
             alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Retro table</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-lighting">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-5.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden radio</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-furnitures">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-6.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-decor">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-7.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">White chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-chairs category-furnitures">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-8.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Retro table</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-lighting">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-9.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Retro table</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-lighting">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-10.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden radio</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-furnitures">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-11.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">Wooden chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
  <div class="product-item__wrap mix category-decor">
    <div class="product-item">
       <div class="product-item__img-wrap">
          <img class="product-item__img" src="images/products/product-1.png" alt="furniture image">
       </div>
       <div class="product-item__info">
          <h5 class="product-item__title">White chair</h5>
          <div class="star-l" data-rateyo-rating="4"></div>
          <span class="product-item__price--list">$29</span>
          <p class="product-item__desc">
             consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <span class="product-item__price">$29.00</span>
         <div class="item-links">
   <a class="item-link" href="#">
      <svg width="20px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 15.000,3.357 15.000,7.499 C15.000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z" />
      </svg>
   </a>
   <a class="item-link item-link__cart" href="#">
      <svg class="item-link__cart-img" width="22px" height="20px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z" />
      </svg>
      <svg class="item-link__cart-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #fff;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to cart</tspan>
         </text>
      </svg>
   </a>
   <button class="item-link item-link__wishlist-btn">
      <svg class="item-link__wishlist-img" width="22px" height="18px">
         <path fill-rule="evenodd" fill="rgb(163, 187, 200)"
            d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z" />
      </svg>
      <svg class="item-link__wishlist-text" xmlns="http://www.w3.org/2000/svg" width="106" height="12" viewBox="0 0 106 12">
         <defs>
            <style>
               .cls-1 {
                  font-size: 15px;
                  fill: #000;
                  text-anchor: middle;
                  font-family: Rubik;
                  text-transform: uppercase;
               }
            </style>
         </defs>
         <text data-name="Add to cart" class="cls-1" x="53.378" y="11.421">
            <tspan x="53.378">Add to wishlist</tspan>
         </text>
      </svg>
   </button>
</div>

       </div>
    </div>
  </div>
</div>
    </div>
</section>

      <div class="lamps">
   <div class="container-l">
      <div class="lamps__wrap">
         <div class="lamps__item">
            <img class="lamps__item-img" src="images/lamps/lamp-1.png" alt="lamp">
            <div class="lamps__item-inner">
               <h5 class="lamps__inner-title">Mirum Notare Tellus</h5>
               <p class="lamps__inner-desc">
                  LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 E27LEDCornLight
               </p>
               <a class="lamps__inner-link" href="#">View More</a>
            </div>
         </div>
         <div class="lamps__item">
            <img class="lamps__item-img" src="images/lamps/lamp-2.png" alt="lamp">
            <div class="lamps__item-inner">
               <h5 class="lamps__inner-title">Malesuada Tempor Euismod</h5>
               <p class="lamps__inner-desc">
                  50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight
               </p>
               <a class="lamps__inner-link" href="#">View More</a>
            </div>
         </div>
      </div>
   </div>
</div>

            <section class="new-design">
         <div class="container-s">
            <h2 class="new-design__title section-title">New Design</h2>
            <div class="product-filters">
   <button class="product-filters__btn new-design__filt-btn" data-filter="all">All</button>
   <button class="product-filters__btn new-design__filt-btn"
      data-filter=".category-furnitures">Furnitures</button>
   <button class="product-filters__btn new-design__filt-btn" data-filter=".category-chairs">Chairs</button>
   <button class="product-filters__btn new-design__filt-btn"
      data-filter=".category-lighting">Lighting</button>
   <button class="product-filters__btn new-design__filt-btn" data-filter=".category-decor-nd">Decor</button>
</div>
            <div class="new-design__items">
               <div class="new-design__item mix category-furnitures"
                  style="background-image: url(images/new-design/1.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Beat Flat Pendant Black</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
               <div class="new-design__item mix category-lighting category-decor-nd"
                  style="background-image: url(images/new-design/2.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Lampe Sur Pieds Bamboo</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
               <div class="new-design__item mix category-chairs"
                  style="background-image: url(images/new-design/3.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Rattan Rocking Chair</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
               <div class="new-design__item mix category-lighting  category-decor-nd"
                  style="background-image: url(images/new-design/4.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Rattan Rocking Chair</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
               <div class="new-design__item mix category-chairs"
                  style="background-image: url(images/new-design/5.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Rattan Rocking Chair</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
               <div class="new-design__item mix category-furnitures category-lighting"
                  style="background-image: url(images/new-design/6.jpg);">
                  <h5 class="new-design__item-title">
                  <a class="new-design__item-title-link" href="#">Rattan Rocking Chair</a>
                  </h5>
                  <a class="new-design__item-coll" href="#">Classic</a>
               </div>
            </div>
         </div>
      </section>

      <div class="video" style="background-image: url(images/video-bg.jpg);">
   <a class="video__play-btn" data-fancybox href="https://youtu.be/Vn8phH0k5HI"></a>
</div>

      <section class="articles">
   <div class="container-s">
      <div class="articles__top">
         <h2 class="articles__title section-title">Our Insights & Articles</h2>
         <a class="articles__top-link" href="#">View All</a>
      </div>
      <div class="articles__inner">
         <div class="articles__item">
            <a class="articles__item-img-link" href="#">
               <img class="articles__item-img" src="images/articles/articles-img-1.jpg" alt="article img">
            </a>
            <a class="articles__item-news-link" href="#">NEWS</a>
            <div class="articles__item-box">
               <h4 class="articles__item-title">
                  <a class="articles__item-title-link" href="#">
                     Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
                        <path fill="#fff" fill-rule="evenodd"
                           d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.3a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.5H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z"
                           transform="translate(-535 -649)" />
                     </svg>
                  </a>
               </h4>
               <div class="articles__item-bottom">
                  <span class="articles__item-date">28 JANUARY, 2020</span>
                  <a class="articles__author-link" href="#">BY ADMIN</a>
               </div>
            </div>
         </div>
         <div class="articles__item">
            <a class="articles__item-img-link" href="#">
               <img class="articles__item-img" src="images/articles/articles-img-2.jpg" alt="article img">
            </a>
            <a class="articles__item-news-link" href="#">NEWS</a>
            <div class="articles__item-box">
               <h4 class="articles__item-title">
                  <a class="articles__item-title-link" href="#">
                     Aonsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
                        <path fill="#fff" fill-rule="evenodd"
                           d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.3a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.5H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z"
                           transform="translate(-535 -649)" />
                     </svg>
                  </a>
               </h4>
               <div class="articles__item-bottom">
                  <span class="articles__item-date">28 JANUARY, 2020</span>
                  <a class="articles__author-link" href="#">BY ADMIN</a>
               </div>
            </div>
         </div>
         <div class="articles__item">
            <a class="articles__item-img-link" href="#">
               <img class="articles__item-img" src="images/articles/articles-img-3.jpg" alt="article img">
            </a>
            <a class="articles__item-news-link" href="#">NEWS</a>
            <div class="articles__item-box">
               <h4 class="articles__item-title">
                  <a class="articles__item-title-link" href="#">
                     Rncididunt ut labore et dolore magna aliqua. Ut enim
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
                        <path fill="#fff" fill-rule="evenodd"
                           d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.3a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.5H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z"
                           transform="translate(-535 -649)" />
                     </svg>
                  </a>
               </h4>
               <div class="articles__item-bottom">
                  <span class="articles__item-date">28 JANUARY, 2020</span>
                  <a class="articles__author-link" href="#">BY ADMIN</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

      <div class="partners">
   <div class="container-s">
      <div class="partners-block">
         <div class="partners__item">
            <img class="partners__img" src="images/partners/peterson.png" alt="peterson logo">
         </div>
         <div class="partners__item">
            <img class="partners__img" src="images/partners/kmn.png" alt="kmn logo">
         </div>
         <div class="partners__item">
            <img class="partners__img" src="images/partners/chainforce.png" alt="chainforce logo">
         </div>
         <div class="partners__item">
            <img class="partners__img" src="images/partners/nextg3n.png" alt="nextg3n logo">
         </div>
         <div class="partners__item">
            <img class="partners__img" src="images/partners/vintage.png" alt="vintage logo">
         </div>
      </div>
   </div>
</div>

   </main>

   <footer class="footer">
   <div class="container-s">
      <div class="footer-top">
         <div class="footer-top__item">
            <a class="logo" href="#">
               <img class="logo__img" src="images/logo.png" alt="logo">
            </a>
            <ul class="footer-top__list">
               <li class="footer-top__list-item">
                  ADDRESS: 4772 Wines Lane Houston, TX 77032
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="tel:+8323475843"><span>Telephone</span>: +832-347-5843</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="mailto:contact@Glee.com"><span>Email</span>:
                     contact@Glee.com</a>
               </li>
            </ul>
         </div>
         <div class="footer-top__item footer-top__services">
            <h5 class="footer-top__item-title footer-top__item-title-slide">Services</h5>
            <ul class="footer-top__top-list">
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">About us</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Return Policy</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Our Blog</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Contact Us</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Terms & Condition</a>
               </li>
            </ul>
         </div>
         <div class="footer-top__item footer-top__account">
            <h5 class="footer-top__item-title footer-top__item-title-slide">Account</h5>
            <ul class="footer-top__top-list">
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Your Account</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Checkout</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Login</a>
               </li>
               <li class="footer-top__list-item">
                  <a class="footer-top__list-link" href="#">Register</a>
               </li>
            </ul>
         </div>
         <div class="footer-top__item footer-top__newsletter">
            <h5 class="footer-top__item-title">newsletter</h5>
            <p class="footer-top__item-text"> 
               Subscribe by our newsletter and get update protidin.
            </p>
            <form class="footer-top__form">
               <input class="footer-top__input" type="email" placeholder="Email address">
               <button class="footer-top__btn" type="submit">Subscribe</button>
            </form>
         </div>
      </div>
      <div class="footer-bottom">
         <p class="footer-bottom__copy">©2020 CopyRight Example. All rights reserved.</p>
         <ul class="footer-bottom__menu">
            <li class="footer-bottom__menu-item">
               <a class="footer-bottom__menu-link" href="#">Home</a>
            </li>
            <li class="footer-bottom__menu-item">
               <a class="footer-bottom__menu-link" href="#">About</a>
            </li>
            <li class="footer-bottom__menu-item">
               <a class="footer-bottom__menu-link" href="#">Blog</a>
            </li>
            <li class="footer-bottom__menu-item">
               <a class="footer-bottom__menu-link" href="#">Contact</a>
            </li>
         </ul>
      </div>
   </div>
</footer>

   <script src="js/main.min.js"></script>
</body>

</html>
