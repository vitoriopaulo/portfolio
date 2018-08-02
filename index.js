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

            function scroll() {
              $('.about').animate({
                scrollTop: amount
              }, 100, 'linear', function() {
                if (amount != '') {
                  scroll();
                }
              });
            }
            $('#up').hover(function() {
              amount = '+=10';
              scroll();
            }, function() {
              amount = '';
            });
            $('#down').hover(function() {
              amount = '-=10';
              scroll();
            }, function() {
              amount = '';
            });



            function scroll() {
              $('.portfolio-scroll').animate({
                scrollTop: amount
              }, 100, 'linear', function() {
                if (amount != '') {
                  scroll();
                }
              });
            }
            $('#going-up').hover(function() {
              amount = '+=10';
              scroll();
            }, function() {
              amount = '';
            });
            $('#going-down').hover(function() {
              amount = '-=10';
              scroll();
            }, function() {
              amount = '';
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
