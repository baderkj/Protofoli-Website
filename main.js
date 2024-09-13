document.addEventListener("DOMContentLoaded", function() {
    let arrow = document.querySelector('.arrow');

    arrow.onclick = () => {
        scroll(0, 0);
    };

    window.addEventListener('scroll', function ll(argument) {
        if (scrollY > 400) {
            arrow.classList.remove('hide');
        } else {
            arrow.classList.add('hide');
        }
    });
});