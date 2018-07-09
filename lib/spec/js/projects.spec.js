function runTests() {
    testThatIHaveThreeCollapsibleObjects();
    testCountOfNavDrpDwnAnchors();
  }
  
  function testThatIHaveThreeCollapsibleObjects() {
    let collLength = document.getElementsByClassName("collapsible").length;
    let testLength = new RegExp(collLength).test("3");
    alert("Virtual Pets Collapsible's Test! a) Length: " + collLength + " || b) Passed Test = " + testLength);
  }
  
  
  function testCountOfNavDrpDwnAnchors() {
     const anchors = document.getElementById("myDropdown").getElementsByTagName("a");
    const testLength = new RegExp(anchors.length).test("4");
    alert("Test Correct count of NavDrpDwnAnchors! a) Length: " + anchors.length + " || b) Passed Test = " + testLength);
  }