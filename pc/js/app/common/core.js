/**
 * 公共基础模块
 */
define(function() {
    var mod = {};
    /**
     * doT 初始化
     */
    mod.doTinit = function() {
        //配置定界符
        doT.templateSettings = {
            evaluate: /\[\%([\s\S]+?)\%\]/g,
            interpolate: /\[\%=([\s\S]+?)\%\]/g,
            encode: /\[\%!([\s\S]+?)\%\]/g,
            use: /\[\%#([\s\S]+?)\%\]/g,
            define: /\[\%##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\%\]/g,
            conditional: /\[\%\?(\?)?\s*([\s\S]*?)\s*\%\]/g,
            iterate: /\[\%~\s*(?:\%\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\%\])/g,
            varname: 'it',
            strip: true,
            append: true,
            selfcontained: false
        };

    };
    /**
     *  host url
     * @returns {string}
     */
    mod.hosturl = function() {
        // 服务地址
        var hosturl = (location.origin + location.pathname) || (location.protocol + '//' + location.hostname + (location.port == 80 ? '' : ':' + location.port + location.pathname));
        return hosturl;
    };
    /**
     * 时间格式化
     */
    mod.formatDate = function() {
        Date.prototype.format = function(format) {
            if (!format) {
                format = "yyyy-MM-dd hh:mm:ss";
            }
            var o = {
                "M+": this.getMonth() + 1,
                /* month*/
                "d+": this.getDate(),
                /* day*/
                "h+": this.getHours(),
                /* hour*/
                "m+": this.getMinutes(),
                /* minute*/
                "s+": this.getSeconds(),
                /* second*/
                "q+": Math.floor((this.getMonth() + 3) / 3),
                /* quarter*/
                "S": this.getMilliseconds()

            };
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        };
    };

    /**
     * console重写，解决IE 等浏览器兼容性问题
     */
    mod.ReConsole = function() {
        window.console = window.console || (function() {
            var c = {};
            c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
            return c;
        })();

    };

    //导入html
    mod.loadHtml = function(Id, FileName) {
        $('#' + Id).load(mod.hosturl() + FileName);
    };

    /**
     * 初始化结构
     */
    mod.initFrameWork = function() {
        mod.loadHtml('head', '/template/common/head.html');
        mod.loadHtml('footer', '/template/common/footer.html');
    };

    /**
     *设置cookie
     * @param c_name
     * @param value
     * @param expiredays （过期天数）
     */
    mod.setCookie = function(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    };

    /**
     * 取 cookie
     * @param c_name
     * @returns {string}
     */
    mod.getCookie = function(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    };
    return mod;
});