function updateContent(newContent) {
    document.getElementById('content').innerText = newContent;
}
document.addEventListener('DOMContentLoaded', () => {
    updateContent('This is a simple static frontend project.');
});