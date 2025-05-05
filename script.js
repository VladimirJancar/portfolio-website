document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".typewriter");
    const words = "> Welcome to my portfolio";
    let i = 0;

    function typeWriter() {
        if (i < words.length) {
            text.textContent += words.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);
});
