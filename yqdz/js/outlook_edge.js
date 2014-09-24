/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='img/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'desktop',
            type:'image',
            rect:['69px','76px','64px','64px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"desktop.png",'0px','0px']
         },
         {
            id:'desktopCopy',
            type:'image',
            rect:['328px','26px','48px','48px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"desktop.png",'0px','0px']
         },
         {
            id:'envelope-o',
            type:'image',
            rect:['86px','84px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"envelope-o.png",'0px','0px']
         },
         {
            id:'success',
            type:'image',
            rect:['305px','-2px','192px','192px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"success3.png",'0px','0px'],
            transform:[[],[],[],['0.1875','0.1875']]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['124px','106px','8px','10px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '12px'],
            ["style", "top", '157px'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '70px'],
            ["style", "width", '0px']
         ],
         "${_envelope-o}": [
            ["style", "top", '84px'],
            ["style", "height", '48px'],
            ["motion", "location", '70px 81px'],
            ["style", "opacity", '0'],
            ["style", "left", '86px'],
            ["style", "width", '48px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '475px'],
            ["style", "height", '200px'],
            ["style", "overflow", 'hidden']
         ],
         "${_success}": [
            ["style", "top", '-28px'],
            ["transform", "scaleY", '0.1875'],
            ["transform", "scaleX", '0.1875'],
            ["style", "height", '256px'],
            ["style", "opacity", '0'],
            ["style", "left", '200px'],
            ["style", "width", '256px']
         ],
         "${_desktop}": [
            ["style", "top", '76px'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '69px'],
            ["style", "width", '64px']
         ],
         "${_desktopCopy}": [
            ["style", "top", '22px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '356px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid62", tween: [ "style", "${_desktop}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid64", tween: [ "motion", "${_envelope-o}", [[115,109,0,0],[115,81.95,0,0]]], position: 500, duration: 500 },
            { id: "eid66", tween: [ "motion", "${_envelope-o}", [[115,75.96,0,0],[173.8,39.61,22.2,-3.76,57.83,-9.8],[204.17,38.75,73.31,22.62,27.92,8.61],[274.94,67.36,130.1,1.41,67.25,0.73],[371,41,0,0]]], position: 1250, duration: 3500 },
            { id: "eid68", tween: [ "style", "${_envelope-o}", "height", '32px', { fromValue: '48px'}], position: 1250, duration: 3500 },
            { id: "eid79", tween: [ "style", "${_desktopCopy}", "top", '22px', { fromValue: '22px'}], position: 8000, duration: 0 },
            { id: "eid78", tween: [ "style", "${_desktopCopy}", "left", '356px', { fromValue: '356px'}], position: 8000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_desktopCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid43", tween: [ "style", "${_RoundRect}", "width", '332px', { fromValue: '0px'}], position: 1250, duration: 3500 },
            { id: "eid65", tween: [ "style", "${_envelope-o}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid69", tween: [ "style", "${_envelope-o}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid57", tween: [ "style", "${_RoundRect}", "height", '12px', { fromValue: '12px'}], position: 1250, duration: 0 },
            { id: "eid46", tween: [ "style", "${_success}", "left", '221px', { fromValue: '200px'}], position: 5000, duration: 750 },
            { id: "eid21", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 750 },
            { id: "eid9", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 8000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_envelope-o}", "width", '32px', { fromValue: '48px'}], position: 1250, duration: 3500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "dz-outlook");
