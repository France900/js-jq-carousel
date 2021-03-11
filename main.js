$(document).ready(function () {

})

var arrowLeft = $(".fa-angle-left");
var arrowRight = $(".fa-angle-right");
// var clickedElement = $(this);

 arrowLeft.click(function () {
   var activeImage = $(".active");
   activeImage.removeClass("active").prev().addClass('active');
   if (activeImage.hasClass("first") && arrowRight.click(function (){})) {
     $(".first").removeClass("active");
     $(".last").addClass("active");
   }
 })

 arrowRight.click(function () {
   var activeImage = $(".active");
   activeImage.removeClass("active").next().addClass('active');
   if (activeImage.hasClass("last") && arrowRight.click(function (){})) {
     $(".last").removeClass("active");
     $(".first").addClass("active");
   }
 })




 
//  arrowRight.click(function () {
//    var activeImage = $(".active");
//    activeImage.removeClass("active");
//    if ($("img.active").hasClass("last")) {
//      $(".first").addClass("active");
//      // $(".last").removeClass("active");
//    } else {
//      $("img.active").next("img").addClass("active")
//    }
//     //es variabile.show() (per i menu a tendina)
// })








//  arrowRight.click(function () {
//    console.log("ahahah");
//    if ($(".first").hasClass("active")) {
//      console.log("ehehehehehe");
//      $(".first").removeClass("active").next().addClass("active")
//    } else {
//      var ciccio = $(".first").next().hasClass("active").removeClass("active")
//      ciccio.next().addClass("active");
//    }
//     //es variabile.show() (per i menu a tendina)
// })
// var activeImage = $('.active');
