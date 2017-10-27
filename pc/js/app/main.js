require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'shouji': 'shouji',
    }
});

var lab = {};

lab.loadpage = function(pageName) {
    require(['core'], function(core) {
        $("#rightContent").html("");
        core.loadHtml('rightContent', pageName);
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