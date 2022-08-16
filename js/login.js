window.onload = function() {
    var title_l = document.querySelector(".title_l");
    var title_r = document.querySelector(".title_r");
    var ewm = document.querySelector(".ewm");
    var ip = document.querySelector(".ip")
    title_l.onclick = function() {
        ewm.style.display = "block";
        ip.style.display = "none";
    }
    title_r.onclick = function() {
        ewm.style.display = "none";
        ip.style.display = "block";
    }
}