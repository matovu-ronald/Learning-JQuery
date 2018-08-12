/* $(window).resize(function () {
    $('#output').html('Window Width = '+ $(window).width() + ' ' + 'Window Height = '+ $(window).height());
    $('#output1').html('Document Width = '+ $(document).width() + ' ' + 'Document Height = '+ $(document).height());
}); */

$(document).ready(function () {
    $('#myform').submit(function (e) {
        event.preventDefault();

        $('#myform').find('input').each(function (e) {
            console.log($(this).parent());
            console.log($(this).parents());
            $(this).parent().css('background-color', 'red');
        });
    });

    console.dir($('#home').nextAll());
    
});