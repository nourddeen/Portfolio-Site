
const menuOpen = document.getElementById('menu-hamburger');
$(menuOpen).click(function() {
    $(".menu").toggleClass("menu-open");
  });
const menuClose = document.getElementById("home-menu")
$(menuClose).click(function(){
    $(".menu").toggleClass("menu-open")
})
const menuSloseAbout = document.getElementById("about-menu")
$(menuSloseAbout).click(function(){
    $(".menu").toggleClass("menu-open")
})
const menuSloseResume = document.getElementById("resume-menu")
$(menuSloseResume).click(function(){
    $(".menu").toggleClass("menu-open")
})
const menuSloseProjects = document.getElementById("projects-menu")
$(menuSloseProjects).click(function(){
    $(".menu").toggleClass("menu-open")
})

function scrollto(section){
 $('html,body').animate({
  scrollTop: $("#"+section).offset().top
 },'slow');
}
