$(function(){
	//about,aside
	$(window).on('load scroll',function (){
		$('.fade').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});

	//flow
	//フェードインさせたい要素の位置をずらす
	$('.fadein').css({
		'opacity': '0',
		'transform': 'translateX(30px)'
	});

	$(window).scroll(function() {
    
		/*ここに上の「フェードインさせたい要素の位置をずらす」の4行を入れてしまうと、
		スクロールする度に下の処理が実行され、スクロールの度にフェードインしたりフェードアウトしたりしてしまう。
		なので、書く順番に注意！*/

		
		//スクロールバーの位置を取得
		var scroll = $(window).scrollTop();
	
		//ウィンドウの高さを取得
		var windowHeight = $(window).height();
	
		$('.fadein').each(function() {
		  //フェードインさせたい要素の縦位置を取得
		  var elemPos = $(this).offset().top;
	
		  //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
		  if (scroll > elemPos - windowHeight + 100) {
			$(this).css({
			  'opacity': '1',
			  'transform': 'translateX(0)'
			});
		  }
		});
		
	  });

});