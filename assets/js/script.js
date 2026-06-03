// =========================
// QUOTES
// =========================

const quoteElement =
    document.querySelector('.quote');

// Only run if quote exists
if (quoteElement) {

    const quotes = [

        "do what you can, with what you have, where you are.",

        "small steps still move you forward.",

        "build quietly.",

        "stay curious.",

        "the internet rewards consistency.",

        "make things that feel human."

    ];

    let quoteIndex = 0;

    function changeQuote() {

        quoteElement.style.opacity = "0";

        setTimeout(() => {

            quoteIndex =
                (quoteIndex + 1) % quotes.length;

            quoteElement.textContent =
                quotes[quoteIndex];

            quoteElement.style.opacity = "1";

        }, 300);

    }

    setInterval(changeQuote, 4000);

}


// =========================
// THEME TOGGLE
// =========================

const themeIcon = document.querySelector('.theme-icon');
if (themeIcon) {
    // Load saved theme 
    if (localStorage.getItem('theme') === 'light') {

        document.body.classList.add('light');
        themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle theme
    themeIcon.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        localStorage.setItem(
            'theme',
            isLight ? 'light' : 'dark'
        );

        themeIcon.innerHTML = isLight
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });
}

// =========================
// HOVER PREVIEW
// =========================

const hoverPreview = document.getElementById('hoverPreview');

function show(text) {

    if (!hoverPreview) return;

    hoverPreview.textContent = text;

    hoverPreview.style.opacity = "1";

    hoverPreview.style.filter = "blur(0px)";
}

function hide() {

    if (!hoverPreview) return;

    hoverPreview.style.opacity = "0";

    hoverPreview.style.filter = "blur(10px)";

    hoverPreview.textContent = "";
}

// Only run if element exists
if (hoverPreview) {

    hide();

    document.querySelectorAll('[data-hover]').forEach(el => {

        el.addEventListener('mouseenter', () => show(el.dataset.hover));

        el.addEventListener('mouseleave', hide);

    });

}

// =========================
// SOCIAL HOVER TEXT
// =========================

document.querySelectorAll('.socials a').forEach(link => {

    const icon = link.querySelector('i');

    if (!icon) return;

    let text = "";

    if (icon.classList.contains('fa-github'))
        text = "my code repositories";

    else if (icon.classList.contains('fa-twitter'))
        text = "random thoughts online";

    else if (icon.classList.contains('fa-instagram'))
        text = "photos & stories";

    else if (icon.classList.contains('fa-medium'))
        text = "long-form writing";

    else if (icon.classList.contains('fa-linkedin'))
        text = "professional presence";

    link.addEventListener('mouseenter', () => show(text));

    link.addEventListener('mouseleave', hide);

});