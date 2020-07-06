// Пересчет суммы корзины
$(function(){
  EventBus.subscribe('update_items:insales:cart', function (data) {
    // if (Site.template != 'cart') {
    //   return false;
    // }
    //
    // console.log('cart: ', data);
    //  console.log(data.total_price);
    $('.js-shopcart-total-summ').html(Shop.money.format(data.total_price));
  });

  // пересчет актуальной цены за товар и общей стоимости позиции
  EventBus.subscribe('update_variant:insales:item', function (data) {
    // if (Site.template != 'cart') {
    //   return false;
    // }

    var $item = data.action.product;
    var $price = $item.find('.js-item-price');
    var $total = $item.find('.js-item-total-price');
    var total = data.action.price * data.action.quantity.current;

    $price.html(Shop.money.format(data.action.price));
    $total.html(Shop.money.format(total));
  });

  // Удаляем позицию
  EventBus.subscribe('delete_items:insales:cart', function (data) {


    var $button = data.action.button;
    var $cartItem = $button.parents('.cart-item:first');


    $cartItem
      .slideUp(300, function () {
        $(this).remove();

    if (Site.template == 'cart') {
      var $emptyMessage = $('.js-cart-empty');
      var $cartForm = $('[data-cart-form]');
        if (data.order_lines.length == 0) {
          $cartForm
            .addClass('hidden');
          $emptyMessage
            .removeClass('hidden');
        }
      }
    });
  });

  // Выводим список применившихся скидок
  EventBus.subscribe('update_items:insales:cart', function (data) {
    if (Site.template != 'cart') {
      return false;
    }

    // console.log('>>', data);
    $('.js-discount-comment-list').html(Template.render(data, 'cart-discounts'));
  })

  // widget
  EventBus.subscribe('update_items:insales:cart', function (data) {
  if ( data.items_count > 0) {
    $('.js-shopcart-widget-count').show();
    $('.js-shopcart-widget-count').html(_.round(data.items_count, 3));
  } else {
    $('.js-shopcart-widget-count').hide();
  }
    $('.js-shopcart-widget-amount').html(Shop.money.format(data.total_price));

    if (data.order_lines.length == 0) {
      $('.js-cart-widget-empty').addClass('hidden');
      $('.js-cart-empty').removeClass('hidden');
      $('.cart-widget-dropdown').addClass('empty-cart');
    }
    else {
      $('.js-cart-widget-empty').removeClass('hidden');
      $('.js-cart-empty').addClass('hidden');
      $('.cart-widget-dropdown').removeClass('empty-cart');
    }
  });


  // Показываем при наведении мини-корзину
  $('.js-widget-dropdown').hover(
    function(){
      $('.cart-widget-dropdown').removeClass('hidden');
      setTimeout(function () {
        $('.cart-widget-dropdown').css('opacity','1')
      }, 20);
    },
    function(){
      $('.cart-widget-dropdown').addClass('hidden').css('opacity','0');
    }
  );
});


var sliderProducts = new Swiper('#add_products', {
  slidesPerView: 6,
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
        loop: true,
    },
    420: {
        slidesPerView: 1, 
        loop: true,
    }, 
    768: {
        slidesPerView: 2, 
        loop: true,
    }, 
    1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
    },
    1200: {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
    },
  }
});
