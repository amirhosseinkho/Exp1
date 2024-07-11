function updateContent(newContent) {
    document.getElementById('content').innerText = newContent;
}
document.addEventListener('DOMContentLoaded', () => {
    updateContent('This is a simple static frontend project.');
});
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = 'You clicked on ' + link.innerText;
        updateContent(text);
    });
});