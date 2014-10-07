var wrapperCurrentPage = "PAGE_A";
var loadedComps = {};

AdobeEdge.bootstrapCallback(function(compId) {

  loadedComps[compId] = AdobeEdge.getComposition(compId);

  // now it is safe to call into the and bind to things like...
  AdobeEdge.Symbol.bindTimelineAction(compId, "stage", "Default Timeline", "complete", function(sym, e){
    //loop        
    if(compId == wrapperCurrentPage) {
      if (compId == "PAGE_A") {
        wrapperCurrentPage = "PAGE_B";
        $("#StageA").hide();
        $("#StageB").show();
      }           
      else if (compId == "PAGE_B") {
        wrapperCurrentPage = "PAGE_C";
        $("#StageB").hide();
        $("#StageC").show();
      }
      else {
        wrapperCurrentPage = "PAGE_A";
        $("#StageC").hide();
        $("#StageA").show();
      }
      if(loadedComps[wrapperCurrentPage]) {
        loadedComps[wrapperCurrentPage].getStage().play(0);
      }
      else {
      //it will play itself when loaded
      }
    }
  });

});