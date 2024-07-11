function updateContent(section) {
    document.querySelectorAll('div[id]').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    updateContent('home');
});
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(link.innerText.toLowerCase());
    });
});
document.querySelector('#contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Form submitted!');
    } else {
        alert('Please fill in all fields.');
    }
});