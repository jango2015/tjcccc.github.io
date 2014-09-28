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
            id:'is-bg',
            type:'image',
            rect:['0px','0px','975px','832px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-bg.png",'0px','0px']
         },
         {
            id:'is-5',
            type:'image',
            rect:['289px','443px','270px','250px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-5.png",'0px','0px'],
            userClass:"is-menu is-m-e"
         },
         {
            id:'is-4',
            type:'image',
            rect:['487px','535px','264px','188px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-4.png",'0px','0px'],
            userClass:"is-menu is-m-d"
         },
         {
            id:'is-3',
            type:'image',
            rect:['691px','449px','254px','252px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-3.png",'0px','0px'],
            userClass:"is-menu is-m-c"
         },
         {
            id:'is-2',
            type:'image',
            rect:['785px','257px','189px','266px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-2.png",'0px','0px'],
            userClass:"is-menu is-m-b"
         },
         {
            id:'is-1',
            type:'image',
            rect:['612px','35px','340px','284px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-1.png",'0px','0px'],
            userClass:"is-menu is-m-a"
         },
         {
            id:'is-hrch',
            type:'image',
            rect:['506px','344px','258px','62px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-hrch.png",'0px','0px']
         },
         {
            id:'is-motorcycle',
            type:'image',
            rect:['241px','223px','314px','240px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-motorcycle.png",'0px','0px']
         },
         {
            id:'is-mouse',
            type:'image',
            rect:['514px','144px','80px','65px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-mouse.png",'0px','0px']
         },
         {
            id:'is-choose',
            type:'image',
            rect:['335px','68px','262px','56px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-choose.png",'0px','0px']
         },
         {
            id:'is-sbdj',
            type:'image',
            rect:['338px','144px','255px','19px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"is-sbdj.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_is-2}": [
            ["style", "top", '257px'],
            ["style", "opacity", '0'],
            ["style", "left", '785px']
         ],
         "${_is-motorcycle}": [
            ["style", "top", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '241px']
         ],
         "${_is-mouse}": [
            ["style", "top", '144px'],
            ["style", "opacity", '0'],
            ["style", "left", '514px']
         ],
         "${_is-3}": [
            ["style", "top", '449px'],
            ["style", "opacity", '0'],
            ["style", "left", '691px']
         ],
         "${_is-hrch}": [
            ["style", "top", '344px'],
            ["style", "opacity", '0'],
            ["style", "left", '506px']
         ],
         "${_is-choose}": [
            ["style", "top", '68px'],
            ["style", "opacity", '0'],
            ["style", "left", '335px']
         ],
         "${_is-sbdj}": [
            ["style", "top", '144px'],
            ["style", "opacity", '0'],
            ["style", "left", '338px']
         ],
         "${_is-bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_is-5}": [
            ["style", "top", '443px'],
            ["style", "opacity", '0'],
            ["style", "left", '289px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '1059px'],
            ["style", "height", '902px'],
            ["style", "overflow", 'hidden']
         ],
         "${_is-4}": [
            ["style", "top", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '487px']
         ],
         "${_is-1}": [
            ["style", "top", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '612px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2300,
         autoPlay: true,
         timeline: [
            { id: "eid15", tween: [ "style", "${_is-mouse}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 100 },
            { id: "eid16", tween: [ "style", "${_is-mouse}", "opacity", '0', { fromValue: '1'}], position: 1850, duration: 100 },
            { id: "eid17", tween: [ "style", "${_is-mouse}", "opacity", '1', { fromValue: '0.000000'}], position: 1950, duration: 100 },
            { id: "eid18", tween: [ "style", "${_is-bg}", "opacity", '1', { fromValue: '0'}], position: 1150, duration: 1150 },
            { id: "eid13", tween: [ "style", "${_is-sbdj}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 200 },
            { id: "eid7", tween: [ "style", "${_is-hrch}", "opacity", '1', { fromValue: '0'}], position: 1150, duration: 150 },
            { id: "eid11", tween: [ "style", "${_is-sbdj}", "top", '114px', { fromValue: '144px'}], position: 1300, duration: 200 },
            { id: "eid8", tween: [ "style", "${_is-motorcycle}", "left", '181px', { fromValue: '241px'}], position: 1200, duration: 300 },
            { id: "eid12", tween: [ "style", "${_is-choose}", "opacity", '1', { fromValue: '0'}], position: 1300, duration: 200 },
            { id: "eid5", tween: [ "style", "${_is-4}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 250 },
            { id: "eid2", tween: [ "style", "${_is-2}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 250 },
            { id: "eid6", tween: [ "style", "${_is-5}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 250 },
            { id: "eid10", tween: [ "style", "${_is-choose}", "top", '38px', { fromValue: '68px'}], position: 1300, duration: 200 },
            { id: "eid4", tween: [ "style", "${_is-3}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 250 },
            { id: "eid9", tween: [ "style", "${_is-motorcycle}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 300 },
            { id: "eid1", tween: [ "style", "${_is-1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "index-start-content");
