const quoteEl = document.querySelector('.quote');

let quoteIndex = 0;

quoteEl.textContent = quotes[0];

setInterval(() => {

    quoteEl.classList.add('fade');

    setTimeout(() => {

        quoteIndex = (quoteIndex + 1) % quotes.length;

        quoteEl.textContent = quotes[quoteIndex];

        quoteEl.classList.remove('fade');

    }, 500);

}, 4000);
const themeIcon = document.querySelector('.theme-icon');

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const isLight = document.body.classList.contains('light');

    themeIcon.innerHTML = isLight
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

const hoverPreview = document.getElementById('hoverPreview');

function show(text) {
    hoverPreview.textContent = text;
    hoverPreview.style.opacity = "1";
    hoverPreview.style.filter = "blur(0px)";
}

function hide() {
    hoverPreview.style.opacity = "0";
    hoverPreview.style.filter = "blur(10px)";
    hoverPreview.textContent = "";
}

hide();

document.querySelectorAll('[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => show(el.dataset.hover));
    el.addEventListener('mouseleave', hide);
});

document.querySelectorAll('.socials a').forEach(link => {

    const icon = link.querySelector('i');
    if (!icon) return;

    let text = "";

    if (icon.classList.contains('fa-github')) text = "my code repositories";
    else if (icon.classList.contains('fa-twitter')) text = "random thoughts online";
    else if (icon.classList.contains('fa-instagram')) text = "photos & stories";
    else if (icon.classList.contains('fa-medium')) text = "long-form writing";
    else if (icon.classList.contains('fa-linkedin')) text = "professional presence";

    link.addEventListener('mouseenter', () => show(text));
    link.addEventListener('mouseleave', hide);

});