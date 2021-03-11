$(document).ready(function () {
  slider()
})

var arrowLeft = $(".fa-angle-left");
var arrowRight = $(".fa-angle-right");
// var clickedElement = $(this);

function slider() {
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
}



// mia prima idea
//
// arrowRight.click(function () {
//   if ($(".first").hasClass("active")) {
//     $(".first").removeClass("active").next().addClass("active")
//   } else {
//     $(".first").next().hasClass("active").removeClass("active").next().addClass("active");
//   }
// })


// mia prima idea funziona quasi
//
// arrowRight.click(function () {
//   if ($(".first").hasClass("active")) {
//     $(".first").removeClass("active").next().addClass("active")
//   } else if (!$(".first").hasClass("active")) {
//     $(".active").removeClass("active").next().addClass("active");
//   } else if ($(".last").hasClass("active")) {
//     console.log(ahahahahaha);
//     $(".last").removeClass("active");
//     $(".first").addClass("active");
//   }
// })
//
//
// arrowLeft.click(function () {
//   if ($(".last").hasClass("active")) {
//     $(".first").removeClass("active").next().addClass("active")
//   } else if (!$(".first").hasClass("active")) {
//     $(".active").removeClass("active").next().addClass("active");
//   } else if ($(".last").hasClass("active")) {
//     console.log(ahahahahaha);
//     $(".last").removeClass("active");
//     $(".first").addClass("active");
//   }
// })
