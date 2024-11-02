function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

window.onload = function() {
    showPage('dashboard');
};
