document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});
