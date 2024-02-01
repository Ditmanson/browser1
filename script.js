document.addEventListener('DOMContentLoaded', function() {
    function goHome() {
        document.getElementById("myWebview").loadURL("https://www.startpage.com");
    }
    document.getElementById('homeButton').addEventListener('click', goHome);

    function goBack() {
        document.getElementById("myWebview").goBack();
    }
    document.getElementById('backButton').addEventListener('click', goBack);

    function goForward() {
        document.getElementById("myWebview").goForward();
    }
    document.getElementById('forwardButton').addEventListener('click', goForward);

    function goToURL() {
        var url = document.querySelector('.url').value;
        document.getElementById("myWebview").loadURL(url);
    }
    document.getElementById('url').addEventListener('click', goToURL);
});