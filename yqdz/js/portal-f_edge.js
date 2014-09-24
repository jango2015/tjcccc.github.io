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
            id:'RoundRect',
            type:'rect',
            rect:['54px','41px','10px','16px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['54px','41px','10px','16px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'portal',
            type:'image',
            rect:['205px','68px','64px','64px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"portal.png",'0px','0px']
         },
         {
            id:'arrow-circle-o1',
            type:'image',
            rect:['222px','93px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px']
         },
         {
            id:'arrow-circle-o2',
            type:'image',
            rect:['138px','153px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['30']]
         },
         {
            id:'arrow-circle-o3',
            type:'image',
            rect:['285px','162px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['-60']]
         },
         {
            id:'arrow-circle-o1a',
            type:'image',
            rect:['222px','41px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px']
         },
         {
            id:'arrow-circle-o2a',
            type:'image',
            rect:['228px','89px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['30']]
         },
         {
            id:'arrow-circle-o3a',
            type:'image',
            rect:['212px','92px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['-60']]
         },
         {
            id:'success',
            type:'image',
            rect:['304px','47px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"breakdown.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_arrow-circle-o2}": [
            ["style", "top", '153px'],
            ["motion", "location", '164px 158.85645917968px'],
            ["transform", "rotateZ", '30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '138px'],
            ["style", "width", '32px']
         ],
         "${_RoundRect}": [
            ["style", "height", '12px'],
            ["style", "top", '81px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '0px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '12px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '107px'],
            ["style", "width", '0px']
         ],
         "${_arrow-circle-o1a}": [
            ["style", "top", '141px'],
            ["motion", "location", '238px 107px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o1}": [
            ["motion", "location", '238px 175px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o3}": [
            ["style", "top", '162px'],
            ["motion", "location", '300.84997749024px 158.8563739746px'],
            ["transform", "rotateZ", '-30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '285px'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o3a}": [
            ["style", "top", '137px'],
            ["motion", "location", '227.85636538082px 107.85642805176px'],
            ["transform", "rotateZ", '-30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '228px'],
            ["style", "width", '32px']
         ],
         "${_portal}": [
            ["style", "top", '68px'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '206px'],
            ["style", "width", '64px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '200px'],
            ["style", "width", '475px']
         ],
         "${_success}": [
            ["style", "top", '76px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '304px'],
            ["style", "width", '48px']
         ],
         "${_arrow-circle-o2a}": [
            ["style", "top", '89px'],
            ["motion", "location", '243.85643222654px 106.85636356202px'],
            ["transform", "rotateZ", '30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '228px'],
            ["style", "width", '32px']
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
            { id: "eid266", tween: [ "motion", "${_arrow-circle-o2a}", [[244,105,0,0],[269.86,73.14,0,0]]], position: 3750, duration: 250 },
            { id: "eid233", tween: [ "style", "${_arrow-circle-o2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid235", tween: [ "style", "${_arrow-circle-o2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_success}", "width", '48px', { fromValue: '48px'}], position: 5750, duration: 0 },
            { id: "eid232", tween: [ "motion", "${_arrow-circle-o2}", [[154,169,0,0],[163,158.86,0,0]]], position: 750, duration: 250 },
            { id: "eid234", tween: [ "motion", "${_arrow-circle-o2}", [[163,158.86,0,0],[227.85,94.86,0,0]]], position: 1000, duration: 1000 },
            { id: "eid237", tween: [ "style", "${_arrow-circle-o3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid239", tween: [ "style", "${_arrow-circle-o3}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 1000 },
            { id: "eid253", tween: [ "motion", "${_arrow-circle-o3a}", [[227.86,107.86,0,0],[211.13,75.86,0,0]]], position: 4000, duration: 250 },
            { id: "eid194", tween: [ "style", "${_success}", "height", '48px', { fromValue: '48px'}], position: 5750, duration: 0 },
            { id: "eid254", tween: [ "style", "${_arrow-circle-o3a}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 250 },
            { id: "eid279", tween: [ "style", "${_RoundRect2}", "width", '32px', { fromValue: '0px'}], position: 3750, duration: 500 },
            { id: "eid273", tween: [ "motion", "${_arrow-circle-o1a}", [[238,107,0,0],[238,67,0,0]]], position: 3500, duration: 250 },
            { id: "eid192", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 750 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 8000, duration: 0 },
            { id: "eid225", tween: [ "style", "${_arrow-circle-o1}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid227", tween: [ "style", "${_arrow-circle-o1}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1000 },
            { id: "eid236", tween: [ "motion", "${_arrow-circle-o3}", [[301,178,0,0],[291.86,162.86,0,0]]], position: 1000, duration: 250 },
            { id: "eid238", tween: [ "motion", "${_arrow-circle-o3}", [[291.86,162.86,0,0],[249.86,99.86,0,0]]], position: 1250, duration: 1000 },
            { id: "eid276", tween: [ "style", "${_RoundRect2}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid277", tween: [ "style", "${_RoundRect}", "top", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
            { id: "eid201", tween: [ "style", "${_success}", "top", '76px', { fromValue: '76px'}], position: 5750, duration: 0 },
            { id: "eid246", tween: [ "style", "${_arrow-circle-o1a}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250 },
            { id: "eid224", tween: [ "motion", "${_arrow-circle-o1}", [[238,175,0,0],[238,165,0,0]]], position: 1250, duration: 250 },
            { id: "eid226", tween: [ "motion", "${_arrow-circle-o1}", [[238,165,0,0],[238,92,0,0]]], position: 1500, duration: 1000 },
            { id: "eid240", tween: [ "style", "${_RoundRect}", "width", '110px', { fromValue: '0px'}], position: 1764, duration: 736 },
            { id: "eid267", tween: [ "style", "${_arrow-circle-o2a}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 250 },
            { id: "eid281", tween: [ "style", "${_success}", "left", '325px', { fromValue: '304px'}], position: 5000, duration: 750 },
            { id: "eid278", tween: [ "style", "${_portal}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "dz-portal-f");
