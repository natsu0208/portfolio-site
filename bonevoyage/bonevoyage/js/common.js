$(function () {
  // メインナビセレクトビュアー
  const test = $(window).scrollTop();
  const currentTop = $('.currentPage').offset().top - test;
  const currentLeft = $('.currentPage').offset().left;

  function currentPage(fixTop) {
    $('.select').css({
      top: currentTop + $('.currentPage').height() / 2 + fixTop,
      left: currentLeft - $('.select').width() - 7,
    });
  }

  currentPage(0);

  $('.select').show();

  const showSPD = 150;
  const hideSPD = 150;

  $('.mainNav ul li a').hover(
    // hover on
    function () {
      const hTop = $(this).position().top;
      const hLeft = $(this).offset().left;

      const $this = $(this);

      if ($(this).hasClass('currentPage')) {
        return;
      } else {
        $('.select')
          .stop()
          .animate({ width: 'hide' }, hideSPD, function () {
            $('.select').css({
              top: hTop + 102,
              left: hLeft - $('.select').width() - 7,
            });
            $('.select')
              .stop()
              .animate({ width: 'show' }, showSPD, function () {
                $this.css('color', '#ec6156');
              });
          });

        $('.currentPage').css('color', '#f1f6f9');
      }
    },
    function () {
      // hover off
      if ($(this).hasClass('currentPage')) {
        return;
      } else {
        $('.select')
          .stop()
          .animate({ width: 'hide' }, hideSPD, function () {
            currentPage(0);
            $('.select')
              .stop()
              .animate({ width: 'show' }, showSPD, function () {
                $('.currentPage').css('color', '#ec6156');
              });
          });

        $(this).css('color', '#f1f6f9');
      }
    }
  );

  // SNSナビセレクトビュアー
  $('.snsSelect').css({ height: 'hide' });

  $('.sns ul li').hover(
    function () {
      const left = $(this).offset().left;
      const half = $('a', this).width() / 2;

      $(this).stop().animate({ 'padding-top': 10 }, 200);

      $('.snsSelect')
        .stop()
        .animate({ height: '0' }, hideSPD, function () {
          $(this)
            .css({ left: left + 14 + half })
            .stop()
            .animate({ height: '14' }, showSPD);
        });
    },
    function () {
      $(this).stop().animate({ 'padding-top': 0 }, 200);

      $('.snsSelect').stop().animate({ height: '0' }, hideSPD);
    }
  );

  // スクロールアロー
  $(window).on('load scroll', function () {
    const bodyHeight = $('body').height();
    let windowHeight = $(this).height();
    const scroll = $(this).scrollTop();

    $('.scrollArrow').addClass('fadeIn');

    if (bodyHeight < windowHeight + scroll) {
      $('.scrollArrow').addClass('fadeOut').removeClass('fadeIn');
    } else {
      $('.scrollArrow').addClass('fadeIn').removeClass('fadeOut');
    }
  });

  // ハンバーガーメニュー;
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
      if ($('span', this).css('background', '#4b55a1')) {
        $('span', this).css('background', '#f1f6f9');
      }
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});
