$(document).ready(function () {
    console.log("Hello world");
  
    $(".row").click(function () {
      $(this).find(".content").slideToggle("fast");
    });
  
    $(".overlay").click(function () {
      $(this).addClass("hide");
    });
  });
  