$(document).ready(function() {
    var firstName = $('#firstName').val();
    $('#output').html('My name is '+ firstName);
    console.log($('.lstItem').html());
    let a = 0;
    $('.lstItem').each(function (index, event) {
        console.log(index);
        console.log(event);
        $(event).before('Before');
        $(event).prepend(index + '.');
        $(event).after('After');
        $(event).append('.....');
        // console.log($(this).html());
        // a++;
        // $(this).html('Changed value to '+ a);
    });

    $('#output1').empty();
    $('#output2').remove();

    $('ul li:first-child').text('List First Child');
});