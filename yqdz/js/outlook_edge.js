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
            rect:['21px','57px','64px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"desktop.png",'0px','0px']
         },
         {
            id:'desktopCopy',
            type:'image',
            rect:['401px','15px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"desktop.png",'0px','0px']
         },
         {
            id:'envelope-o',
            type:'image',
            rect:['53px','39px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"envelope-o.png",'0px','0px']
         },
         {
            id:'success',
            type:'image',
            rect:['305px','-2px','192px','192px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"success.png",'0px','0px'],
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
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["style", "top", '94px'],
            ["style", "left", '107px'],
            ["style", "width", '8px']
         ],
         "${_desktop}": [
            ["style", "height", '64px'],
            ["style", "top", '57px'],
            ["style", "left", '21px'],
            ["style", "width", '64px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '125px'],
            ["style", "width", '475px']
         ],
         "${_success}": [
            ["style", "top", '-25px'],
            ["transform", "scaleY", '0.1875'],
            ["style", "height", '192px'],
            ["transform", "scaleX", '0.1875'],
            ["style", "opacity", '0'],
            ["style", "left", '143px'],
            ["style", "width", '192px']
         ],
         "${_desktopCopy}": [
            ["style", "top", '15px'],
            ["style", "height", '48px'],
            ["style", "left", '401px'],
            ["style", "width", '48px']
         ],
         "${_envelope-o}": [
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["motion", "location", '70px 81px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid3", tween: [ "style", "${_envelope-o}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400 },
            { id: "eid7", tween: [ "style", "${_envelope-o}", "opacity", '0', { fromValue: '1'}], position: 4028, duration: 972 },
            { id: "eid14", tween: [ "style", "${_RoundRect}", "top", '94px', { fromValue: '94px'}], position: 6000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_envelope-o}", "height", '32px', { fromValue: '48px'}], position: 0, duration: 5000 },
            { id: "eid15", tween: [ "style", "${_Stage}", "width", '475px', { fromValue: '475px'}], position: 9000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_RoundRect}", "width", '278px', { fromValue: '8px'}], position: 0, duration: 5000 },
            { id: "eid42", tween: [ "style", "${_RoundRect}", "left", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_success}", "top", '-40px', { fromValue: '-25px'}], position: 5000, duration: 1000 },
            { id: "eid8", tween: [ "motion", "${_envelope-o}", [[70,81,0,0],[77,63,0,0]]], position: 0, duration: 400 },
            { id: "eid4", tween: [ "motion", "${_envelope-o}", [[77,63,0,0],[121,32.29,13.6,-3.82,77.06,-21.63],[167.9,34.25,26.81,12.68,42.54,20.11],[251.36,60.78,218.11,-4.91,91.86,-2.07],[410,26,0,0]]], position: 400, duration: 4600 },
            { id: "eid22", tween: [ "style", "${_success}", "left", '143px', { fromValue: '143px'}], position: 5000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_envelope-o}", "width", '32px', { fromValue: '48px'}], position: 0, duration: 5000 },
            { id: "eid9", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 6000, duration: 0 }         ]
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
