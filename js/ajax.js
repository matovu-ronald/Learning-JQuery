$(document).ready(function () {
    $('#btn').click(function () {
        let fullName = {
            first_name: $('#firstName').val(),
            last_name: $('#lastName').val()
        }

        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/persons',
            data: fullName,
            
            success: function (data) {
                console.log(data);
                $('#output').html(data);
            },

            error: function (data) {
                console.log('Error');
            }
        })
        /* $.get('http://127.0.0.1:8000/api/persons', function (data) {
            console.log(data);
            $('#output').html(data);
        });

        $.post('http://127.0.0.1:8000/api/persons', fullName, function (data) {
            console.log(data);
            $('#output2').html(data);
        });

        $.getJSON('http://127.0.0.1:8000/api/persons', function (data) {
            console.log(data);
            $('#output').html(data.name);
        }); */
    });
});