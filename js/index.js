window.onload = function() {

    /* var mapImgs = ["手机", "女儿城", "清江", "腾龙洞", "狮子关"];
    var mapBgimg = document.querySelectorAll(".mapimg");
    setTimeout(function() {
        for (var e = 0; e < mapBgimg.length; e++) {
            mapBgimg[e].style.backgroundImage = "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5)), url(image/" + mapImgs[e] + ".png);";

        }
    }, 0); */

    var folkImge = document.querySelectorAll(".folkImge");
    var folkImages = ["摆手节", "女儿会", "吊脚楼", "肉连响", "喜花鼓"];
    setTimeout(function() {
        for (var w = 0; w < folkImge.length; w++) {
            folkImge[w].style.backgroundImage = "linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(4, 60, 41, .4)), url(img/" + folkImages[w] + ".png)";

        }
    }, 1050);

    /* page0动画 */
    var map = document.querySelector("#map");
    setTimeout(function() {
        map.style.left = "50%";

    }, 50);
    setTimeout(function() {
        side.style.right = -48 + "px"
    }, 1000);


    /* 主页滚动 */
    let decide = true;
    let pageNum = 0;
    var pageLun = document.querySelector(".banner");
    let pageCon = document.getElementsByClassName("bannnerCon-con");
    document.addEventListener('mousewheel', function(ev) {
        var ev = window.event || ev;
        var mp4 = document.querySelector(".lxh");
        mp4.onmousewheel = function() {
            decide = false;
        }
        mp4.onmouseleave = function() {
            decide = true;
        }
        if (decide) {
            if (ev.wheelDelta < 0 && pageNum < 3) {
                pageNum++;
            }
            if (ev.wheelDelta > 0 && pageNum > 0) {
                pageNum--;
            }
            decide = false;
            pageLun.style.transition = "all 1s ease";
            pageLun.style.top = -pageNum * 100 + 'vh';
            bannnerCon(pageNum);
            setTimeout(function() {
                decide = true;
            }, 1000);
            if (pageNum == 0) {
                page1Recover(scenery, 1000);
                page2Recover(charaImg, folk, 1000);
                page3Recover(mp4Intro, 1000)
            } else if (pageNum == 1) {
                page1Delay(scenery, 500);
                page2Recover(charaImg, folk, 1000);
                page3Recover(mp4Intro, 1000)

            } else if (pageNum == 2) {
                page2Delay(charaImg, folk, 500);
                page1Recover(scenery, 1000);
                page3Recover(mp4Intro, 1000);

            } else if (pageNum == 3) {
                page3Delay(mp4Intro, 500);
                page2Recover(charaImg, folk, 1000);
                page1Recover(scenery, 1000);


            }
        }


    });


    function bannnerCon(number) {
        for (var i = 0; i < pageCon.length; i++) {
            pageCon[i].className = "bannnerCon-con";
        }
        pageCon[number].className = "bannnerCon-con active";
    }
    bannnerCon(0);

    for (var j = 0; j < pageCon.length; j++) {
        (function(j) {
            pageCon[j].addEventListener("click", function() {
                if (j == 4) {
                    j = 0;
                }
                pageNum = j;
                pageLun.style.transition = "all 1s ease";
                pageLun.style.top = -pageNum * 100 + 'vh';
                bannnerCon(pageNum);
                if (pageNum == 0) {
                    page1Recover(scenery, 1000);
                    page2Recover(charaImg, folk, 1000);
                    page3Recover(mp4Intro, 1000)

                } else if (pageNum == 1) {
                    page2Recover(charaImg, folk, 1000);
                    page3Recover(mp4Intro, 1000)
                    page1Delay(scenery, 500);
                } else if (pageNum == 2) {
                    page1Recover(scenery, 1000);
                    page3Recover(mp4Intro, 1000)
                    page2Delay(charaImg, folk, 500);

                } else if (pageNum == 3) {
                    page1Recover(scenery, 500);
                    page2Recover(charaImg, folk, 1000);
                    page3Delay(mp4Intro, 500);
                }
            })
        }(j))
    };


    /* page1动画 */
    var scenery = document.querySelector(".scenery").querySelector("ul");

    function page1Delay(obj, num) {
        setTimeout(function() {
            for (var i = 0; i < obj.children.length; i++) {
                obj.children[i].style.transform = "translateY(0)"
            }
        }, num)
    }

    function page1Recover(obj, num) {
        setTimeout(function() {
            for (var i = 0; i < obj.children.length; i++) {
                if (i % 2 == 0) {
                    obj.children[i].style.transform = "translateY(-100%)"
                } else {
                    obj.children[i].style.transform = "translateY(100%)"
                }
            }
        }, num);
    }


    /* page2动画 */
    var charaImg = document.querySelector(".charaImg");
    var folk = document.querySelector(".folk").querySelector("ul");

    function page2Delay(obj1, obj2, num) {
        setTimeout(function() {
            obj1.children[0].style.transform = "translateX(0)"
            obj1.children[1].style.transform = "translateX(0)"
            obj2.children[0].style.width = "300px";
        }, num);
    }

    function page2Recover(obj1, obj2, num) {
        setTimeout(function() {
            obj1.children[0].style.transform = "translateX(-100%)"
            obj1.children[1].style.transform = "translateX(100%)"
            for (var i = 0; i < obj2.children.length; i++) {
                obj2.children[i].style.width = 150 + "px";
            }

        }, num);
    }


    /* page3动画 */
    var mp4Intro = document.querySelector(".mp4Intro");

    function page3Delay(obj, num) {
        setTimeout(function() {
            obj.style.height = "100%";
            obj.children[0].style.overflow = "none";
            obj.children[0].style.height = "100%"
        }, num);
    }


    function page3Recover(obj, num) {
        setTimeout(function() {
            obj.style.height = "0";
            obj.children[0].style.overflow = "hidden";
            obj.children[0].style.height = "0"
        }, num);
    }


    /* 侧边栏 */
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


    /* 首页地图 */
    var placechushi = ["巴东", "恩施", "鹤峰", "建始", "来凤", "利川", "咸丰", "宣恩"]
    var placebianhuan = ["巴东1", "恩施1", "鹤峰1", "建始1", "来凤1", "利川1", "咸丰1", "宣恩1"]

    var place = document.querySelectorAll(".mapImg");
    for (let i = 0; i < place.length; i++) {
        place[i].onmouseover = function() {
            var placeImg = this.children[0];
            placeImg.src = "image/" + placebianhuan[i] + ".png"

        }
        place[i].onmouseleave = function() {
            var placeImg = this.children[0];
            placeImg.src = "image/" + placechushi[i] + ".png"
        }
    }

    /* 榜单页*/
    var mapImgIntro = document.querySelector(".mapImgIntro");
    for (var i = 0; i < scenery.children.length; i++) {
        scenery.children[i].onmouseover = function() {
            var mapImg = this.querySelector(".mapimg");
            setTimeout(function() {
                mapImg.style.left = -200 + "px";
            }, )
        }
        scenery.children[i].onmouseleave = function() {
            var mapImg = this.querySelector(".mapimg");
            mapImg.style.left = 0 + "px";
        }
    }

    /* 民俗页 */
    for (let i = 0; i < folk.children.length; i++) {
        folk.children[i].onmouseover = function() {
            for (var j = 0; j < folk.children.length; j++) {
                folk.children[j].style.width = 150 + 'px';
            }
            folk.children[i].style.width = 300 + 'px';
        }
    }
}