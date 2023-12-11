/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  // console.log($("body").children());
  // $("h3 + div").html();
  $("body").children().each(function(i, el) {
    console.log($("body").children().first());
    // if(el.html === $("h3 + div").html) {  
      //$("h3 + div").html()
    //   // return el.prev().before(el);
    // }
  });
});
