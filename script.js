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
    alert('Form submitted!');
});