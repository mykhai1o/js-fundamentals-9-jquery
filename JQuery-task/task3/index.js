/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
    
  
  function changePlace(elem) {
    return elem.previousElementSibling;
    // console.log(elem);
  }
  
  $("h3 + div").each(function(i, el) {
    console.log(changePlace(el));
    // changePlace(el);
  });
  
});
