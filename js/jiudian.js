function enshiFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/恩施酒店" + index + ".jpg";

        index++;
    }
}

function lichuanFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/利川酒店" + index + ".jpg";

        index++;
    }
}

function badongFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/巴东酒店" + index + ".jpg";

        index++;
    }
}

function xianfengFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/咸丰酒店" + index + ".jpg";
        index++;
    }
}

function hefengFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/鹤峰酒店" + index + ".jpg";

        index++;
    }
}

function jianshiFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/建始酒店" + index + ".jpg";

        index++;
    }
}

function xaunenFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/咸丰酒店" + index + ".jpg";

        index++;
    }
}

function laifengFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/来凤酒店" + index + ".jpg";

        index++;
    }
}

function xuanenFunction() {
    var index = 1;
    for (var i = 1; index < 9; i++) {
        document.getElementById("house" + index).src = "image/宣恩酒店" + index + ".jpg";

        index++;
    }
}

function sousuo() {
    document.getElementById('zuobiao').style.display = "block";
}

function tuichu() {
    document.getElementById('zuobiao').style.display = "none";
}



setInterval(function() {
    var today = new Date();
    var H = 24 - today.getHours();
    var min = 59 - today.getMinutes();
    var sen = 59 - today.getSeconds();
    var all = H + "时" + min + "分" + sen + "s";
    document.getElementById("time").innerHTML = "优惠剩余时间：" + all;
}, 100);