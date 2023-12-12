$(document).ready(function () {
    let checkedBoxes = 0;
    $('input[type="checkbox"]').on("click", function() {
        if($(this).prop("checked") ){
            checkedBoxes += 1;
            if(checkedBoxes >= 3) {
                $('input[type="checkbox"]').attr("disabled", true);
            };
        } 
    });
});