// JavaScript Document

// 微软雅黑粗体
(function () {
  document.write("<script type='text/javascript' src='http://fast.fonts.net/jsapi/fd7a5d29-19b7-4ac2-a253-c25cd6208b35.js'></script>");
})();

// 判断是否启动动画
(function () {
  if (document.getElementsByClassName("index-start-content").length > 0) {
    document.write("<script type='text/javascript' charset='utf-8' src='js/index-start-content_edgePreload.js'></script>");
  };
})();

// 侧边菜单展开
function AsideMenu(menuClassID) {
  $(document).ready(function() {
    var t = ".asmt-" + menuClassID;
    var c = ".asmc-" + menuClassID;
    if ($(t).hasClass("aside-menu-title-active")) {
      $(t).removeClass("aside-menu-title-active");
    }
    else {
      $(t).addClass("aside-menu-title-active");
    }
    $(c).slideToggle(500);
  });
}

// 图表展现样式
(function () {
  $(".data-chart").fadeIn(2000);
})();