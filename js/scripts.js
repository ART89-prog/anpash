$(() => {

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



      const swiper2 = new Swiper('.blog-slider', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20
            },  
          479: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      })



      const swiper3 = new Swiper('.tour-slider', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20
              },  
            479: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 40
            }          
        }
      })


      const swiper4 = new Swiper('.school-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20
              },  
            479: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1023: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
      })




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
          setTimeout(() => setHeight($(swiper.$el).find('.swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.swiper-slide'))
          })
        }
      }
    }

    littleSliders.push(new Swiper('.little_s' + i, options))
  })



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
        setTimeout(() => setHeight($(swiper.$el).find('.swiper-slide')))
      },
      resize: swiper => {
        setTimeout(() => {
          $(swiper.$el).find('.swiper-slide').height('auto')
          setHeight($(swiper.$el).find('.swiper-slide'))
        })
      }
    }
  }

  little2Sliders.push(new Swiper('.little2_s' + i, options))
})



    

    $(document).on('change', '.error', function () {

        $(this).removeClass('error');
        if ($(this).attr('class') != 'checked') { $(this).next().hide(); }
    })

    $(document).on('click', '.submit_btn', function (event) {
        event.preventDefault();
        var dataForAjax = "action=form&";
        var addressForAjax = myajax.url;
        var valid = true;
        var form = $(this).closest('form');
        $(this).closest('form').find('input:not([type=submit]),textarea').each(function (i, elem) {
            if (this.value.length < 3 && $(this).hasClass('required')) {
                valid = false;
                $(this).addClass('error');
                $(this).next().show();
            }
            if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (!pattern.test($(this).val())) {
                    valid = false;
                    $(this).addClass('error');
                    $(this).next().show();
                }
            }
            if ($(this).hasClass("checked") && !$(this).prop("checked")) {
                $(this).addClass('error');
                valid = false;
            }

            if (i > 0) {
                dataForAjax += '&';
            }
            dataForAjax += this.name + '=' + this.value;
        })

        if (!valid) {
            return false;
        }

        $.ajax({
            type: 'POST',
            data: dataForAjax,
            url: addressForAjax,
            success: function (response) {

                Fancybox.close()

                Fancybox.show([{
                    src: "#thanks",
                    type: 'inline'
                }])

                $('form').trigger("reset");
            }
        });
    });


})