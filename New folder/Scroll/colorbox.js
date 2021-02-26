let colorItems = $(".color-item")
//تعريف المتغيير

colorItems.click(function(){
    let myColor = $(this).css("backgroundColor");
    $(".change , .icon a , a , #services h4::after ").css("color" , myColor);
    //هنا هاتدي الحاجات اللي عاوزه لونها يتغير سواء بال# او بال .

})
//هنا الالوان اللي انتي بعتهالي 
colorItems.eq(0).css("background" , "#adabaa");
colorItems.eq(1).css("background" , "#e8465a");
colorItems.eq(2).css("background" , "#a83341");
colorItems.eq(3).css("background" , "#172422");
colorItems.eq(4).css("background" , "#ff206e");

// دي الfun اللي بتخليها تشتغل 
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