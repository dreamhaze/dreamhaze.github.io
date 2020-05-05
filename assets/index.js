// Прибиваем меню при скролле

(function () {
  $(window).scroll(function () {
    if ((window.pageYOffset > 250) && (window.innerWidth <= 768)) {
      $('.js-top-panel-fixed').addClass('fixed');
      $('.top-panel-wrapper').addClass('z-index');
    }
    else {
      $('.js-top-panel-fixed').removeClass('fixed');
      $('top-panel-wrapper').removeClass('z-index');
    }
  });

  $('.js-arrow-up').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    $(this).blur();
  });
})();
  
//	Слайдеры на главной

var swiperMain = new Swiper('.promo-slider-elite', {  
  loop: true,   
  parallax: true, 
  autoplay: {
    delay: 5000,
  }, 
  navigation: {
    nextEl: '.promo__wrap .swiper-button-next',
    prevEl: '.promo__wrap .swiper-button-prev',
  },
  pagination: {
    el: '.promo__wrap .swiper-pagination',
    clickable: true,
  }
});

var tabSlider = new Swiper('#tabSlider', {
  slidesPerView: 'auto',
  loop: false,
  touchRatio: 0.2,
  slideToClickedSlide: false
});

var slider0 = new Swiper('#tab-0', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false, 
  navigation: {
    nextEl: '#tab-0 .swiper-button-next',
    prevEl: '#tab-0 .swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      900: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: false,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: false,
      }
  }
});

var slider1 = new Swiper('#tab-1', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '#tab-0 .swiper-button-next',
    prevEl: '#tab-0 .swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      900: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: false,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: false,
      }
  }
});

var slider2 = new Swiper('#tab-2', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false, 
  navigation: {
    nextEl: '#tab-0 .swiper-button-next',
    prevEl: '#tab-0 .swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
      },
      900: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: false,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: false,
      }
  }
}); 


//	Табы

document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
        
        slider0.update();
        slider1.update();
        slider2.update(); 
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
 
