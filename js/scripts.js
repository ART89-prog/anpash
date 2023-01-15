$(() => {


    	// Ширина окна для ресайза
	    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


    // Моб. меню
    $('header .mob_menu_btn').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').addClass('active')
        $('body').addClass('menu_open')
        $('header .menu').addClass('show')
        $('.overlay').fadeIn(300)
    })

    $('header .close_btn, header .menu .item a, .overlay').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').removeClass('active')
        $('body').removeClass('menu_open')
        $('header .menu').removeClass('show')
        $('.overlay').fadeOut(300)
    })



	$('body').on('click', '.modal_link', function (e) {
	    e.preventDefault()

	    $.fancybox.close(true)

	    $.fancybox.open({
	        src: $(this).data('content'),
	        type: 'inline',
	        touch: false
	    })
	})



    // Большой слайдер

    const swiper = new Swiper('.slider-big', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }    
      })




      // Блог слайдер

      const blogSliders = [],
      blog = document.querySelectorAll('.blog-slider')
  
      blog.forEach(function (el, i) {
      el.classList.add('blog_s' + i)
  
      let options = {
        loop: false,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2'
        },
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 3
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.blog .swiper-slide')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.blog .swiper-slide').height('auto')
              setHeight($(swiper.$el).find('.blog .swiper-slide'))
            })
          }
        }
      }
  
      blogSliders.push(new Swiper('.blog_s' + i, options))
    })



    // Путешествия слайдер

      const tourSliders = [],
      tour = document.querySelectorAll('.tour-slider')
  
      tour.forEach(function (el, i) {
      el.classList.add('tour_s' + i)
  
      let options = {
        loop: false,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3'
        },
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 3
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.tour .swiper-slide')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.tour .swiper-slide').height('auto')
              setHeight($(swiper.$el).find('.tour .swiper-slide'))
            })
          }
        }
      }
  
      tourSliders.push(new Swiper('.tour_s' + i, options))
    })


    // Школа инструкторов слайдер    

      const schoolSliders = [],
      school = document.querySelectorAll('.school-slider')
  
      school.forEach(function (el, i) {
      el.classList.add('school_s' + i)
  
      let options = {
        loop: false,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4'
        },
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 0,
            slidesPerView: 2
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 4
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.school .swiper-slide')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.school .swiper-slide').height('auto')
              setHeight($(swiper.$el).find('.school .swiper-slide'))
            })
          }
        }
      }
  
      schoolSliders.push(new Swiper('.school_s' + i, options))
    })



    // Похожие материалы слайдер

      const materialsSliders = [],
      materials = document.querySelectorAll('.materials-slider')
  
      materials.forEach(function (el, i) {
      el.classList.add('materials_s' + i)
  
      let options = {
        loop: false,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        navigation: {
          nextEl: '.swiper-button-next6',
          prevEl: '.swiper-button-prev6'
        },
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
        },
        breakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 24,
            slidesPerView: 2
          },
          768: {
            spaceBetween: 24,
            slidesPerView: 3
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 3
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.materials .blog_item')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.materials .blog_item').height('auto')
              setHeight($(swiper.$el).find('.materials .blog_item'))
            })
          }
        }
      }
  
      materialsSliders.push(new Swiper('.materials_s' + i, options))
    })



    // Первый маленький слайдер со страницы поста

    const littleSliders = [],
    little = document.querySelectorAll('.slider-little')

    little.forEach(function (el, i) {
    el.classList.add('little_s' + i)

    let options = {
      loop: false,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next7',
        prevEl: '.swiper-button-prev7'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 'auto'
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 'auto'
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1280: {
          spaceBetween: 0,
          slidesPerView: 1
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.slider-little .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.slider-little .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.slider-little .swiper-slide'))
          })
        }
      }
    }

    littleSliders.push(new Swiper('.little_s' + i, options))
  })



// Второй маленький слайдер со страницы поста

  const little2Sliders = [],
  little2 = document.querySelectorAll('.slider-little2')

  little2.forEach(function (el, i) {
  el.classList.add('little2_s' + i)

  let options = {
    loop: false,
    speed: 500,
    watchSlidesProgress: true,
    slideActiveClass: 'active',
    slideVisibleClass: 'visible',
    navigation: {
      nextEl: '.swiper-button-next8',
      prevEl: '.swiper-button-prev8'
    },
    preloadImages: false,
    lazy: {
      enabled: true,
      checkInView: true,
      loadOnTransitionStart: true,
      loadPrevNext: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 'auto'
      },
      480: {
        spaceBetween: 0,
        slidesPerView: 'auto'
      },
      768: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      1280: {
        spaceBetween: 0,
        slidesPerView: 1
      }
    },
    on: {
      init: swiper => {
        setTimeout(() => setHeight($(swiper.$el).find('.slider-little2')))
      },
      resize: swiper => {
        setTimeout(() => {
          $(swiper.$el).find('.slider-little2').height('auto')
          setHeight($(swiper.$el).find('.slider-little2'))
        })
      }
    }
  }

  little2Sliders.push(new Swiper('.little2_s' + i, options))
})



    

$(window).on('resize', () => {
	let windowW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Моб. версия
		if (!firstResize) {
			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

			firstResize = true
		} else {
			firstResize = false
		}


		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Фикс. моб. шапка
		mobHeaderInit = false
		$('.mob_header_wrap').height('auto')

		setTimeout(() => {
			mobHeaderInit = true
			mobHeaderHeight = $('.mob_header').outerHeight()

			$('.mob_header_wrap').height(mobHeaderHeight)

			mobHeaderInit && $(window).scrollTop() > 0
				? $('.mob_header').addClass('fixed')
				: $('.mob_header').removeClass('fixed')
		}, 100)


		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	}
})


})