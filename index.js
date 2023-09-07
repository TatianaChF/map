window.onload = pointHandler;

function pointHandler() {
    const open = document.getElementById("open");
    const close = document.getElementById("closed");

    if (close.style.display === 'block') {
        close.style.display = 'none';
        open.style.display = 'block';
    }
    else {
        open.style.display = 'none';
        close.style.display = 'block';
    }
}