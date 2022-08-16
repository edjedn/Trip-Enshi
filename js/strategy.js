window.onload = function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    var picBanner = document.querySelector(".banner").querySelector(".ban").querySelector("ul");
    var pic = document.getElementById("pic");
    for (let i = 0; i < picBanner.children.length; i++) {
        picBanner.children[i].onclick = function() {
            pic.src = "image/zhou" + arr[i] + ".jpg";
        }
    }
    var shang = document.querySelector(".shang");
    var xia = document.querySelector(".xia");
    var xum = 0;
    shang.onclick = function() {
        xum++;
        if (xum < 5) {
            picBanner.style.top = 25 + 130 * -xum + "px";
            shang.style.cursor = "pointer"
            xia.style.cursor = "pointer"
            shang.style.opacity = "1"
            xia.style.opacity = "1";
            if (xum == 4) {
                shang.style.cursor = "auto"
                shang.style.opacity = "0.5"
            }
        } else {
            xum = 4;
        }
    }
    xia.onclick = function() {
        xum--;
        if (xum > -1) {
            picBanner.style.top = 25 + 130 * -xum + "px";
            shang.style.cursor = "pointer"
            xia.style.cursor = "pointer"
            shang.style.opacity = "1"
            xia.style.opacity = "1";
            if (xum == 0) {
                xia.style.cursor = "auto"
                xia.style.opacity = "0.5"
            }
        } else {
            xum = 0;

        }
    }
    var bangdan = document.querySelector(".bangdan");
    (window.onscroll = function() {
        var st = document.documentElement.scrollTop;
        if (st > 1527) {
            bangdan.style.position = "absolute"
            bangdan.style.top = "1527px";
        } else {
            bangdan.style.position = "fixed"
            bangdan.style.top = "360px";
        }

    })()
}