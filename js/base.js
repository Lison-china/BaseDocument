//t:文本   s:时间
(function(a) {
    base = {
        ok(t, s) { //提示框
            const shtml = '<div class="ok">' + t + '</div>'
            $('body').append(shtml)
            setTimeout(function() {
                $('.ok').remove()
            }, s)
        },
        sendyzm(p) { //验证手机号
            const str = /^1[34578]\d{9}$/
            return str.test(p)
        },
        bodyScroll(event) { //禁止页面滚动
            event.preventDefault();
        }
    }
})(window);
//弹出层隐藏的时候调用
document.body.removeEventListener('touchmove', base.bodyScroll(), false);
$("body").css({ "position": "initial", "height": "auto" });
//弹出层显示的时候调用
document.body.addEventListener('touchmove', base.bodyScroll(), false);
$('body').css({ 'position': 'fixed', "width": "100%" });