// JavaScript Document



 
// ActChange (animaClassName) {}
// 用途：切换状态，调出动画。
// 参数"animaClassName"是需要播放动画的classname。

function ActChange(animaClassName) {
  var acn = "."+animaClassName;
  if (acn.indexOf("dz-car")!=-1 && acn.indexOf("-e")!=-1) {
    //alert(acn.substring(0,acn.length-2));
    $(acn.substring(0,acn.length-2)).hide();
    $(acn).fadeIn();
    var w = "#" + $(acn).parent().parent().parent().attr("id");
    $(w).children(".dz-car-act").addClass("dz-bk-warning");
  }
  else if (acn.indexOf("dz-car")!=-1 && acn.indexOf("-e")==-1) {
    $(acn+"-e").hide();
    $(acn).fadeIn();
    var w = "#" + $(acn).parent().parent().parent().attr("id");
    $(w).children(".dz-car-act").removeClass("dz-bk-warning");
  }
  else if (acn.indexOf("dz-car")==-1 && acn.indexOf("-f")!=-1) {
    $(acn.substring(0,acn.length-2)).hide();
    $(acn).fadeIn();
    var w = "#" + $(acn).parent().parent().attr("id");
    $(w).addClass("dz-bk-warning");
  }
  else if (acn.indexOf("dz-car")==-1 && acn.indexOf("-f")==-1) {
    $(acn+"-f").hide();
    $(acn).fadeIn();
    var w = "#" + $(acn).parent().parent().attr("id");
    $(w).removeClass("dz-bk-warning");
  }
}


























