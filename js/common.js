$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 100) $("#header").css({top: '0', position: 'relative'});
else $("#header").css({top: '0', left: '0', position: 'fixed', width:'100%', zIndex:"100", background: 'none repeat scroll 0% 0% rgba(250, 250, 250, 0.9)'});
});
});