
require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'default': 'mod/defaultMod',
    }
});

var lab = {};

lab.loadpage = function (pageName) {


    require(['core'], function (core) {

        $("#rightContent").html("");

        core.loadHtml('rightContent', pageName);

    });
}

//每次修改时调用的公共方法,写在主页面,便于以后其它页面的调用,不用重复写
//更新模态层隐藏的input  val  模态框ID 隐藏的ID 游侠的ID

//更新模态层隐藏的input  val
lab.changeDialogItemId = function (modalName, dialogId, itemId) {

    $("#" + modalName).modal("show");

    $("#" + dialogId).val(itemId);
    //  console.log(dialogId +"|"+ itemId);

};



// 运行
$(function () {

    require(['core'], function (core) {
        core.doTinit();
        core.ReConsole();
        core.initFrameWork();
        core.loadHtml('rightContent', './template/default.html');//默认加载default页面
    });
});
