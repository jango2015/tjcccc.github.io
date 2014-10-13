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
            id:'car-a8l',
            type:'image',
            rect:['-150px','8px','69px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"car-a8l.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '48px'],
            ["style", "width", '471px']
         ],
         "${_car-a8l}": [
            ["style", "height", '40px'],
            ["motion", "location", '-100px 28px'],
            ["style", "width", '69px']
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
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "motion", "${_car-a8l}", [[-100,28,0,0],[600.04,28,0,0]]], position: 0, duration: 8000 }         ]
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
})(jQuery, AdobeEdge, "dz-car-a8l");
