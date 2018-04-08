//========================
//NAVBAR
//========================

  $(document).ready(function () {

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar

      $(window).scroll(function () {

        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 40) {
          $('.navbar')
            .removeClass('animated fadeOutUp')
            .addClass('animated fadeInDown')
            .fadeIn();

        } else {
          $('.navbar')
            .removeClass('animated fadeInDown')
            .addClass('animated fadeOutUp')
            .fadeOut();
        }
      });

  });


// NOTE: Don't use this token, replace it with your own client access token.

//Ceate a application tocke from https://dribbble.com/account/applications
$.jribbble.setToken('YOUR-TOKEN_GOES_HERE');


//Replace srizon with your dribbble username
$.jribbble.users('srizon').shots({
  per_page: 12
}).then(function (shots) {
  var html = [];

  shots.forEach(function (shot) {
    html.push('<li class="col-md-3 col-sm-4 shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});


//========================
//Follow button
//========================

$(function () {


  // SOME VARIABLES
  var button = '.dribbble-follow-button',
    label = $(button).text(),
    username = $('a' + button).attr('href').toLowerCase().replace('http://dribbble.com/', ''),
    disableCount = $(button).attr('class');

  // DISPLAYED WHEN THE API IS NOT RESPONDING
  $(button).wrap('<div class="dribbble-follow-button" />').removeClass().addClass('label').html('<i></i> ' + label);

  // REQUESTS USER'S DATA FROM DRIBBBLE'S API AND APPENDS IT
  $.getJSON('http://api.dribbble.com/players/' + username + '?callback=?', function (data) {
    $(button).wrap('<div class="dribbble-follow-button ' + disableCount + '" />')
      .parent().html('<a class="label" href="http://dribbble.com/' + username + '" target="_blank"><i></i>' + label + '</a><a class="count" href="http://dribbble.com/' + username + '/followers" target="_blank"><i></i><u></u>' + data.followers_count + ' followers</a>');
    $(button + '.disableCount').find('.count').remove();
  });

});


//========================
//PRELOADER
//========================
$(window).load(function () { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow');
  // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
  mousescrollstep: 70,
  cursorcolor: "#ea9312",
  cursorwidth: "5px",
  cursorborderradius: "10px",
  cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


//========================
//icon hover effect
//========================
$('#destination img').hover(
  function () {
    $(this).addClass('animated pulse')
  },
  function () {
    $(this).removeClass('animated pulse')
  })


// messenger effect
$(document).ready(function () { var t = { delay: 125, overlay: $(".fb-overlay"), widget: $(".fb-widget"), button: $(".fb-button") }; setTimeout(function () { $("div.fb-livechat").fadeIn() }, 8 * t.delay), $(".ctrlq").on("click", function (e) { e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({ bottom: 0, opacity: 0 }, 2 * t.delay, function () { $(this).hide("slow"), t.button.show() })) : t.button.fadeOut("medium", function () { t.widget.stop().show().animate({ bottom: "30px", opacity: 1 }, 2 * t.delay), t.overlay.fadeIn(t.delay) }) }) });
