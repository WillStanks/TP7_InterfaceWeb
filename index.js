
$(".carte").click(function(){
    $(".carte").css('box-shadow', '');
    $(this).css('box-shadow', '5px 0px 15px 0px #000000');
 
});

/*--------------------MENU ACCORDEON--------------------*/

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

/*--------------------GALLERIE--------------------*/

$(document).ready(function() {gallerie();});

function gallerie(){
  $(function(){

    $('.mini').css('border', '#05386b solid 5px');
    $('#grande-img').attr('src', $('.imageEmployee img:first').attr('src'));
    $('.imageEmployee img:first').css('border', '#5cdb95 solid 5px');

    $('.mini').click(function () {
      // Remettre les autres miniatures à un fond blanc.
      $('.imageEmployee .mini').css('border', '#05386b solid 5px');


      $(this).css('border', '#5cdb95 solid 5px');
      var nom = $(this).attr('src');

      $('#grande-img').fadeOut(2000, function () {

        $('#grande-img').attr('src', nom);
        $('#grande-img').fadeIn(2000);
      });
    });
  });
}