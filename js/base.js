//t:文本   s:时间  h:标题   b:按钮文字   n:参数名字
(function(a) {
    base = {
        message(t, s) { //短提示框
            const shtml = '<div class="message">' + t + '</div>'
            $('body').append(shtml)
            setTimeout(function() {
                $('.message').remove()
            }, s)
        },
        messageBox(h, t, b) { //弹框提示框
            const shtml = '<div class="messageBox"><div class="messageBoxCon"><p class="messageBoxTitle">' + h + '</p><p class="messageBoxText">' + t + '</p><div class="messageBoxBtn">' + b + '</div></div></div>'
            $('body').append(shtml)
            $('.messageBoxBtn').on('click', function() {
                $('.messageBox').remove()
            })
        },
        sendyzm(p) { //验证手机号
            const str = /^1[34578]\d{9}$/
            return str.test(p)
        },
        bodyScroll(event) { //禁止页面滚动
            event.preventDefault();
        },
        bodyScrollNo() { //禁止滚动
            document.body.removeEventListener('touchmove', this.bodyScroll(), false);
            $("body").css({ "position": "initial", "height": "auto" });
        },
        bodyScrollYes() { //开放滚动
            document.body.addEventListener('touchmove', this.bodyScroll, false);
            $('body').css({ 'position': 'fixed', "width": "100%" });
        },
        getUrlName(n) { //获取url参数
            var reg = new RegExp("(^|&)" + n + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
            if (r != null) return unescape(r[2]);
            return null;
        },
    }
})(window)