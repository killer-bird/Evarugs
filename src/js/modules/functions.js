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

export function popup() {
    const popup = document.querySelector('.popup')
    const wrapper = document.querySelector('.popup__wrapper')
    const btn = document.querySelector('.order__btn')
    const form = document.querySelector('.popup__form')

    btn.addEventListener('pointerdown', (e) => {
        e.preventDefault()
        wrapper.classList.add('popup__wrapper_active')
        document.body.style.overflow = 'hidden'
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        wrapper.classList.remove('popup__wrapper_active')
        document.body.style.overflow = 'auto'
    })

    wrapper.addEventListener('pointerdown', function (e) {
        if(e.target === e.currentTarget || e.target === popup) {
            wrapper.classList.remove('popup__wrapper_active')
            document.body.style.overflow = 'auto'
        }
    })

    
}