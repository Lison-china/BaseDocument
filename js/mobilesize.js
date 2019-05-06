(function(e, t) { //手机端适配
    var n = t.documentElement,
        d = e.devicePixelRatio || 1;

    function i() {
        var e = n.clientWidth / 3.75;
        n.style.fontSize = e + "px"
    }
    if (function e() { t.body ? t.body.style.fontSize = "16px" : t.addEventListener("DOMContentLoaded", e) }(), i(), e.addEventListener("resize", i), e.addEventListener("pageshow", function(e) { e.persisted && i() }), 2 <= d) {
        var o = t.createElement("body"),
            a = t.createElement("div");
        a.style.border = ".5px solid transparent", o.appendChild(a), n.appendChild(o), n.removeChild(o)
    }
})(window, document);