document.addEventListener("DOMContentLoaded", function() {
    let arrow = document.querySelector('.arrow');

    arrow.onclick = () => {
        scroll(0, 0);
    };

    window.addEventListener('scroll', function (argument) {
        if (scrollY > 400) {
            arrow.classList.remove('hide');
        } else {
            arrow.classList.add('hide');
        }
    });
});
// script.js
document.querySelector('.cv-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const confirmDownload = confirm('Are you sure you want to download my CV?');
    
    if (confirmDownload) {
      window.location.href = this.href; // Proceed with the download
      alert('Thank you for downloading my CV!');
    } else {
      alert('Download canceled.');
    }
  });