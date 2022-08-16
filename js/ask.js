window.onload = function() {
    /* var xianshi = document.querySelector("#num");
    var zishu = document.querySelector("#zishu")
    zishu.onkeyup = function() {
        var num = zishu.value.length;
        xianshi.innerText = num;
    } */
    var case1 = document.querySelector("#case1");
    var dian1 = document.querySelector("#dian1");
    var case2 = document.querySelector("#case2");
    var dian2 = document.querySelector("#dian2");

    function bianhua(obj) {
        var objs = obj.style.display;
        if (objs == "none") {
            obj.style.display = "block";
        } else {
            obj.style.display = "none";
        }
    }
    case1.onclick = function() {
        bianhua(dian1);
    }
    case2.onclick = function() {
        bianhua(dian2);
    }
}