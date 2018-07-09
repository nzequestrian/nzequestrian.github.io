function runTests() {
  testThatIHaveThreeBioImages();
  testCountOfNavDrpDwnAnchors();
}

function testCountOfNavDrpDwnAnchors() {
  const anchors = document.getElementById("myDropdown").getElementsByTagName("a");
 const testLength = new RegExp(anchors.length).test("4");
 alert("Test Correct count of NavDrpDwnAnchors! a) Length: " + anchors.length + " || b) Passed Test = " + testLength);
}

function testThatIHaveThreeBioImages() {
  let imgs = document.getElementsByTagName("img");
  const testLength = new RegExp(imgs.length).test("3");
  alert("Test Correct count of Images! a) Length: " + imgs.length + " || b) Passed Test = " + testLength);
}