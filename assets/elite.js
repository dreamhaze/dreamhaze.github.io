//	AOS

AOS.init({
  easing: 'ease-in-out-sine',
  once: true
});

//	Mmenu

var menu = new MmenuLight(
  document.querySelector('#menu'),
  'all'
);

var navigator = menu.navigation({
});

var drawer = menu.offcanvas({
});

document.querySelector('a[href="#menu"]')
  .addEventListener('click', evnt => {
    evnt.preventDefault();
    drawer.open();
  });

  
//	dl-menu 
  
  $(function() {
    $( '#dl-menu' ).dlmenu();
  });

//	шапка

function scrolled() {
  if ($(this).scrollTop() > 130) {
    $(".header-wrapper").addClass("scrolled")
  } else {
    $(".header-wrapper").removeClass("scrolled")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", scrolled);
  window.addEventListener("scroll", scrolled);
});

".teplonetHeader__mainnav"
//	кастомные селект оптионс

$('select[costum-select-options="true"]').each(function () {

  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('s-hidden');

  $this.wrap('<div class="select"></div>');

  $this.after('<div class="styledSelect"></div>');

  var $styledSelect = $this.next('div.styledSelect');
if ($this.children('option[selected]').length) { 
  $styledSelect.text($this.children('option[selected]').text());
} else { 
  $styledSelect.text($this.children('option').eq(0).text());
}

  var $list = $('<ul />', {
    'class': 'options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.styledSelect.active').each(function () {
      $(this).removeClass('active').next('ul.options').hide();
    });
    $(this).toggleClass('active').next('ul.options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    if ($(this).closest(".select").has("#page_sizes").length) {
      val = $(this).attr("rel");   
	    $("option[value=" +val+ "]").attr("selected", "selected");
      $( "#page_sizes" ).trigger( "change" );
    }
    if ($(this).closest(".select").has("#order_by").length) { 
      val = $(this).attr("rel");   
	    $("option[value=" +val+ "]").attr("selected", "selected");
      $( "#order_by" ).trigger( "change" );
    }
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
  });

  $listItems.click(function (e) {
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});
$(".dl-trigger").click(function () {
  $(".mainnav__subcatalog").toggleClass("opened-catalog");
});
$(".teplonetHeader__icon.search").click(function () {
  $(".search_widget").addClass("search_opened");
});
$(".search_widget .close").click(function () {
  $(".search_widget").removeClass("search_opened");
});
 

var sliderPortfolio = new Swiper('.portfolio__slider', {
  slidesPerView: 6,
  spaceBetween: 50,
  loop: true,   
  loopAdditionalSlides: 4,
  lazy: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.portfolio__wrap .swiper-button-next',
    prevEl: '.portfolio__wrap .swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1, 
          loop: true,   
          lazy: true,
      },
      480: {
          slidesPerView: 2, 
          loop: true,   
          lazy: true,
      },
      900: {
          slidesPerView: 3, 
          loopAdditionalSlides: 1,
          loop: true,   
          lazy: true,
      },
      1024: {
          slidesPerView: 5, 
          loop: true,  
          loopAdditionalSlides: 3,
          lazy: true,
      }
  }
});  
