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
lab.isShow = function(ulClassName, showClassName, hideClassName, _this) {
    $("." + ulClassName).find("li").removeClass("relation");
    $(_this).parent("li").addClass("relation");
    $("." + showClassName).css("display", "none");
    $("." + hideClassName).css("display", "block");
};

lab.showPanel = function(ulClassName, _this) {
    var index = $(_this).attr("data-index");
    $("." + ulClassName).find("li").removeClass("relation");
    $(_this).parent("li").addClass("relation");
    //展现面板
    $(".content-indent").css("display", "none");
    $("." + index).css("display", "block");
    console.log(index);
};
// 运行
$(function() {
    require(['core'], function(core) {
        core.doTinit();
        core.ReConsole();
        core.initFrameWork();
        core.loadHtml('rightContent', './template/shouye.html'); //默认加载default页面
    });
});