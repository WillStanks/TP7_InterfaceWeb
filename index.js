
$(".carte").click(function(){
    console.log("click");
    $(".carte").css('box-shadow', '');
    $(this).css('box-shadow', '5px 0px 15px 0px #000000');
 
});

$(function(){
    $("#menuAccordeon").accordion({active: 0,
        animate: {
          duration: 2000,
          down: {
            easing: "easeOutBounce",
            duration: 2000,
          },
        },
        collapsible: true,
        header: "h2",
        heightStyle: "content", 
        icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }
    });
})