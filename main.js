$(document).ready(function () {

})

var arrowLeft = $(".fa-angle-left");
var arrowRight = $(".fa-angle-right");
var clickedElement = $(this);


arrowLeft.click(function () {
  console.log("ahahah");
   //es variabile.show() (per i menu a tendina)
 })



 arrowRight.click(function () {
   console.log("ahahah");
   if ($(".first").hasClass("active")) {
     console.log("ehehehehehe");
     $(".first").removeClass("active").next().addClass("active")
   } else if ($(".first").siblings().hasClass("active")) {
     $(".first").siblings().removeClass("active").next().addClass("active")
   }
    //es variabile.show() (per i menu a tendina)
  })
