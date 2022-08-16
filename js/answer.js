$(function() {
    /*  $(window).load(function() {
         $("body").mCustomScrollbar();
     }); */
    $("#top-ul-left>li>a").hover(function() {
        $(this).css("color", "black");
    }, function() {
        $(this).css("color", "rgba(4, 60, 41, .6)");
    });
    $("#top-ul-right>li>a").hover(function() {
        $(this).css("color", "black");
    }, function() {
        $(this).css("color", "rgba(4, 60, 41, .6)");
    });
    $("#remenwenti>ul>li").click(function() {
        $(this).siblings().removeClass("change");
        $(this).addClass("change");
    });
    $(".search").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "rgba(4, 60, 41, .6)");
    });
    $("#body-right>button").hover(function() {
        $(this).css("background", "black");
    }, function() {
        $(this).css("background", "rgba(4, 60, 41, .6)");
    });
    $("body").delegate(".comment", "propertychange input", function() {
        if ($(this).val().length > 0) {
            $(".search").prop("disabled", false);
        } else {
            $(".search").prop("disabled", true);
        }
    });
    $(".search").click(function() {
        var $text = $(".comment").val();
        $(".search-area>p").text(">" + $text + "(142)");
        $(".search-area").css("display", "inline");
        $("#remenwenti ").css("margin-top", "0");
    });

    $("#news-box>li").mouseover(function() {
        $(this).css("top", "0px");
        $(this).css("left", "0px");
        $(this).css("box-shadow", "0px 0px 0px #ccc");
    }, function() {
        $(this).css("top", "-8px");
        $(this).css("left", "-4px");
        $(this).css("box-shadow", "8px 8px 8px #ccc")
    });

    $("#news-box>li").mouseleave(function() {
        $(this).css("top", "-8px");
        $(this).css("left", "-4px");
        $(this).css("box-shadow", "8px 8px 8px #ccc")
    }, function() {
        $(this).css("top", "0px");
        $(this).css("left", "0px")
        $(this).css("box-shadow", "0px 0px 0px #ccc");
    })
})