
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-acc");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


var sliderProducts = new Swiper('#gallery__slider', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    lazy: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
        },
    }
});

var slider0 = new Swiper('#tab-0', {
    slidesPerView: 4,
    loop: false,
    lazy: false,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: false,
        },
    }
});
 
var slider1 = new Swiper('#tab-1', {
  slidesPerView: 4,
  loop: false,
  lazy: false,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: false,
      },
      460: {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: false,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 10,
          loop: false,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 10,
          loop: false,
      },
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
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
