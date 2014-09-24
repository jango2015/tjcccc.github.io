// JavaScript Document

// car-a8l
if (document.getElementsByClassName("dz-car-a8l").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-a8l_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-car-a8l-e").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-a8l-e_edgePreload.js'></script>");
};

// car-sigitar
if (document.getElementsByClassName("dz-car-sigitar").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-sigitar_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-car-sigitar-e").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-sigitar-e_edgePreload.js'></script>");
};

// car-golf7
if (document.getElementsByClassName("dz-car-golf7").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-golf7_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-car-golf7-e").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/car-golf7-e_edgePreload.js'></script>");
};

// portal
if (document.getElementsByClassName("dz-portal").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/portal_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-portal-f").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/portal-f_edgePreload.js'></script>");
};

// sap
if (document.getElementsByClassName("dz-sap").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/sap_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-sap-f").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/sap-f_edgePreload.js'></script>");
};

// outlook
if (document.getElementsByClassName("dz-outlook").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/outlook_edgePreload.js'></script>");
};
if (document.getElementsByClassName("dz-outlook-f").length > 0) {
  document.write("<script type='text/javascript' charset='utf-8' src='js/outlook-f_edgePreload.js'></script>");
};

// bg-change
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