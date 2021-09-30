document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('#title');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.textContent = entry.target.querySelector('h2').textContent;
            }
        })
    }, {
        root: null,
        rootMargin: `0px 0px -${window.innerHeight / 2}px 0px`,
    })

    document.querySelectorAll('.step').forEach(step => {
        observer.observe(step);
    })
})