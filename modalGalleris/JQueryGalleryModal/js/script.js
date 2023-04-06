$(document).ready(function() {

    const images = $('.myImage'),
          modal = $('.modal'),
          closeBtn = $('.close');
    let modalContent = $('.modal-content');

    $(images).each(function() {
        $(images).on('click', function(e) {
            // $(modal).css('display', 'block');
            $(modal).show(1000);
            $(e.target).css('opacity', '0.5');
            const currentImage = $(e.target).attr('src');
            console.log(currentImage);
            $(modalContent).attr('src', currentImage);
        });
    });

    $(closeBtn).on('click', () => {
        $(modal).hide(1000);
    });

});
