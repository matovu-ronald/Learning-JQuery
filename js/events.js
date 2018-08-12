$(document).ready(function () {

    /* $('.lstItem').hover(function () {
        console.log($(this).html());
    }); */
    $('.lstItem').on({
        click: function () {
            $('#firstName').val($(this).html());
        },

        mouseenter: function () {
            $('#output1').html($(this).html());
        },

        mouseleave: function () {
            $('#output2').html($(this).html());
        }
    })


});