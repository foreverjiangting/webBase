require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'shouji': 'shouji',
    }
});

var lab = {};

lab.loadpage = function(id, pageName, _this) {
    require(['core'], function(core) {
        //将当前点击的置为高亮
        $(".hightNavBar").find("li").removeClass("current");
        $(_this).parent("li").addClass("current");
        $("#rightContent").html("");
        core.loadHtml(id, pageName);
    });
}

// 运行
$(function() {
    require(['core'], function(core) {
        core.doTinit();
        core.ReConsole();
        core.initFrameWork();
        core.loadHtml('rightContent', './template/shouye.html'); //默认加载default页面
    });
});