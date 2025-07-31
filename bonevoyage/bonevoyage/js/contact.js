$(function(){ /*複数挿入する場合は、大ソトにfanctionがあればいい*/

    //トップ画像
    $(".smooth").addClass("is-animated"); //今回はページトップなので、スクロールなしでクラスを追加するだけでいい


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

        //フリガナ
        if(!$(".kana").val()){
            $(".kanaSection.alert").show();
            sendFlag=false;
        }else{
            $(".kanaSection.alert").hide();

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
        $(this).parents(".input").css("border-color","#4352a2"); /*thisはinputタグの親の親（ボーダーが引いてある.input（[inout]でなく、class））*/
    });
    $("input,textarea").blur(function(){ /*マウスが外れたとき*/
        $(this).parents(".input").css("border-color","#f1f6f9");
    });
    //thisはクリックされた人から見て
    //.parents(".input")の.input部分に関して、通常タグが入るが、クラスやidが入ることも

});
