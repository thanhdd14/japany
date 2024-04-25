//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});

(function($){
    var color,
        css=';min-height:9px;border-radius:',
        pickColor=function(e){
            return color[parseInt(e*color.length/101)];
        };
    
    $.fn.pBar = function(){
        return this.each(function(){
            var $bar=$(this),
                from=$bar.data('from'),
                to=$bar.data('to');
            color=($bar.data('color')||'#fff').split(',');
            
            $bar.html('<div style="height:'+from+'%;background-color:'+pickColor(from)+'"></div>')
                .prop('title',to+'%')
                .attr('onclick','$(this).pBar();');
            
            $bar.children('div')
                .height(to+'%')
                .css("background-color", pickColor(to));
        });
    }
    
    $("<style>.pBar div{transition:all 1s linear 0s;box-sizing:border-box}</style>").appendTo("head");
    $(document).ready(function(){$('.pBar').pBar();});
    
})(jQuery);

// $('.js-slider-course').slick({
//     centerMode: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//     responsive: [
//         {
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 2
//             }
//         }
//     ]
// });
// setTimeout(function () {
//     $(".js-slider-course .slick-track").css("transform","none");
// },500);


var swiper = new Swiper(".js-slider-course", {
    slidesPerView: 2.5,
    
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 3.5,
        }
    }
    
});