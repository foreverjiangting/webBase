/**
 * Created by boren on 16/7/18.
 */
require.config({
    baseUrl: 'js/app',
    paths: {
        'core': 'common/core',
        'defaultMod': 'mod/defaultMod'
    }
});

var app = {};

//
app.initTavel = function () {

    require(['defaultMod', 'core'], function (defaultMod, core) {

        defaultMod.initContent(core, 30, 0);

    });
};

// 运行
$(function () {

    require(['core'], function (core) {
        app.initTavel(); //进行调用
    });
});
