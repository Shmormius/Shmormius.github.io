document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Get form values
        var name = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Construct the mailto URL
        var mailtoUrl = 'mailto:shmormius@gmail.com' +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(
                'Name: ' + name + '\n' +
                'Message: ' + message
            );

        // Open the user's email client
        window.location.href = mailtoUrl;
    });
});
