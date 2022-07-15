import Swiper from 'swiper';
export function isWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    isWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });




export function slider() {
    new Swiper('.slider', {
        slidesPerView: 2.7,
        spaceBetween: 70,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            1024: {
                slidesPerView: 1.5,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 2.3,
                spaceBetween: 40
            },
            1400: {
                slidesPerView: 2.3,
                spaceBetween: 70,
            }
        }
    
    })
}