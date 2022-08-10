//global $ ,console 
var header = $(".header").offset().top
var scoial = $(".social-section").offset().top
var sublist = $(".sublist").offset().top
var price = $(".containerPriceSection").offset().top
var testimonial = $(".testimonial").offset().top

var subliststart = $(".sublist").offset().top-380
var sublistend = subliststart + 600
//pics section
var picsstart = $(".standerd-picture").offset().top-380
var picsend = picsstart + 500

$(function() {  
    $("body").niceScroll();

});

var window_width = $(window).width()
$(window).on('resize', ()=>{
        window_width = $(window).width()
})
//overrite on css 
if(window_width<968){
    $('.picscontent').css({transform: 'translateX(0)' , transition : 'all 0s ease'})
    $('.sublistContent').css({transform: 'translateX(0)' , transition : 'all 0s ease'})
}

/* start header nav bar */
$(window).on('wheel',()=>{
       //sublist
     wheel();
})
var wheel = ()=>{
    if($(window).scrollTop() >=header && $(window).scrollTop() <=scoial){
        $(".list li").siblings().removeClass("active")
        $(".liHome").addClass("active") 
    }
    if($(window).scrollTop() >=scoial && $(window).scrollTop() <=sublist){
        $(".list li").siblings().removeClass("active")
        $(".liSocial").addClass("active") 
    }
    if($(window).scrollTop() >=sublist && $(window).scrollTop() <=price){
        $(".list li").siblings().removeClass("active")
        $(".liSection").addClass("active") 
    }
    if($(window).scrollTop() >=price && $(window).scrollTop() <=testimonial){
        $(".list li").siblings().removeClass("active")
        $(".liOffers").addClass("active") 
    }
    if($(window).scrollTop() >=testimonial){
        $(".list li").siblings().removeClass("active")
        $(".liAbout").addClass("active") 
    }

    if($(window).scrollTop() >=subliststart && $(window).scrollTop() <=sublistend){
        $('.sublistContent').css({transform: 'translateX(0)'});
        $(".sublistImg").css({transform: 'translateX(0)'});
        $(".list li").siblings().removeClass("active")
        $(".liSection").addClass("active")
    }
    if($(window).scrollTop() >=picsstart && $(window).scrollTop() <=picsend){
        $('.picscontent').css({transform: 'translateX(0)'})
        $('.picsImage').css({transform: 'translateX(0)'})
    }
}

//click and scroll 
$(".list li").on('click',function(){
    console.log($(".list li").siblings() )
    switch(this.getAttribute("name")){
        case 'liHome' :  $("body,html").animate({
                          scrollTop : header
                          },900);
                          console.log("goo home")
                          $(".list li").siblings().removeClass("active")
                          $(this).addClass("active")

                          break ;  
        case 'liSocial' :  $("body,html").animate({
                          scrollTop : scoial
                          },900);
                          $(".list li").siblings().removeClass("active")
                          $(this).addClass("active")
                          break ;
        case 'liSection' :  $("body,html").animate({
                            scrollTop : sublist
                            },900);
                            $('.sublistContent').css({transform: 'translateX(0)'})
                            $(".sublistImg").css({transform: 'translateX(0)'})
                            $('.picscontent').css({transform: 'translateX(0)'})
                            $('.picsImage').css({transform: 'translateX(0)'})

                            $(".list li").siblings().removeClass("active")
                            $(this).addClass("active")
                            break;
        case 'liOffers' :  $("body,html").animate({
                           scrollTop: price
                           },900);
                           $(".list li").siblings().removeClass("active")
                           $(this).addClass("active")
                           break ;
        case 'liAbout' :  $("body,html").animate({
                         scrollTop : testimonial
                         },900);
                         $(".list li").siblings().removeClass("active")
                         $(this).addClass("active")
                         break ;
}
})

$(".fa-chevron-down").on('click',()=>{
   var tabs = $(".tabs-section").offset().top
   console.log(tabs)
   $("body,html").animate({
       scrollTop : tabs
   },900)
})
   
$(".tabs-section .tab-switch li").on('click',(e)=>{
    console.log(e.target)
    $("#"+e.target.id).addClass("selected").siblings().removeClass()
    var showdata =e.target.id
    console.log(showdata)
    $("."+showdata).slideDown(300).siblings().hide();
})




var isleft = true
$(".myNav .navContent .buttonNavLeft").on("click" , ()=>{
if(isleft){
    $(".myNav").css(    {
        "transform": "translateX(-66px)" 
    })
    $(".myNav .navContent .buttonNavLeft").css({"transform" : "rotateZ(180deg)"})
    isleft = false
}else{
    $(".myNav").css(    {
        "transform": "translateX(0)" 
    })
    $(".myNav .navContent .buttonNavLeft").css({"transform" : "rotateZ(360deg)"}); 
    isleft  = true
}    
})








/*
//backup 




//global $ ,console 

$(function() {  
    $("body").niceScroll();

});

var window_width = $(window).width()
$(window).on('resize', ()=>{
        window_width = $(window).width()
})
//overrite on css 
if(window_width<968){
    $('.picscontent').css({transform: 'translateX(0)' , transition : 'all 0s ease'})
    $('.sublistContent').css({transform: 'translateX(0)' , transition : 'all 0s ease'})
}

/* start header nav bar */
/*
$(window).on('wheel',()=>{
    //sublist
if(window_width >= 1121){
 var subliststart = $(".sublist").offset().top-380
 var sublistend = subliststart + 600
 //pics section
 var picsstart = $(".standerd-picture").offset().top-380
 var picsend = picsstart + 500

 if($(window).scrollTop() >=subliststart && $(window).scrollTop() <=sublistend){
     $('.sublistContent').css({transform: 'translateX(0)'})
     $(".sublistImg").css({transform: 'translateX(0)'})
 }
 if($(window).scrollTop() >=picsstart && $(window).scrollTop() <=picsend){
     $('.picscontent').css({transform: 'translateX(0)'})
     $('.picsImage').css({transform: 'translateX(0)'})
 }
}
})

//click and scroll 
$(".list li").on('click',function(){
 console.log(this.className)
 var header = $(".header").offset().top
 var scoial = $(".social-section").offset().top
 var sublist = $(".sublist").offset().top
 var price = $(".containerPriceSection").offset().top
 var testimonial = $(".testimonial").offset().top
 switch(this.className){
     case 'liHome' :  $("body,html").animate({
                       scrollTop : header
                       },900) ;break ;  
     case 'liSocial' :  $("body,html").animate({
                       scrollTop : scoial
                       },900) ;break ;
     case 'liSection' :  $("body,html").animate({
                         scrollTop : sublist
                         },900) ;break ;
     case 'liOffers' :  $("body,html").animate({
                        scrollTop : price
                        },900) ;break ;
     case 'liAbout' :  $("body,html").animate({
                      scrollTop : testimonial
                      },900) ;break ;
}
})

$(".fa-chevron-down").on('click',()=>{
var tabs = $(".tabs-section").offset().top
console.log(tabs)
$("body,html").animate({
    scrollTop : tabs
},900)
})

$(".tabs-section .tab-switch li").on('click',(e)=>{
 console.log(e.target)
 $("#"+e.target.id).addClass("selected").siblings().removeClass()
 var showdata =e.target.id
 console.log(showdata)
 $("."+showdata).slideDown(300).siblings().hide();
})




var isleft = true
$(".myNav .navContent .buttonNavLeft").on("click" , ()=>{
if(isleft){
 $(".myNav").css(    {
     "transform": "translateX(-66px)" 
 })
 $(".myNav .navContent .buttonNavLeft").css({"transform" : "rotateZ(180deg)"})
 isleft = false
}else{
 $(".myNav").css(    {
     "transform": "translateX(0)" 
 })
 $(".myNav .navContent .buttonNavLeft").css({"transform" : "rotateZ(360deg)"}); 
 isleft  = true
}    
})*/