$(document).ready(function () {
  $('.burger').click(function (event) {
      $('.burger, .activ, nav').toggleClass('active')
  });
  $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
})
