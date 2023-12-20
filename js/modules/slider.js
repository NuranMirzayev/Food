function slides({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, inner }) {

    const slides = document.querySelectorAll(slide),
        prevIcon = document.querySelector(prevArrow),
        nextIcon = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesInner = document.querySelector(inner),
        slider = document.querySelector(container),
        width = window.getComputedStyle(slidesWrapper).width;

    let indexSlider = 1
    let offset = 0

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${indexSlider}`
    } else {
        total.textContent = slides.length
        current.textContent = indexSlider
    }

    slidesInner.style.width = 100 * slides.length + "%";
    slidesInner.style.display = "flex";
    slidesInner.style.transition = "0.5s all";
    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = width
    })

    slider.style.position = 'relative';

    const indicator = document.createElement('ol'),
        dots = [];

    indicator.classList.add('carousel-indicators')
    indicator.style.cssText = `    
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`
    slider.append(indicator)



    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('il')
        dot.setAttribute('data-slide-to', i + 1)
        dot.style.cssText = `    
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`

        if (i == 0) {
            dot.style.opacity = 1
        }
        indicator.append(dot)
        dots.push(dot)
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    function slideLength() {
        if (slides.length < 10) {
            current.textContent = `0${indexSlider}`
        } else {
            current.textContent = indexSlider
        }
    }

    function dotsForEach() {
        dots.forEach(dot => dot.style.opacity = '.5')
        dots[indexSlider - 1].style.opacity = 1
    }

    nextIcon.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;

        } else {
            offset += deleteNotDigits(width);
        }

        if (indexSlider == slides.length) {
            indexSlider = 1
        }
        else {
            indexSlider++
        }

        slideLength()
        dotsForEach()

        slidesInner.style.transform = `translateX(-${offset}px)`
    })

    prevIcon.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if (indexSlider == 1) {
            indexSlider = slides.length
        }
        else {
            indexSlider--
        }

        slideLength()
        dotsForEach()

        slidesInner.style.transform = `translateX(-${offset}px)`
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            indexSlider = slideTo
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesInner.style.transform = `translateX(-${offset}px)`

            dotsForEach()
            slideLength()
        })
    })

    // showSlider(indexSlider);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = slides.length
    // }

    // function showSlider(n) {
    //     if (n > slides.length) {
    //         indexSlider = 1
    //     }

    //     if (n < 1) {
    //         indexSlider = slides.length
    //     }

    //     slides.forEach(item =>
    //         item.style.display = 'none'
    //     )

    //     slides[indexSlider - 1].style.display = 'block'

    //     if (slides.length < 10) {
    //         current.textContent = `0${indexSlider}`
    //     } else {
    //         total.textContent = indexSlider
    //     }
    // }

    // function plusSlides(n) {
    //     showSlider(indexSlider += n)
    // }

    // prevIcon.addEventListener('click', () => {
    //     console.log('Slider Prev');
    //     plusSlides(-1)
    // })

    // nextIcon.addEventListener('click', () => {
    //     console.log('Slider Next');
    //     plusSlides(+1)
    // })
}

export default slides