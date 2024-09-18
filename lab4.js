document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
});


let isBlue = true;
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = isBlue ? 'green' : 'blue';
    isBlue = !isBlue;
});


document.getElementById('textTestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid!");
    }
});


document.getElementById('addTextBtn').addEventListener('click', function() {
    const title = document.getElementById('page-title');
    title.textContent += " Add Text";
});