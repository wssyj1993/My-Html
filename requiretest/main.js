  require.config({
      baseUrl: 'C:/Users/Admin/Desktop/requiretest/',//根目录
      // urlArgs: "version="+new Date().getTime(),
      urlArgs: "version=201710241057",//清楚缓存
      waitSeconds: 0,
      paths: {
          //全局 
          "text": ["js/text.min"],
          "bootstarp": ["js/bootstrap.min"],
          "artTemplate": ["public/lib/template-native"],

          //左边
          "leftMenu": ["leftMenu/temp/leftMenu.html"],
          //右边
          "right_def": ["right/right_define"],
          "rightone": ["right/temp/showone.html"],
          "righttwo": ["right/temp/showtwo.html"],



      },
      shim: {
          // 非AMD规范 依赖文件（对象的形式存在）

      }

  });

  // define('jquery', [], function() {
  //     return jQuery;
  // });

  require(['artTemplate', 'text!leftMenu', 'bootstarp'], function(template, leftMenu_temp) {
      var render = template.compile(leftMenu_temp);
      var showHtml = render();
      $("#showListMenu").html(showHtml);
      $(".btnMenuF").unbind("click").on("click", function() {
        //点击左边改变右边
          var togo = $(this).attr('togo');
          console.log(togo);
          require(['right_def'], function(right_def, ) {
              if (togo == 1) {
                  right_def.showone();
              } else {
                  right_def.showtwo();
              }

          })

      })
      //默认触发
      $(".btnMenuF").eq(1).trigger("click");


  })