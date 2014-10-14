// JavaScript Document

// 微软雅黑粗体
(function () {
  document.write("<script type='text/javascript' charset='utf-8' src='http://fast.fonts.net/jsapi/fd7a5d29-19b7-4ac2-a253-c25cd6208b35.js'></script>");
})();


// 判断是否启动动画
(function () {
  if (document.getElementsByClassName("index-start-content").length > 0) {
    document.write("<script type='text/javascript' charset='utf-8' src='js/edge_includes/edge.5.0.0.min.js'></script>");
    $(document).ready(function(){
      AdobeEdge.loadComposition('index-start-content', 'index-start-content', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "674px",
        height: "544px"
      }, {"style":{"${symbolSelector}":{"isStage":"true","rect":["undefined","undefined","724px","594px"],"fill":["rgba(255,255,255,1)"]}},"dom":{}}, {"dom":{}});
    });
  };
})();

// 点击首页菜单后菜单消失
(function () {
  $(document).ready(function(){
    $(".is-option-1").click(function(){
      console.log("- -");
      $(".is-menu-list").hide();
    });
  });
});


// 侧边菜单展开
function AsideMenu (menuClassID) {
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


// 图表展现
(function () {
  $(".data-chart").fadeIn(2000);
})();


// 使表单从只读变可写
function EditProfile () {
  
  // 遍历所在form中所有的id对应的unit-input并记录
  // 重写unit-input的内容，使其成为<input>内容</input>
  for (var i=1; i<=14; i++) {
    var j = $("#t"+i).text();
    $("#t"+i).html("<input value='"+j+"'>");
  }
  
  // 变成select
  var depam = $("#department").text();
  $("#department").html("<select><option selected>"+depam+"</option><option>其他部门</option></select>");
  var sex = $("#sex").text();
  $("#sex").html("<select><option selected>"+sex+"</option><option>女</option></select>");
  var mrg = $("#marriage").text();
  $("#marriage").html("<select><option selected>"+mrg+"</option><option>已婚</option></select>");
  var dge = $("#degree").text();
  $("#degree").html("<select><option selected>"+dge+"</option><option>其他学位</option></select>");
  var eng = $("#eng").text();
  $("#eng").html("<select><option selected>"+eng+"</option><option>其他水平</option></select>");
    
  // 按钮变成“保存”
  $("#btn-edit-f1").removeClass("b-red");
  $("#btn-edit-f1").addClass("b-green");
  $("#btn-edit-f1").html("<i class='icon-save'></i> 保存");
  $("#btn-edit-f1").attr("id","btn-save-f1");

}

function EditPersonnel () {
  
  // 遍历所在form中所有的id对应的unit-input并记录
  // 重写unit-input的内容，使其成为<input>内容</input>
  for (var i=15; i<=17; i++) {
    var j = $("#t"+i).text();
    $("#t"+i).html("<input value='"+j+"'>");
  }
  
  // 变成select
  var emp = $("#employee").text();
  $("#employee").html("<select><option selected>"+emp+"</option><option>否</option></select>");
  var hlt = $("#health").text();
  $("#health").html("<select><option selected>"+hlt+"</option><option>有病</option></select>");
  var alv = $("#alevel").text();
  $("#alevel").html("<select><option selected>"+alv+"</option><option>人</option></select>");
  var jlv = $("#joblevel").text();
  $("#joblevel").html("<select><option selected>"+jlv+"</option><option>其他</option></select>");
  var jbk = $("#jobkind").text();
  $("#jobkind").html("<select><option selected>"+jbk+"</option><option>管理</option></select>");
    
  // 按钮变成“保存”
  $("#btn-edit-f2").removeClass("b-red");
  $("#btn-edit-f2").addClass("b-green");
  $("#btn-edit-f2").html("<i class='icon-save'></i> 保存");
  $("#btn-edit-f2").attr("id","btn-save-f1");

}

function EditOthers () {
  
  // 遍历所在form中所有的id对应的unit-input并记录
  // 重写unit-input的内容，使其成为<input>内容</input>
  for (var i=18; i<=24; i++) {
    var j = $("#t"+i).text();
    $("#t"+i).html("<input value='"+j+"'>");
  }
  
  // 变成select
  var bld = $("#blood").text();
  $("#blood").html("<select><option>A</option><option>B</option><option selected>"+bld+"</option><option>O</option></select>");

  // 变成textarea
  var umm = $("#unit-memo").text();
  $("#unit-memo").html("<textarea>"+umm+"</textarea>");

  // 按钮变成“保存”
  $("#btn-edit-f3").removeClass("b-red");
  $("#btn-edit-f3").addClass("b-green");
  $("#btn-edit-f3").html("<i class='icon-save'></i> 保存");
  $("#btn-edit-f3").attr("id","btn-save-f1");

}

























