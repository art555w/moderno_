$(function () {
  $('.rate-star').rateYo({
    rating: 5,
    starWidth: '11px',
    readOnly: true,
  })

  let mixer = mixitup('.products__inner')

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
  })
})
