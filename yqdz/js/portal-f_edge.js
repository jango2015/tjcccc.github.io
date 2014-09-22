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
            id:'breakdown',
            display:'none',
            type:'image',
            rect:['324px','47px','256px','256px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"breakdown.png",'0px','0px']
         },
         {
            id:'portal',
            type:'image',
            rect:['205px','31px','64px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"portal.png",'0px','0px']
         },
         {
            id:'arrow-circle-o',
            type:'image',
            rect:['222px','93px','32px','32px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px']
         },
         {
            id:'arrow-circle-oa',
            type:'image',
            rect:['222px','93px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px']
         },
         {
            id:'arrow-circle-o2',
            type:'image',
            rect:['173px','103px','32px','32px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['30']]
         },
         {
            id:'arrow-circle-o2a',
            type:'image',
            rect:['221px','77px','32px','32px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['30']]
         },
         {
            id:'arrow-circle-o3',
            type:'image',
            rect:['263px','103px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['-60']]
         },
         {
            id:'arrow-circle-o3Copy',
            type:'image',
            rect:['263px','103px','32px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow-circle-o.png",'0px','0px'],
            transform:[[],['-60']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_arrow-circle-o2}": [
            ["motion", "location", '189px 119px'],
            ["transform", "rotateZ", '30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "width", '32px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '12px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '0px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '12px'],
            ["style", "top", '69px'],
            ["style", "width", '0px']
         ],
         "${_breakdown}": [
            ["style", "top", '47px'],
            ["style", "height", '32px'],
            ["style", "display", 'none'],
            ["style", "left", '324px'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o}": [
            ["style", "top", '103px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '222px'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-oa}": [
            ["style", "top", '93px'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '222px'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o2a}": [
            ["style", "top", '77px'],
            ["motion", "location", '189px 119px'],
            ["transform", "rotateZ", '30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '221px'],
            ["style", "width", '32px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '475px'],
            ["style", "height", '125px'],
            ["style", "overflow", 'hidden']
         ],
         "${_portal}": [
            ["style", "top", '31px'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '205px'],
            ["style", "width", '64px']
         ],
         "${_arrow-circle-o3}": [
            ["motion", "location", '194px 110px'],
            ["transform", "rotateZ", '-30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '263px'],
            ["style", "width", '32px']
         ],
         "${_arrow-circle-o3Copy}": [
            ["motion", "location", '247.14355375977px 96.856407165527px'],
            ["transform", "rotateZ", '-30deg'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '263px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         timeline: [
            { id: "eid168", tween: [ "motion", "${_arrow-circle-o3Copy}", [[247.14,96.86,0,0],[221.86,56.83,0,0]]], position: 7000, duration: 622 },
            { id: "eid123", tween: [ "style", "${_arrow-circle-o2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid126", tween: [ "style", "${_arrow-circle-o2}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 1500 },
            { id: "eid124", tween: [ "motion", "${_arrow-circle-o2}", [[189,119,0,0],[194,110,0,0]]], position: 1250, duration: 500 },
            { id: "eid125", tween: [ "motion", "${_arrow-circle-o2}", [[194,110,0,0],[237.86,43.14,0,0]]], position: 1750, duration: 1500 },
            { id: "eid207", tween: [ "style", "${_breakdown}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid208", tween: [ "style", "${_breakdown}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
            { id: "eid209", tween: [ "style", "${_breakdown}", "display", 'none', { fromValue: 'block'}], position: 9700, duration: 0 },
            { id: "eid210", tween: [ "style", "${_breakdown}", "display", 'block', { fromValue: 'none'}], position: 9900, duration: 0 },
            { id: "eid211", tween: [ "style", "${_breakdown}", "display", 'none', { fromValue: 'block'}], position: 10100, duration: 0 },
            { id: "eid212", tween: [ "style", "${_breakdown}", "display", 'block', { fromValue: 'none'}], position: 10300, duration: 0 },
            { id: "eid131", tween: [ "style", "${_arrow-circle-o3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid134", tween: [ "style", "${_arrow-circle-o3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1500 },
            { id: "eid189", tween: [ "style", "${_RoundRect2}", "width", '32px', { fromValue: '0px'}], position: 7000, duration: 1000 },
            { id: "eid158", tween: [ "motion", "${_arrow-circle-o2a}", [[237,93,0,0],[251.85,62.13,0,0]]], position: 6250, duration: 624 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 15000, duration: 0 },
            { id: "eid132", tween: [ "motion", "${_arrow-circle-o3}", [[279,119,0,0],[275.86,110.86,0,0]]], position: 1500, duration: 500 },
            { id: "eid133", tween: [ "motion", "${_arrow-circle-o3}", [[275.86,110.86,0,0],[237.86,42.86,0,0]]], position: 2000, duration: 1500 },
            { id: "eid190", tween: [ "style", "${_RoundRect2}", "top", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_RoundRect}", "top", '43px', { fromValue: '43px'}], position: 2500, duration: 0 },
            { id: "eid4", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2500, duration: 0 },
            { id: "eid182", tween: [ "style", "${_arrow-circle-oa}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500 },
            { id: "eid214", tween: [ "style", "${_arrow-circle-oa}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 1100 },
            { id: "eid102", tween: [ "style", "${_arrow-circle-o}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid111", tween: [ "style", "${_arrow-circle-o}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1500 },
            { id: "eid181", tween: [ "style", "${_arrow-circle-oa}", "top", '29px', { fromValue: '93px'}], position: 7500, duration: 500 },
            { id: "eid151", tween: [ "style", "${_RoundRect}", "width", '10px', { fromValue: '0px'}], position: 1500, duration: 1000 },
            { id: "eid136", tween: [ "style", "${_RoundRect}", "width", '102px', { fromValue: '10px'}], position: 2500, duration: 1000 },
            { id: "eid135", tween: [ "transform", "${_arrow-circle-o3}", "rotateZ", '-30deg', { fromValue: '-30deg'}], position: 3500, duration: 0 },
            { id: "eid159", tween: [ "style", "${_arrow-circle-o2a}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 624 },
            { id: "eid213", tween: [ "style", "${_arrow-circle-o2a}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 1100 },
            { id: "eid99", tween: [ "style", "${_portal}", "top", '11px', { fromValue: '31px'}], position: 0, duration: 1000 },
            { id: "eid153", tween: [ "style", "${_portal}", "top", '61px', { fromValue: '11px'}], position: 4000, duration: 2000 },
            { id: "eid186", tween: [ "style", "${_portal}", "top", '31px', { fromValue: '61px'}], position: 10000, duration: 1000 },
            { id: "eid169", tween: [ "style", "${_arrow-circle-o3Copy}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 622 },
            { id: "eid215", tween: [ "style", "${_arrow-circle-o3Copy}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 1100 },
            { id: "eid101", tween: [ "style", "${_portal}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid152", tween: [ "style", "${_RoundRect}", "height", '12px', { fromValue: '12px'}], position: 1500, duration: 2000 },
            { id: "eid109", tween: [ "style", "${_arrow-circle-o}", "top", '93px', { fromValue: '103px'}], position: 1000, duration: 500 },
            { id: "eid110", tween: [ "style", "${_arrow-circle-o}", "top", '33px', { fromValue: '93px'}], position: 1500, duration: 1500 }         ]
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
