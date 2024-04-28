function load() {
    document.body.classList.add('is-hello');
    setTimeout(function () {
        $(".is-hello").addClass("active");
    },1000);
}
window.onload = load;



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



var swiper = new Swiper(".js-slider-course", {
    slidesPerView: 2.5,
    
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 4,
        }
    }
    
});

$(document).ready(function(){
    $('.form-control--id').blur(function() {
        if( !$(this).val() ) {
           $(".c-btn__01").addClass("hidden1")
        }
        else {
            $(".c-btn__01").removeClass("hidden1")
        }
    });
    $('.form-control--pass').blur(function() {
        if( !$(this).val() ) {
            $(".c-btn__01").addClass("hidden2")
        }
        else {
            $(".c-btn__01").removeClass("hidden2")
        }
    });
});

$('.js-show-pass').click(function(){
    $(this).toggleClass('show');
    let input = $(this).prev();
    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
});


$('.language').change(function() {
    if(!!$(this).val()){
        $(".c-btn__01").removeClass("disabled");
    }
    else{
        $(".c-btn__01").addClass("disabled");
    }
}).change();



$(document).ready(function() {

});

$( ".check-question__list input" ).change(function() {
    var checked_anwsers = $('.check-question__list input:checked');
    var checked_anwsers_len = checked_anwsers.length;
    if (checked_anwsers_len === 1 ){
        $(".check-bar__line .lv").addClass("lv-01");
    }
    if (checked_anwsers_len === 2 ){
        $(".check-bar__line .lv").addClass("lv-02");
        $(".check-bar__line .lv").removeClass("lv-01");
    }
    if (checked_anwsers_len === 3 ){
        $(".check-bar__line .lv").addClass("lv-03");
        $(".check-bar__line .lv").removeClass("lv-02");
    }
    if (checked_anwsers_len === 4 ){
        $(".check-bar__line .lv").addClass("lv-04");
        $(".check-bar__line .lv").removeClass("lv-03");
    }
    if (checked_anwsers_len === 5 ){
        $(".check-bar__line .lv").addClass("lv-05");
        $(".check-bar__line .lv").removeClass("lv-04");
    }
    if (checked_anwsers_len === 5 ){
        $(".c-btn__01").removeClass("disabled");
    }
    else{
        $(".c-btn__01").addClass("disabled");
    }
});