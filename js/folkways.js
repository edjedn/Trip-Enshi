window.onload = function() {

    setTimeout(function() {

        for (var x = 0; x < fanhui.length; x++) {
            fanhui[x].style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(img/" + arr[x] + ".png)";
        }

    }, 0)

    var arr = ["利川灯歌", "利川花灯", "肉连响", "利川小曲", "女儿会", "向王节", "哭嫁歌", "闹灵歌", "喜花鼓", "丝弦锣鼓", "撒叶儿嗬", "吊脚楼", "地盘子", "三棒鼓", "宣恩耍耍", "铜铃舞", "摆手节", "围鼓", "田歌", "柳子戏", "草把龙"];
    var Arr = ["lichuan", "enshi", "jianshi", "badong", "", "xianfeng", "xuanen", "hefeng", "laifeng"]
    var side = document.querySelector(".side");
    var sideUl = side.querySelector("ul");
    for (var i = 0; i < sideUl.children.length; i++) {
        sideUl.children[i].onmouseover = function() {
            this.style.left = -12 + "px";
            side.style.right = 0 + "px"
        }
        sideUl.children[i].onmouseleave = function() {
            this.style.left = 0 + "px";
            side.style.right = -48 + "px"
        }
    }
    setTimeout(function() {
        side.style.right = -48 + "px"
    }, 1000);

    setTimeout(function() {
        someFolk.style.transform = "translate(-455px, 0)";
    }, 100)
    var shangla = document.querySelector(".shangla");
    var nav = document.querySelector("#folkways").querySelector(".nav");
    var someFolk = document.querySelector("#someFolk");
    var num = 0;
    var temp = true;
    shangla.onclick = function() {
        num++;
        var rot = num * 180;
        shangla.style.transform = "translateX(-50%) rotateZ(" + rot + "deg)"
        if (temp) {
            nav.style.top = 30 + "px";
            someFolk.style.top = 124 + "px"
            temp = false;
        } else {
            nav.style.top = 90 + "px";
            someFolk.style.top = 184 + "px"
            temp = true;
        }
    }

    var difang = document.querySelector("#folkways").querySelector("ul");
    var biaoqian = document.querySelector("#someFolk").querySelector("ul");
    for (let i = 0; i < difang.children.length; i++) {
        difang.children[i].onclick = function() {
            for (var j = 0; j < biaoqian.children.length; j++) {
                biaoqian.children[j].style.display = "none"

            }

            function lxh(obj) {
                for (var z = 0; z < obj.length; z++) {
                    obj[z].style.display = "block";
                }
            }
            var obj = biaoqian.getElementsByClassName(Arr[i]);

            if (i == 4) {
                for (var j = 0; j < biaoqian.children.length; j++) {
                    biaoqian.children[j].style.display = "block"
                    biaoqian.children[j].style.width = 220 + "px";
                }
                for (var j = 0; j < biaoqian.children.length; j++) {
                    biaoqian.children[j].style.width = 220 + "px";
                    for (var z = 0; z < fanhui.length; z++) {
                        fanhui[z].style.width = 220 + "px";
                        fanhui[z].style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(img/" + arr[z] + ".png)";
                    }
                    for (var y = 0; y < neirong.length; y++) {
                        neirong[y].style.width = "100%";
                        neirong[y].style.height = 200 + "px";
                        neirong[y].style.top = 200 + "px";
                    }
                    for (var x = 0; x < duanluo.length; x++) {
                        duanluo[x].style.height = 150 + "px";
                        duanluo[x].style.webkitLineClamp = 6
                        duanluo[x].style.overflow = "hidden"
                    }
                }
            } else {
                lxh(obj);
            }
        }
    }

    for (let a = 0; a < biaoqian.children.length; a++) {
        biaoqian.children[a].onmouseover = function() {
            if (temp1 == true) {
                var lxj = biaoqian.children[a].querySelector(".fanhui");

                lxj.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 1)), url(img/" + arr[a] + ".png)";
                lxj.style.boxShadow = "8px 8px 3px rgba(255, 255, 255, 0.6)"
                this.style.top = -5 + "px";
                this.style.left = -5 + "px";
            }

        }
        biaoqian.children[a].onmouseleave = function() {
            /* function niubi(obj) {
                obj.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 1)), url(image/土司城.png)";
            } */
            if (temp1 == true) {
                var lxj = biaoqian.children[a].querySelector(".fanhui");

                lxj.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(img/" + arr[a] + ".png)";
                lxj.style.boxShadow = "0px 0px 3px #ccc"
                this.style.top = 0 + "px";
                this.style.left = 0 + "px";

            }
        }
    }


    var rough = document.querySelector(".rough");
    var exact = document.querySelector(".exact");
    var fanhui = document.querySelectorAll(".fanhui");
    var neirong = document.querySelectorAll(".neirong");
    var duanluo = document.querySelectorAll(".duanluo");
    var temp1 = true;
    rough.onclick = function() {
        for (var j = 0; j < biaoqian.children.length; j++) {
            biaoqian.children[j].style.width = 970 + "px";
            for (var z = 0; z < fanhui.length; z++) {
                fanhui[z].style.backgroundImage = "url(img/" + arr[z] + ".png)";
                fanhui[z].style.width = 300 + "px";

            }
            for (var y = 0; y < neirong.length; y++) {
                neirong[y].style.width = 670 + "px";
                neirong[y].style.height = 400 + "px";
                neirong[y].style.top = 0 + "px";
            }
            for (var x = 0; x < duanluo.length; x++) {
                duanluo[x].style.height = 350 + "px";
                duanluo[x].style.webkitLineClamp = 999;
                duanluo[x].style.overflow = "auto"
            }
        }
        temp1 = false;
    }
    exact.onclick = function() {
        for (var j = 0; j < biaoqian.children.length; j++) {
            biaoqian.children[j].style.width = 220 + "px";
            for (var z = 0; z < fanhui.length; z++) {
                fanhui[z].style.width = 220 + "px";
                fanhui[z].style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(img/" + arr[z] + ".png)";
            }
            for (var y = 0; y < neirong.length; y++) {
                neirong[y].style.width = "100%";
                neirong[y].style.height = 200 + "px";
                neirong[y].style.top = 200 + "px";
            }
            for (var x = 0; x < duanluo.length; x++) {
                duanluo[x].style.height = 150 + "px";
                duanluo[x].style.webkitLineClamp = 6;
                duanluo[x].style.overflow = "hidden"
            }
        }
        temp1 = true;
    }

    var zd = document.querySelector("#zd");
    zd.onclick = function() {
        console.log(window.pageYOffset);
        var time = setInterval(function() {
            let top = window.pageYOffset;
            let step = Math.ceil(top / 50);
            window.scroll(0, top - step);
            if (top == 0) {
                clearInterval(time);
            }
        })
    }, 30;
}