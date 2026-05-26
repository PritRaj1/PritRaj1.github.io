document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.card').forEach((section) => {
        const cats = section.querySelectorAll('.cat');
        if (cats.length <= 1) return;
        let i = 0;
        const delay = 600 + Math.random() * 400;
        setInterval(() => {
            cats.forEach((c) => c.classList.remove('active'));
            i = (i + 1) % cats.length;
            cats[i].classList.add('active');
        }, delay);
    });
});
