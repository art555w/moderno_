$(function () {
   $('.rate-star').rateYo({
      rating: 5,
      starWidth: '11px',
      readOnly: true,
   })

   $('.product-slider__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
   })

   $('.js-range-slider').ionRangeSlider({
      type: 'double',
      grid: true,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: '$',
   })

   $('.icon-th-list').on('click', function () {
      $('.product-page__content').addClass('list')
      $('.icon-th-list').addClass('active')
      $('.icon-th-large').removeClass('active')
   })
   $('.icon-th-large').on('click', function () {
      $('.product-page__content').removeClass('list')
      $('.icon-th-large').addClass('active')
      $('.icon-th-list').removeClass('active')
   })

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('active')
      $('.menu__list').slideToggle()
   })

   $('.header__top-user').on('click', function () {
      $('.header__register').toggleClass('active')
   })

   let mixer = mixitup('.products__inner')
})
