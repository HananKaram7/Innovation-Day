
  AOS.init();

// popUp

var lightboxcontainer = document.getElementById("lightboxcontainer");
var lightboxitem = document.getElementById("lightboxitem");
var closeIcon = document.getElementById("close");
var cb=Array.from(document.getElementsByClassName("c-b"));
var currentIndex = 0;

for(var i=0;i<cb.length;i++)
{
    cb[i].addEventListener("click" , openLightBox)
}

function openLightBox(eventInfo)
{
    lightboxcontainer.style.display ="flex";
}
// closeIcon.addEventListener("click" , closeLightBox);
function closeLightBox()
{
    lightboxcontainer.style.display ="none";
}
//btnUp
let wkOffset = $("#wk").offset().top;

$(window).scroll(function()
{
    let wScroll = $(window).scrollTop();
    if ( wScroll > wkOffset - 20)
    {
        $("#main-nav").css("backgroundColor" , "rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#main-nav").css("backgroundColor" ,"transparent");
        $("#btnUp").fadeOut(500);
    }
});

$("#btnUp").click(()=>{
    $("html,body").animate({scrollTop:'0'} ,2000 )
});
