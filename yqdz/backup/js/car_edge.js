/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='../img/';

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
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '598px'],
            ["style", "height", '76px'],
            ["style", "overflow", 'hidden']
         ],
         "${_car}": [
            ["style", "height", '58px'],
            ["motion", "location", '50px 47px'],
            ["style", "width", '100px']
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
            { id: "eid5", tween: [ "motion", "${_car}", [[-97.55,47,0,0],[89.47,47,399.9,0,74.33,0],[648,47,0,0]]], position: 0, duration: 5007 }         ]
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
})(jQuery, AdobeEdge, "dz-car-act-a-cc");
