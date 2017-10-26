require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'defaultMod': 'mod/defaultMod'
    }
});
var app = {};

app.init = function () {
    require(['defaultMod', 'core'], function (defaultMod, core) {
        defaultMod.initContent();
    });
};
// 运行
$(function () {
    require(['core'], function (core) {
        app.init(); //进行调用
    });
});