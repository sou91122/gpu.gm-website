// loader
$(window).on('load', function (e) {
    $("#loading").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
})
// loader
// main-slider starts //
$('#main-slider').slick({
    dots: false,
    fade: true,
    // infinite: false,
    speed: 1500,
    cssEase:'ease',
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// main-slider ends //

// extra search toggle
$(function(){
    $('.extra-search-toggle').click(function () {
        $('.extra-search').toggleClass('active')
        $('.extra-search-toggle').toggleClass('active')
    })
});
// extra search toggle
// top news //
$('.all-news').slick({
    dots: false,
    infinite: false,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// top news //

// $('.sub-menu ul li a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top - 0
//     }, 1000);
//     return false;
// });


// all year //
$('.archive-area .all-yr').slick({
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000

});
// all month //
$('.archive-area .all-month').slick({
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000

});

// scroll to top btn start
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
    } else {
        $(scrollTop).css("opacity", "0");
    }
})
$(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
// scroll to top btn close
//read more/less button
$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
});

//----------what we do-----------//
// $('.work-info .nav.nav-tabs').slick({
//     dots: false,
//     infinite: false,
//     speed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//     autoplay: false,
//     autoplaySpeed: 3000
//
// });
// $('.left-right .right').click(function(event) {
//     var pos = $('.nav.nav-tabs').scrollLeft() + 50;
//     $('.nav.nav-tabs').scrollLeft(pos);
// });
// $('.left-right .left').click(function(event) {
//     var pos = $('.nav.nav-tabs').scrollLeft() - 50;
//     $('.nav.nav-tabs').scrollLeft(pos);
// });



//==============event slider==============//



$('.event-chat.area2').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    nav: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(function(){
    $('#gallery-sec .pic-area').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
          },
          titleSrc: 'title',
          verticalFit: true,
      });
      $('#gallery-sec .video-box').magnificPopup({
        delegate: 'a',
        type: 'inline',
        callbacks: {
            open: function() {
                $('html').css('margin-right', 0);
                $(this.content).find('video')[0].play();
    
            },
            close: function() {
                $(this.content).find('video')[0].load();
            }
        },
        gallery:{
            enabled:true
          },
          closeBtnInside: true
      });
});