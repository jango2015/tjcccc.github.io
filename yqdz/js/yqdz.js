// JavaScript Document



// change background
function bgChange(bgid) {
  //alert ("bg"+bgid);
  var i;
  for (i=1; i<=4; i++) {
    if (i == bgid) {
      document.getElementById("bg"+i).className = "dz-bg-switch dz-bg-active";
      document.body.style.backgroundImage = "url(img/bg" + i + ".png)";
      if (i == 1 || i == 4) {
        document.getElementById("dz-header").className = "dz-header";
      }
      if (i != 1 && i != 4) {
        document.getElementById("dz-header").className = "dz-header-x";
      }
    }
    else {
      document.getElementById("bg"+i).className = "dz-bg-switch";
    }
  }
}


// switch animate
function ActChange(animaClassName) {
  var acn = "."+animaClassName;
  if (acn.indexOf("dz-car")!=-1 && acn.indexOf("-e")!=-1) {
    //alert(acn.substring(0,acn.length-2));
    $(acn.substring(0,acn.length-2)).hide();
    $(acn).show();
  }
  if (acn.indexOf("dz-car")!=-1 && acn.indexOf("-e")==-1) {
    $(acn+"-e").hide();
    $(acn).show();
  }
  if (acn.indexOf("dz-car")==-1 && acn.indexOf("-f")!=-1) {
    $(acn.substring(0,acn.length-2)).hide();
    $(acn).show();
  }
  if (acn.indexOf("dz-car")==-1 && acn.indexOf("-f")==-1) {
    $(acn+"-f").hide();
    $(acn).show();
  }

}


























