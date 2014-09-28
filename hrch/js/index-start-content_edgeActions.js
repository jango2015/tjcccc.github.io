/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_is-1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         jQuery(".is-ml-a").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-1}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         jQuery(".is-ml-a").fadeOut(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         jQuery(".is-ml-b").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         jQuery(".is-ml-c").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-4}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         jQuery(".is-ml-d").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         jQuery(".is-ml-e").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         jQuery(".is-ml-b").fadeOut(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         jQuery(".is-ml-c").fadeOut(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-4}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         jQuery(".is-ml-d").fadeOut(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_is-5}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         jQuery(".is-ml-e").fadeOut(500);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "index-start-content");