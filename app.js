
const menuOpen = document.getElementById('menu-hamburger');
$(menuOpen).click(function() {
    $(".menu").toggleClass("menu-open");
  });

$("#home-menu").click(function(){
    $(".menu").toggleClass("menu-open")
})

$("#about-menu").click(function(){
    $(".menu").toggleClass("menu-open")
})

$("#resume-menu").click(function(){
    $(".menu").toggleClass("menu-open")
})
// const menuSloseProjects = document.getElementById("projects-menu")
// $(menuSloseProjects).click(function(){
//     $(".menu").toggleClass("menu-open")
// })
// $(".menu").click(function() {
//     $(".menu").toggleClass("menu-open")
// })

function scrollto(section){
 $('html,body').animate({
  scrollTop: $("#"+section).offset().top
 },'slow');
}
$(".check-me-out").on("click",function(){
    $(".cover").addClass("active")
})
$(".cover").on("click", function(){
    $(".cover").removeClass("active")
})
