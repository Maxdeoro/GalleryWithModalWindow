$(document).ready(function() {

    const images = document.querySelectorAll('.myImage');
    const modal = document.querySelector('.modal');
    let modalContent = modal.querySelector('.modal-content');
    console.log(images);

    images.forEach((item) => {
        item.addEventListener('click', (e) => {
            modal.style.display = 'block';
            const currentImage = e.target.getAttribute('src');
            modalContent.setAttribute('src', currentImage);
        })
    });

    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', (e) => {
        modal.style.display = 'none';
    })
});
