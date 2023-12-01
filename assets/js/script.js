const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


$('.intro').addClass('on');
setTimeout(function() {
    $('.intro').addClass('off');
  }, 3000);
  setTimeout(function() {
    $('body').removeClass('remove');
    $('.intro').addClass('remove');
  }, 3800);
  setTimeout(function() {
    $('.sc-about .text-area .title').addClass('on');
    $('.sc-about .text-area .desc').addClass('on');
  }, 4000);

  $('.header .m-gnb .btn-menu').click(function(){
    $('.header .m-gnb').toggleClass('on');
    $('body').toggleClass('remove');
  })
  $('.header .m-gnb .m-gnb-wrapper a').click(function(){
    $('.header .m-gnb').removeClass('on');
    $('body').removeClass('remove');
  })


lastScroll = 0;
$(window).scroll(function(){ 
  curr = $(this).scrollTop();
  target = $('#sc-sub-project').offset().top;

  if(curr >= target){
      $('header').addClass('on');
  }else{

      $('header').removeClass('on');
  }


})

let cursor = $(".cursor"),
follower = $(".cursor-follower"),
cursor_img = $(".cursor_img");




$("body").on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to('.cursor',{
        x:mouseX,
        y:mouseY
    })
    gsap.to('.cursor2',{
        x:mouseX,
        y:mouseY
    })
})
gsap.set('.cursor',{ scale:0})
scaleMotion = gsap.to('.cursor',{ scale:1,paused:true,})

$('.sc-main-project a').hover(function(){
    scaleMotion.play()
},function(){
    scaleMotion.reverse()
})


$('.sc-sub-project').hover(function(){
    gsap.set('.cursor',{ scale:0})
})

$('.sc-sub-project .content-item').hover(function(){
    idx=$(this).index();
    console.log(idx);
    $('.cursor2').addClass('on')
    gsap.to('.cursor2 img',{ yPercent:idx*-100})
},function(){
    $('.cursor2').removeClass('on')
})

 
$('[data-scroll-1]').each(function(i,el){
    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            scrub:0,
        },
        yPercent:$(this).data('scroll-1'),
        opacity:1,
    })
})

$('[data-scroll-1]').each(function(i,el){
    $(this).click(function(){
            let s = $(this).data('scroll-1');
            lenis.scrollTo(s);
    })
})