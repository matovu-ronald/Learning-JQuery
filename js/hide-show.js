$(document).ready(function () {
    $('.listItem').click(function () {
        // $(this).hide();
        $(this).toggleClass('red');
        let listItemIndex = $(this).parent().children().index($(this));
        // let wrapper = $('#wrapper').children().eq(listItemIndex).toggle();
        /* $('#wrapper').children().eq(listItemIndex).fadeToggle(3000, function () {
            $(this).toggleClass('blue');
        }); */
        let secTop = $('#wrapper').children().eq(listItemIndex).offset().top;
        console.log(secTop);
        $('html, body').animate({
            scrollTop: secTop
        }, 1000);
        // $('#wrapper').children().eq(listItemIndex).slideToggle('slow');

    });

    $('#output').click(function () {
        $(this).animate({
            opacity: 0.5,
            left: "+=100px",  
        }, 1000, function () {
            console.log('ready');
        })
    })
});