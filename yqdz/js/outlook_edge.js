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
            rect:['256px','15px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"desktop.png",'0px','0px']
         },
         {
            id:'envelope-o',
            type:'image',
            rect:['53px','39px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"envelope-o.png",'0px','0px']
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
            ["style", "top", '94px'],
            ["style", "left", '122px'],
            ["style", "width", '8px']
         ],
         "${_desktopCopy}": [
            ["style", "height", '48px'],
            ["style", "top", '15px'],
            ["style", "left", '256px'],
            ["style", "width", '48px']
         ],
         "${_envelope-o}": [
            ["motion", "location", '70px 81px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "width", '48px']
         ],
         "${_Stage}": [
            /*["color", "background-color", 'rgba(0,0,0,0.00)'],*/
            ["style", "width", '330px'],
            ["style", "height", '125px'],
            ["style", "overflow", 'hidden']
         ],
         "${_desktop}": [
            ["style", "top", '57px'],
            ["style", "height", '64px'],
            ["style", "left", '21px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         timeline: [
            { id: "eid3", tween: [ "style", "${_envelope-o}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 400 },
            { id: "eid7", tween: [ "style", "${_envelope-o}", "opacity", '0', { fromValue: '1'}], position: 4028, duration: 972 },
            { id: "eid8", tween: [ "motion", "${_envelope-o}", [[70,81,0,0],[77,63,0,0]]], position: 0, duration: 400 },
            { id: "eid4", tween: [ "motion", "${_envelope-o}", [[77,63,0,0],[121,32.29,159.11,-44.67,77.06,-21.63],[264,23,0,0]]], position: 400, duration: 4600 },
            { id: "eid6", tween: [ "style", "${_envelope-o}", "height", '32px', { fromValue: '48px'}], position: 0, duration: 5000 },
            { id: "eid11", tween: [ "style", "${_RoundRect}", "width", '182px', { fromValue: '8px'}], position: 0, duration: 5000 },
            { id: "eid14", tween: [ "style", "${_RoundRect}", "top", '94px', { fromValue: '94px'}], position: 6000, duration: 0 },
            { id: "eid10", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_RoundRect}", "left", '122px', { fromValue: '122px'}], position: 6000, duration: 0 },
            { id: "eid9", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 6000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_envelope-o}", "width", '32px', { fromValue: '48px'}], position: 0, duration: 5000 }         ]
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
