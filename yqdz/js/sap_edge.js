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
            rect:['79px','14px','200px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sap.png",'0px','0px']
         },
         {
            id:'success',
            type:'image',
            rect:['352px','63px','36px','36px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"success.png",'0px','0px']
         },
         {
            id:'search',
            type:'image',
            rect:['195px','31px','64px','64px','auto','auto'],
            opacity:0,
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
            ["style", "height", '125px'],
            ["style", "overflow", 'hidden']
         ],
         "${_success}": [
            ["style", "top", '63px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '334px'],
            ["style", "width", '48px']
         ],
         "${_search}": [
            ["style", "opacity", '0'],
            ["style", "width", '64px'],
            ["motion", "location", '227.07032775879px 63px'],
            ["style", "height", '64px']
         ],
         "${_sap}": [
            ["style", "top", '14px'],
            ["style", "height", '97px'],
            ["style", "left", '79px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13000,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "style", "${_success}", "left", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_success}", "width", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_search}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid10", tween: [ "style", "${_search}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500 },
            { id: "eid11", tween: [ "style", "${_success}", "height", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_success}", "top", '39px', { fromValue: '63px'}], position: 8500, duration: 1500 },
            { id: "eid5", tween: [ "motion", "${_search}", [[227.07,63,0,0],[245.44,33.75,17.88,-6.06,31.03,-10.51],[269.43,34.06,17.43,9.37,22.43,12.06],[286.17,59.49,-3.9,32.92,-4.8,40.53],[273.17,84.6,-5.2,4.91,-27.83,26.27],[257.84,87.15,-16.77,-1.94,-21.3,-2.46],[243.83,82.84,-29.96,-9.82,-6.23,-2.04],[226,63,0,0]]], position: 500, duration: 2500 },
            { id: "eid8", tween: [ "motion", "${_search}", [[227.07,63,0,0],[245.44,33.75,17.88,-6.06,31.03,-10.51],[269.43,34.06,17.43,9.37,22.43,12.06],[286.17,59.49,-3.9,32.92,-4.8,40.53],[273.17,84.6,-5.2,4.91,-27.83,26.27],[257.84,87.15,-16.77,-1.94,-21.3,-2.46],[243.83,82.84,-29.96,-9.82,-6.23,-2.04],[226,63,0,0]]], position: 3000, duration: 2500 },
            { id: "eid9", tween: [ "motion", "${_search}", [[227.07,63,0,0],[245.44,33.75,17.88,-6.06,31.03,-10.51],[269.43,34.06,17.43,9.37,22.43,12.06],[286.17,59.49,-3.9,32.92,-4.8,40.53],[273.17,84.6,-5.2,4.91,-27.83,26.27],[257.84,87.15,-16.77,-1.94,-21.3,-2.46],[243.83,82.84,-29.96,-9.82,-6.23,-2.04],[226,63,0,0]]], position: 5500, duration: 2500 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 11000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 1500 }         ]
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
