$('.offcanva-btn').on("click",function(){
$(this).toggleClass("active")
})
$('.mssg').on("click",function(){
    $('.chat-contact').toggleClass('active')
    $('.main-content').toggleClass('active-chat')
})
let navbarheight=$('.navbar').outerHeight();
$('.sidebar').css({'top':navbarheight+'px'})
$('.chat-contact').css({'top':navbarheight+'px'})
$('.main-content').css({'padding-top':navbarheight+'px'})
let sidbarwid=$('.sidebar').width()
$(window).on('resize', ()=>{
    let windowwidth=$(window).width()

    if(windowwidth>1600){

        $('.main-content').css({'padding-right':sidbarwid+'px','padding-left':sidbarwid+'px'});
    }
    else if(windowwidth<1600 && windowwidth>992){
        $('.main-content').css({'padding-right':0,'padding-left':sidbarwid+'px'});
    
    }
    else if(windowwidth<992){
        $('.main-content').css({'padding-right':0,'padding-left':0});
    
    }
})
    $(".owl-carousel").owlCarousel({
        margin:10
    });
