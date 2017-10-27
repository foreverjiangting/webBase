require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'shoujiMod': 'mod/shoujiMod'
    }
});
var app = {};

app.init = function() {
    require(['shoujiMod', 'core'], function(shoujiMod, core) {
        shoujiMod.initContent();
    });
};

//弹框消息
app.closeAlert = function() {
    $(".big-box").css("display", 'none');
};
// 运行
$(function() {
    require(['core'], function(core) {
        app.init(); //进行调用
    });
});