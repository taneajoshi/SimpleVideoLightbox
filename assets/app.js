//FUNCTION FOR OPEN LIGHTBOX ON BTN CLICK
const lightboxModal = document.querySelectorAll('.lightbox-modal-wrapper');
const lightboxIframe = document.querySelectorAll('.lightbox-modal-wrapper iframe');
const lightboxVideo = document.querySelectorAll('.lightbox-modal-wrapper video');
const openPopupBtn = document.querySelectorAll('.open-lightbox-btn');
const closePopupBtn = document.querySelectorAll('.close-btn');

//Lightbox popup open/close handler function
function lightBoxPopupHandler(currentBtn) {
    const currentSrc = currentBtn.getAttribute('href');
    //To avoid the url from getting stored in the browser history use this line instead of replacing the href attribute directly with the source.
    lightboxIframe[0].contentWindow.location.replace(currentSrc);
    lightboxModal[0].style.display = "block";
}

closePopupBtn[0].addEventListener('click', function () {
    lightboxModal[0].style.display = "none";
    //Removing the source from iframe after popup is closed.
    lightboxIframe[0].setAttribute('src', ' ');
});

for (let i = 0; i < openPopupBtn.length; i++) {
    openPopupBtn[i].addEventListener('click', function (e) {
        e.preventDefault();
        const currentBtn = this;
        lightBoxPopupHandler(currentBtn);
    });
}