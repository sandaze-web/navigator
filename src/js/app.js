//=include ./helpers/elementsNodeList.js
//=include ./helpers/toggleBodyLock.js
//=include ./modules/index.js

document.addEventListener('DOMContentLoaded', function () {
    $('a[href^="#"]').on("click", function (e) {
        let anchor = $(this);
        let offsetAnchor = 220
        if(window.innerWidth <= 768) offsetAnchor = 100
        let offset = document.documentElement.clientHeight * offsetAnchor / 929
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top - offset
        }, 700);
        e.preventDefault();
    });
    if(document.querySelector('#brands-slider')) {
        $('#brands-slider').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '#brands-prev',
            nextArrow: '#brands-next',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                        autoplaySpeed: 1500,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    if(document.querySelector('#partners-slider')) {
        $('#partners-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '#partners-prev',
            nextArrow: '#partners-next',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 1500,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    if(document.querySelector('.portfolio-slider')) {
        $('.portfolio-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '#portfolio-prev',
            nextArrow: '#portfolio-next',
            dots: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    //обработка форм
    let forms = document.querySelectorAll('form')
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault()
            e.target.reset()
            document.querySelector('.thanks').classList.add('_is-open')
        })
    })

    if(document.querySelector('.map-overflow')) {
        document.querySelector('.map-overflow').addEventListener('click', () => {
            document.querySelector('.map-overflow').style.display = 'none'
        })

        window.addEventListener('scroll', () => {
            document.querySelector('.map-overflow').style.display = 'block'
        })
        document.querySelector('.map-overflow').addEventListener('touchmove', () => {
            document.querySelector('.map-overflow').style.display = 'none'
        })
    }

    if(document.querySelector('.header-burger')) {
        let burger = document.querySelector('.header-burger'),
            headerNav = document.querySelector('.header-nav'),
            blackout = document.querySelector('.blackout'),
            links = document.querySelectorAll('.header-nav__item')

        burger.addEventListener('click', () => {
            headerNav.classList.toggle('active')
            blackout.classList.toggle('active')
            toggleBodyLock(headerNav.classList.contains('active'))
        })
        blackout.addEventListener('click', () => {
            headerNav.classList.toggle('active')
            blackout.classList.toggle('active')
            toggleBodyLock(headerNav.classList.contains('active'))
        })

        links.forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('active')
                blackout.classList.remove('active')
                toggleBodyLock(headerNav.classList.contains('active'))
            })
        })
    }

})

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

togglePopupWindows()
// =======================================================================================================
