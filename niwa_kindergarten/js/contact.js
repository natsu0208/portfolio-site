$(function(){ /*複数挿入する場合は、大ソトにfanctionがあればいい*/


  //navを「画面」の一番下に固定しておき、その後スクロールすると「画像」の一番下に固定されるように
  var pos=$("header").height()-$(window).innerHeight(); //ヘッダーの高さからウィンドウの高さを引く→スクロールする量（スクロール量はウィンドウ分もなく、小さい）
  console.log(pos);
  $(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop()>pos){
      $("nav").css("position","absolute"); //navはクラス名付けてたらクラス名でも可。posを超えたら、blog.cssのposition: fixed;をposition: absolute;に変更し、固定を外して画像の一番下にnavをつけるように
    }else{
      $("nav").css("position","fixed"); //上記以外のとき（トップに戻ってきたとき）に、position: fixed;で固定されるように
    }

  });
      


    //バリデーション 都道府県以外は同じパターン
    $(".alert").hide();

    $(".submitBtn").click(function(){ //classを振らず、$('input[type="submit"]').click(function(){　としても可。submitは一つしかないので

        var sendFlag=true;

        //お名前
        if(!$(".name").val()){
            $(".nameSection.alert").show(); /*親子じゃないので.nameSectionと.alertの間にスペースなし*/
            sendFlag=false;
        }else{
            $(".nameSection.alert").hide();
        }

        //メールアドレス
        if(!$(".email").val()){
            $(".emailSection.alert").show();
            sendFlag=false;
        }else{
            $(".emailSection.alert").hide();
        }

        //お問い合わせ内容
        if(!$(".naiyo").val()){
            $(".naiyoSection.alert").show();
            sendFlag=false;
        }else{
            $(".naiyoSection.alert").hide();
        }

        return false;

    });

    //入力ボックスの色を変える
    $("input,textarea").focus(function(){
        $(this).parents(".input").css("border-color","#D3DE32"); /*thisはinputタグの親の親（ボーダーが引いてある.input（[inout]でなく、class））*/
    });
    $("input,textarea").blur(function(){ /*マウスが外れたとき*/
        $(this).parents(".input").css("border-color","#000");
    });
    //thisはクリックされた人から見て
    //.parents(".input")の.input部分に関して、通常タグが入るが、クラスやidが入ることも



//1文字ずつフェードイン
    // eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
  
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  

});
