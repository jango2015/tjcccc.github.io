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
            fill:["rgba(0,0,0,0)",im+"car-golf7.png",'0px','0px']
         },
         {
            id:'breakdown',
            type:'image',
            rect:['225px','12px','32px','32px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"breakdown.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_car-a8l}": [
            ["style", "height", '40px'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '-100px 28px'],
            ["style", "width", '69px']
         ],
         "${_breakdown}": [
            ["style", "top", '12px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '225px'],
            ["style", "width", '32px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '471px'],
            ["style", "height", '48px'],
            ["style", "overflow", 'hidden']
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
            { id: "eid19", tween: [ "style", "${_breakdown}", "top", '0px', { fromValue: '12px'}], position: 5250, duration: 500 },
            { id: "eid20", tween: [ "style", "${_breakdown}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 500 },
            { id: "eid31", tween: [ "transform", "${_car-a8l}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 5000, duration: 500 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 8000, duration: 0 },
            { id: "eid6", tween: [ "motion", "${_car-a8l}", [[-100,28,0,0],[165,28,0,0]]], position: 0, duration: 2000 },
            { id: "eid9", tween: [ "motion", "${_car-a8l}", [[165,28,0,0],[175,28,0,0]]], position: 2000, duration: 250 },
            { id: "eid10", tween: [ "motion", "${_car-a8l}", [[175,28,0,0],[165,28,0,0]]], position: 2250, duration: 250 },
            { id: "eid21", tween: [ "motion", "${_car-a8l}", [[165,28,0,0],[175,28,0,0]]], position: 3250, duration: 250 },
            { id: "eid24", tween: [ "motion", "${_car-a8l}", [[175,28,0,0],[165,28,0,0]]], position: 3500, duration: 250 },
            { id: "eid29", tween: [ "motion", "${_car-a8l}", [[165,28,0,0],[195,28,0,0]]], position: 4129, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "dz-car-golf7-e");
