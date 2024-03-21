document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        var body = 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message;

        Email.send({
            SecureToken: "fdea53df-51e6-45e2-87a5-800d5cb56de3",
            To: 'shmormius@gmail.com',
            From: 'daemonkerrigan@gmail.com',
            Subject: "Message from website!",
            Body: body
        }).then(function (message) {
            alert(message);
        });
    });
});
