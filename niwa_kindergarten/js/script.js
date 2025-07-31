$(function () {

$(window).on('load scroll',function (){
		$('.fade').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});

    $(window).scroll(function() {

    $('.fadein1').css({
      'opacity': '0',
      'transform': 'translateX(-10px)'
    });

    var scroll = $(window).scrollTop();

    var windowHeight = $(window).height();

    $('.fadein1').each(function() {
      var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();

      if (scroll > target - height){
        $(this).css({
          'opacity': '1',
          'transform': 'translateX(0)'
        });
      }
    });

    });

    $(window).scroll(function() {

    $('.fadein2').css({
      'opacity': '0',
      'transform': 'translateX(10px)'
    });
    
    var scroll = $(window).scrollTop();

    var windowHeight = $(window).height();

    $('.fadein2').each(function() {
      var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();

      if (scroll > target - height){
        $(this).css({
          'opacity': '1',
          'transform': 'translateX(0)'
        });
      }
    });
    
  });

  
  $(function() {
    var btn = $('.contact');
    
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active1');
      }else{
        btn.removeClass('active1')
          $('.active1').fadeIn(1000);
      }
    });
  
  });

  window.onscroll = function () {
    if(window.matchMedia("(max-width: 768px)").matches){
        var check = window.pageYOffset ;
        var docHeight = $(document).height();
        var dispHeight = $(window).height();
        if(check > docHeight-dispHeight-300){
            $('.fadeout').fadeOut(700);
        }else{(check > docHeight-dispHeight-400)
          $('.fadeout').fadeIn(800);
      }
    }
};

$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 2,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
});



});
