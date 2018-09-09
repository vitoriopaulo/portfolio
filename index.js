$(() => {
  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target
  	    })
  	})

    $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

  /* Scripts for the Interactive Scrolls of About & Portfolio */

            var amount = '';

            function scrollAbout() {
              $('.about').animate({
                scrollTop: amount
              }, 100, 'linear', function() {
                if (amount != '') {
                  scrollAbout();
                }
              });
            }
            $('#up').hover(function() {
              amount = '+=10';
              scrollAbout();
            }, function() {
              amount = '';
            });
            $('#down').hover(function() {
              amount = '-=10';
              scrollAbout();
            }, function() {
              amount = '';
            });



            function scrollPortfolio() {
              $('.portfolio-scroll').animate({
                scrollTop: amount
              }, 100, 'linear', function() {
                if (amount != '') {
                  scrollPortfolio();
                }
              });
            }
            $('#going-up').hover(function() {
              amount = '+=10';
              scrollPortfolio();
            }, function() {
              amount = '';
            });
            $('#going-down').hover(function() {
              amount = '-=10';
              scrollPortfolio();
            }, function() {
              amount = '';
            });

// Modal pop-up on click button event //

  var button = $('#btn')
  var popup_window = $('.popup')
  var close_button = popup_window.find('.close')


  button.on('click', function(){
    popup_window.css({
      'transform':'translateY(0)',
      'z-index':'999'
    });

    $('body').addClass('overlay');

    popup_window.find('h4').animate({
      left:'0'
    },1000);

    $(this).css({
      'z-index':'-1'
    });


    close_button.on('click', function(){
      $(this).parent().css({
      'transform':'translateY(-300%)'
     });

      $('body').removeClass('overlay');
      $(this).parent().siblings('.btn').css({
        'z-index':'1'
      });
    });
  });


})


// Imported from my codepen.io Account //

// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
// 	    e.preventDefault();
//
// 	    var target = this.hash;
// 	    var $target = $(target);
//
// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 900, 'swing', function () {
// 	        window.location.hash = target;
// 	    });
// 	});
// });
