
function runTests() {
    testCountOfTotalAnchors();
    testCountOfNavDrpDwnAnchors();
  }

  function testCountOfNavDrpDwnAnchors() {
    const anchors = document.getElementById("myDropdown").getElementsByTagName("a");
   const testLength = new RegExp(anchors.length).test("4");
   alert("Test Correct count of NavDrpDwnAnchors! a) Length: " + anchors.length + " || b) Passed Test = " + testLength);
 }

 function testCountOfTotalAnchors() {
    const anchors = document.getElementsByTagName("a");
   const testLength = new RegExp(anchors.length).test("9");
   alert("Test Correct count of Total Anchors! a) Length: " + anchors.length + " || b) Passed Test = " + testLength);
 }
  
  
  
  