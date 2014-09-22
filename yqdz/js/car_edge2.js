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
            rect:['-100px','47px','100px','58px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"car.png",'0px','0px']
         },
         {
            id:'breakdown2',
            type:'image',
            rect:['269px','35px','36px','36px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"breakdown.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '105px'],
            ["style", "width", '471px']
         ],
         "${_car}": [
            ["style", "top", '47px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '58px'],
            ["style", "left", '-156px'],
            ["style", "width", '100px']
         ],
         "${_breakdown2}": [
            ["style", "top", '35px'],
            ["style", "height", '36px'],
            ["style", "opacity", '0'],
            ["style", "left", '263px'],
            ["style", "width", '36px']
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
            { id: "eid29", tween: [ "style", "${_breakdown2}", "top", '19px', { fromValue: '35px'}], position: 3000, duration: 1000 },
            { id: "eid20", tween: [ "transform", "${_car}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 2750, duration: 500 },
            { id: "eid19", tween: [ "style", "${_car}", "left", '186px', { fromValue: '-156px'}], position: 0, duration: 2500 },
            { id: "eid26", tween: [ "style", "${_breakdown2}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000 },
            { id: "eid31", tween: [ "style", "${_breakdown2}", "left", '263px', { fromValue: '263px'}], position: 3000, duration: 0 }         ]
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
