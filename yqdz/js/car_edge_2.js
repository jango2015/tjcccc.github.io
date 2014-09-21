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
            id:'car',
            type:'image',
            rect:['0px','18px','100px','58px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"car.png",'0px','0px'],
            userClass:"dz-car"
         },
         {
            id:'breakdown',
            display:'none',
            type:'image',
            rect:['438','174','256px','256px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"breakdown.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '76px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '598px']
         ],
         "${_car}": [
            ["style", "height", '58px'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '50px 47px'],
            ["style", "width", '100px']
         ],
         "${_breakdown}": [
            ["transform", "scaleY", '-0.25977'],
            ["style", "display", 'none'],
            ["style", "height", '139px'],
            ["motion", "location", '344.5px 28.5px'],
            ["transform", "scaleX", '0.25977'],
            ["style", "width", '139px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5007,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_breakdown}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_breakdown}", "display", 'none', { fromValue: 'none'}], position: 3250, duration: 0 },
            { id: "eid43", tween: [ "style", "${_breakdown}", "display", 'block', { fromValue: 'none'}], position: 3342, duration: 0 },
            { id: "eid41", tween: [ "style", "${_breakdown}", "display", 'block', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid38", tween: [ "motion", "${_breakdown}", [[344.5,28.5,0,0],[344.5,19.95,0,0]]], position: 3250, duration: 1250 },
            { id: "eid31", tween: [ "style", "${_breakdown}", "width", '139px', { fromValue: '139px'}], position: 3250, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_car}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_car}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 3000, duration: 124 },
            { id: "eid23", tween: [ "transform", "${_car}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 5007, duration: 0 },
            { id: "eid29", tween: [ "transform", "${_breakdown}", "scaleY", '-0.25977', { fromValue: '-0.25977'}], position: 3250, duration: 0 },
            { id: "eid5", tween: [ "motion", "${_car}", [[-97.55,47,0,0],[89.47,47,11.61,0,74.33,0],[299,47,11.32,0]]], position: 0, duration: 2500 },
            { id: "eid7", tween: [ "motion", "${_car}", [[299,47,378.59,0],[299,47,0,0]]], position: 2500, duration: 2507 },
            { id: "eid28", tween: [ "transform", "${_breakdown}", "scaleX", '0.25977', { fromValue: '0.25977'}], position: 3250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_breakdown}", "height", '139px', { fromValue: '139px'}], position: 3250, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "dz-car-act-a-bd");
