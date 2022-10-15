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

  $('.icon-list-ul').on('click', function () {
    $('.product-page__content').addClass('list')
    $('.icon-list-ul').addClass('active')
    $('.icon-th-large').removeClass('active')
  })
  $('.icon-th-large').on('click', function () {
    $('.product-page__content').removeClass('list')
    $('.icon-th-large').addClass('active')
    $('.icon-list-ul').removeClass('active')
  })

  let mixer = mixitup('.products__inner')
})
