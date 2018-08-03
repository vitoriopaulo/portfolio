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
