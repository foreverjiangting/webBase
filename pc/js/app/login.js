require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'loginMod': 'mod/loginMod'
    }
});
var app = {};

app.init = function() {
    require(['loginMod', 'core'], function(loginMod, core) {
        loginMod.initContent();
    });
};

// 运行
$(function() {
    require(['core'], function(core) {
        app.init(); //进行调用
    });
});