define(['artTemplate'], function(template) {
    var turorObj = {
        //定义模块
        showone: function() {
            require(['text!rightone'], function(rightone_temp) {
                var render = template.compile(rightone_temp);
                var html = render();
                $("#contBody").html(html);
            })
        },
        showtwo: function() {
            require(['text!righttwo'], function(righttwo_temp) {
                var render = template.compile(righttwo_temp);
                var html = render();
                $("#contBody").html(html);
            })
        },
        }
    return turorObj;
})