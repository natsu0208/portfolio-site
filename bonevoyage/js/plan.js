// ボタンをクリックで表示　スライドアップダウン
$(function () {
  // $('.button').off('click');
  // $('.text').css("display","none");
  $('.menuBtn').on('click', function () {
    $(this).toggleClass('active');
    $(this).parent().next().slideToggle(500);
  });

  //ボタンクリックで表示されたものの場所までスライドダウン
  // 768px以上の時一番下まで
  $('.menuBtn').on('click', function () {
    if($(window).width()>768){
      $('html, body').animate({ scrollTop: $('body').get(0).scrollHeight });
      // 768px以下の時には次の親要素のulまで(50pxマイナスの場所)
    }else{
      var pos=$(this).parent("div").next("ul").offset().top-50;
      console.log(pos);
      $('html, body').animate({ scrollTop: pos });
    }
  });
  console.log('toggle');
});

// planのトップページ　下からフェードイン
$(window).scroll(function () {
  // クラスを追加するwindowの位置を設定
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;


  // プランニング例　3つ順番にフェードイン
  // eachで.figureを順番に処理
  $('.figure').each(function (i) {
    if (effectPos > $(this).offset().top) {
      var that = this;

      // 0.2s毎にずれて表示
      setTimeout(function () {
        $(that).addClass('fadein');
      }, 200 * i);
    }
  });
});

// ヘッダーの色変化
$(function () {
  $(window).on('load scroll', function () {
    const scroll = $(this).scrollTop() + 10;
    const trigger1 = $('.price').offset().top;
    const trigger2 = trigger1 + $('.price').height();

    const $sns = $('.sns li a, .sns span');
    const $snsSelect = $('.snsSelect');

    if ($(this).width() < 1500) {
    if (trigger1 <= scroll && scroll < trigger2) {
      $sns.addClass('changeFontColor');
      $snsSelect.addClass('changeBgColor');
    } else {
      $sns.removeClass('changeFontColor');
      $snsSelect.removeClass('changeBgColor');
    }
    } else {
      $sns.removeClass('changeFontColor');
      $snsSelect.removeClass('changeBgColor');
    }
    
    const $logoColor = $('.cls-1');
    const $hamburger = $('.hamburger span');

    if ($(this).width() < 768) {
      if (trigger1 <= scroll && scroll < trigger2) {
        $logoColor.css('fill', '#4b55a1');
        $hamburger.css('background', '#4b55a1');
      } else {
        $logoColor.css('fill', '#f1f6f9');
        $hamburger.css('background', '#f1f6f9');
      }
    } else {
      $logoColor.css('fill', '#f1f6f9');
    }
  });
});

