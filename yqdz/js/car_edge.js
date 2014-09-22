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
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            /*["color", "background-color", 'rgba(0,0,0,0.00)'],*/
            ["style", "overflow", 'hidden'],
            ["style", "height", '105px'],
            ["style", "width", '471px']
         ],
         "${_car}": [
            ["style", "height", '58px'],
            ["style", "top", '47px'],
            ["style", "left", '-156px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_car}", "left", '547px', { fromValue: '-156px'}], position: 0, duration: 5000 }         ]
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
