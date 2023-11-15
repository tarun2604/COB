document.addEventListener('DOMContentLoaded', function () {
    const sendIcon = document.querySelector('.send-icon');
    const copyIcon = document.querySelector('.copy-icon');
    const urlInput = document.getElementById('urlInput');
    const shortenedUrl = document.getElementById('shortenedUrl');


    sendIcon.addEventListener('click', function () {
        shortenedUrl.value = urlInput.value;
    });


    copyIcon.addEventListener('click', function () {
        shortenedUrl.select();
        document.execCommand('copy');
        alert('Copied the link: ' + shortenedUrl.value);
    });
});