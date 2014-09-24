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
            id:'sap',
            type:'image',
            rect:['79px','47px','200px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sap.png",'0px','0px']
         },
         {
            id:'success',
            type:'image',
            rect:['352px','63px','36px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"success2.png",'0px','0px']
         },
         {
            id:'search',
            type:'image',
            rect:['215px','87px','64px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"search.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '475px'],
            ["style", "height", '200px'],
            ["style", "overflow", 'hidden']
         ],
         "${_success}": [
            ["style", "top", '76px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '304px'],
            ["style", "width", '48px']
         ],
         "${_search}": [
            ["style", "top", '87px'],
            ["motion", "location", '227.07032775879px 63px'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '215px'],
            ["style", "width", '64px']
         ],
         "${_sap}": [
            ["style", "top", '47px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '79px'],
            ["style", "width", '200px']
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
            { id: "eid23", tween: [ "style", "${_sap}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid24", tween: [ "style", "${_search}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid31", tween: [ "style", "${_search}", "opacity", '1', { fromValue: '1'}], position: 2563, duration: 0 },
            { id: "eid22", tween: [ "style", "${_success}", "left", '325px', { fromValue: '304px'}], position: 5000, duration: 750 },
            { id: "eid21", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 750 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 8000, duration: 0 },
            { id: "eid25", tween: [ "motion", "${_search}", [[247,119,0,0],[218.83,116.19,-6.18,-4.7,-48.23,-36.68],[207.7,91.48,-0.09,-10.13,-0.41,-44.12],[227.8,65.02,19.92,-7.41,39.2,-14.58],[267.45,77.79,15.57,23.07,37.07,54.91],[270.32,103.68,-14.37,25.09,-13.26,23.15],[254,117,0,0]]], position: 1000, duration: 1875 },
            { id: "eid26", tween: [ "motion", "${_search}", [[247,119,0,0],[218.83,116.19,-6.18,-4.7,-48.23,-36.68],[207.7,91.48,-0.09,-10.13,-0.41,-44.12],[227.8,65.02,19.92,-7.41,39.2,-14.58],[267.45,77.79,15.57,23.07,37.07,54.91],[270.32,103.68,-14.37,25.09,-13.26,23.15],[254,117,0,0]]], position: 2875, duration: 1875 }         ]
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
})(jQuery, AdobeEdge, "dz-sap");
