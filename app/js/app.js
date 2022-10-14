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
  let mixer = mixitup('.products__inner')
})
