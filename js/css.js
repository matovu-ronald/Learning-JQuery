$(document).ready(function () {
    $('#home').on({
        // $(this).css('color', 'blue');
        mouseenter: function (e) {

            $(this).addClass('blue');
            $(this).removeClass('red');
        },

        mouseleave: function (e) {
            $(this).addClass('red');
            $(this).removeClass('blue');
        }
    });
});