
// スクロールしていくとフェードインする
$(function () {
  $(window).on('load scroll', function () {
    $('.animation').each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass('active');
      }
    });
  });
});

// レスポンシブ　ボタンクリックすると表示される
$(window).on('resize load', function () {
  $('.button').off('click');
  if (window.matchMedia('(max-width: 768px)').matches) {
    /* ウィンドウサイズ768以下の処理を記述 */
    console.log('ok');
    $('.text').css('display', 'none');
    $('.button').on('click', function () {
      $(this).next().slideToggle(500);
    });
    console.log('toggle');
  } else if (window.matchMedia('(min-width:769px)').matches) {
    /* ウィンドウサイズ769以上の処理を記述 */
    $('.text').css('display', 'block');
  }
});

// レスポンシブスライドショー　横からスクロール
$(function () {
  var dir = -1; // スクロールの方向
  var interval = 5000; // スクロールのインターバル
  var duration = 1500; // スクロールのスピード
  var timer; // タイマー用の変数
  $('#slide ul').prepend($('#slide li:last-child')); // リストの順番を変更(3番目を1番目にする)
  $('#slide ul').css('left', "-100%"); // リストの位置を変更(画像1枚分ずらす)

  // タイマーを実行する
  timer = setInterval(slideTimer, interval); // 3000ミリ秒(変数)intervalごとにslideTimer()関数を実行

  // 一定時間ごとにスライドを移動させる
  function slideTimer() {
    // slideTimer()関数

    // スクロール方向の判断
    if (dir == -1) {
      // スクロール完了後はまた左へ自動スクロールさせるため変数dirの値を-1に戻しておく

      $('#slide ul').animate({ left: '-=100%' }, duration, function () {
        // 画像1枚分左へスクロール
        $(this).append($('#slide li:first-child')); // リストの順番を変更
        $(this).css('left', "-100%"); // リストの位置を変更
      });
    } else {
      // 画像1枚分を右にスクロール
      $('#slide ul').animate({ left: '+=100%' }, duration, function () {
        $(this).prepend($('#slide li:last-child'));
        $(this).css('left', "100%");
        dir = -1;
      });
    }
  }
  // 前へ戻るボタン
  $('#prevBtn').click(function () {
    // スクロール方向の切り替え(右)
    dir = 1;
    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer(); // 初回の関数実行
  });
  // 次へ進むボタン
  $('#nextBtn').click(function () {
    // スクロール方向の切り替え(左)
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });
});

// ヘッダーの色変化
$(function () {
  $(window).on('load scroll', function () {
    const scroll = $(this).scrollTop() + 10;
    const trigger1 = $('.change').offset().top;
    const trigger2 = trigger1 + $('.change').height();

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

