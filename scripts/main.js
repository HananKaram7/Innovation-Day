//color box
let colorItems = $(".color-item")
colorItems.click(function(){
    let myColor = $(this).css("backgroundColor");
    $(".slogan, h2 , h3,h4").css("color" , myColor);
})
colorItems.eq(0).css("background" , "#09c");
colorItems.eq(1).css("background" , "#ccc");
colorItems.eq(2).css("background" , "#18a");
colorItems.eq(3).css("background" , "#2fc");
colorItems.eq(4).css("background" , "#ff206e");
$("#sideBarToggle").click(function(){
    let colorBoxWidth = $(".color-box").outerWidth(true);

    if( $("#sideBar").css("left")=="0px")
    {
        $("#sideBar").animate({left:`-${colorBoxWidth}`} , 1500);
    }
    else
    {
        $("#sideBar").animate({left:`0px`} , 1500);
    }
})

//btnup
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
//counter
var countDownDate = new Date("Oct 06, 2021 10:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("count").innerHTML = days + "D - " + hours + "H - "
+ minutes + "M - " + seconds + "S ";
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

//slider
  var slideIndex = 0;
  showSlides();
  function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dash");
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500);
  }
