"use strict"

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
// var contents=$("#mahomesFact").html();
// alert(contents);
// $(".mahomes").css("border","1px solid #F00")
// $(document).ready(function() {
//
//     $("li").css("font-size", "20px")
//
//     $("li, p, h1").css("color", "red")
//
//     var contents = $("h1").html()
// });
//alert(contents)

$("h1").click(
    function() {
        $(this).css('background-color', '#FF0');
    }
)
$("p").dblclick(
    function(){
        $(this).css("font-size", "18px")
    }
)

$("li").hover(
    function(){
        $(this).css("color", "red")
    },
    function(){
    $(this).css("color", "black")
}
)




