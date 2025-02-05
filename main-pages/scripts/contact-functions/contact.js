document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var mailtoUrl = 'mailto:shmormius@gmail.com' +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(
                'Name: ' + name + '\n' +
                'Message: ' + message
            );

        window.location.href = mailtoUrl;
    });
});
