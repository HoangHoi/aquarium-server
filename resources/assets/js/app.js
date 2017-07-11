
require('./bootstrap');

$('#send').on('click', function () {
    let message = $('#input').val();
    if (message != '') {
        $.ajax({
            url: 'comment',
            type: 'POST',
            dataType: 'json',
            data: {message: message},
        });
    }
});

Echo.channel('chat-room')
    .listen('ChatEvent', (e) => {
        console.log(e);
        $('#content').append(`<div class="well">${e.message}</div>`);
    });
