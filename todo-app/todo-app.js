const todoSelect = document.querySelectorAll('p')

todoSelect.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})