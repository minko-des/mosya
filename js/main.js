
$(function() {

    // 初期ロード時にチェック
    handleResize();

    $(".hbg_btn").on("click",function() { //ボタンをクリックしたら
        $(this).toggleClass('open'); //openクラスの追加/削除を切替える
        $(this).toggleClass('close'); //closeクラスの追加/削除を切替え
        $(".nav_list").stop().slideToggle(200); //子要素.dropdown_listに対しすべてのアニメーションを停止し、スライドで表示/非表示する200ミリ秒で
    });


    $(window).on("resize", function() {  //ウィンドウ幅が変わったら
        handleResize();
    });
    
    function handleResize() {
        var windowWidth = $(window).width(); //ウィンドウ幅を取得
        if (windowWidth >= 1185) {  //ウィンドウ幅1185px以上の場合
            $(".nav_list").show().addClass("nav-list-pc"); //nav_list表示、nav-list-pcクラスを追加
        } else {
            $(".hbg_btn").removeClass("open").addClass("close"); // hbg_btnのクラスをリセット
            $(".nav_list").removeClass("nav-list-pc").stop(true, true).hide();  //nav_listを隠し、nav-list-pcクラスを削除
        }
    }
});



$(function() {
    function showDropdown(element) {  //showDropdownという名前の関数を定義。引数elementは対象となるHTML要素を表す
        /*element.css("background-color", "#F2FAFC"); */ //CSSメソッドで背景色を変更
        element.children(".dropdown_list").stop(true, true).slideDown(200); //elementの子要素の中でクラスが.dropdown_listである要素を選択
    }                              //stop(true, true)は現在進行中のアニメーションを停止し、キューにあるアニメーションをクリア

    function hideDropdown(element) {  //hideDropdownという名前の関数を定義。引数elementは対象となるHTML要素を表す
        /*element.css("background-color", "#fff");*/
        element.children(".dropdown_list").stop(true, true).hide();
    }

    function getBackgroundColor() { //getBackgroundColorという名前の関数を定義
        return window.innerWidth >= 1184 ? "#D4F1F8" : "#F2FAFC";  //window.innerWidthで現在のブラウザの表示領域の幅を取得
    }     //ウィンドウの幅が1184ピクセル以上かどうかを判定、真（true）の場合、"#D4F1F8"、偽（false）の場合、"#F2FAFC"を返す

    $(".nav_title").not(":last-child").hover(function() {
        $(this).css("background-color", getBackgroundColor);
        showDropdown($(this));  //ホバー時にshowDropdown呼び出し
    }, function() {
        const $this = $(this);
        setTimeout(function() {  //ホバーが外れた時
            $this.css("background-color", "");  //背景色を元に戻す

            if (!$this.children(".dropdown_list").is(":hover")) { //dropdown_listがホバーされていなければ
                //$this.css("background-color", "");  //背景色を元に戻す
                hideDropdown($this);  //hideDropdownを呼び出す
            }
        }, 0);
    });

    $(".dropdown_list").hover(function() {
        $(this).stop(true, true).show(); //ホバーされたdropdown_list要素に対してアニメーションを停止し、スライドダウン表示をキープ
        $(this).closest(".nav_title").css("background-color", ""); //closestメソッドは親要素を取得するもの
        }, function() {
        const $this = $(this);  //"this"キーワードが指す要素を変数$thisに格納する
        setTimeout(function() {  //ホバーが外れた時
            if (!$this.closest(".nav_title").is(":hover")) { //nav_titleがホバーされていなければ
                $this.closest(".nav_title").css("background-color", "");  //nav_titleの背景色を元に戻す
                hideDropdown($this.closest(".nav_title"));
            }
        }, 200);
    });
});



/*
$(function() {
    $(".nav_title").on("hover", function() {
        $(".nav_title::after").hide();
    });
});
*/


/*
$(function() {
    $(".nav_btn").on("click",function() {
        $(this).toggleClass("is_active");
    });
});


$(function() {  //クリック、ナビリスト表示/非表示
    $(".nav_btn").on("click", function() {
        var $navList = $(".nav_list");
        if($navList.hasClass("hidden")) {  //hiddenクラスを持っていたら
            $navList.removeClass("hidden").show(); //hiddenクラスを削除して表示
        } else {
            $navList.addClass("hidden").hide();  //hiddenクラスを追加して非表示
        }
    });
});
*/









/*
$(function() {
    $(".nav_title").hover(function() {
        $(this).css("background-color", "#D4F1F7");


        $(this).children(".dropdown_list").stop(true, true).slideDown(200);  // アニメーション速度を200ミリ秒に設定
    }, function() {
        $(this).css("background-color", "#fff");

        $(this).children(".dropdown_list").stop(true, true).hide();
    });

    // マウスが .dropdown_list 上にあるときは隠れないようにする
    $(".dropdown_list").hover(function() {
        $(this).stop(true, true).slideDown(200);  // アニメーション速度を200ミリ秒に設定
        $(this).closest(".nav_title").css("background-color", "#fff");

    }, function() {
        $(this).stop(true, true).hide();
        $(this).closest(".nav_title").css("background-color", "#fff");

    });
});



$(function() {
    $('.nav_title').hover(function() {
        $(this).addClass('hovered');
    }, function() {
        $(this).removeClass('hovered');
    });

    $('.dropdown_list').hover(function() {
        $(this).closest('.nav_title').removeClass('hovered');
    });
});
*/




/*
const button = document.querySelectorAll(".caption_btn");

let resizeTimer;
window.addEventListener("resize",() => {
    buttons.forEach(button => button.classList.add("animate"));
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        buttons.forEach(button.classList.remove("animate"));
    }, 300);
});
*/



/*
$(function() {
    $(".nav_title").hover(
        function() {
            $(this).next(".dropdown_list").slideDown();
        },
        function() {
            $(this).next(".dropdown_list").slideUp();
        }
    )
});


$(function() {
    $(".nav_title").hover(function() {
        $(this).next(".dropdown_list").stop(true, true).slideDown();
    }, function() {
        $(this).next(".dropdown_list").stop(true, true).slideUp();
    });

    // マウスが .dropdown_list 上にあるときは隠れないようにする
    $(".dropdown_list").hover(function() {
        $(this).stop(true, true).slideDown();
    }, function() {
        $(this).stop(true, true).slideUp();
    });
});
*/