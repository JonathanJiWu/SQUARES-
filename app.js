var generateS = (numS) => {
  for (let i = 0; i <= numS; i++) {
    // create a new html element
    let square = $("<div>").addClass("square");
    // generate random colors
    square.css('background-color', generateC())
    // add the num of each square
    // square.text(i)
    // have the class of .suare
    // append it to the body
    $("body").append(square);
  }

};
var generateC = () => {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  return 'rgb(' +red +', '+ green+',' +blue+')'
};
// pink squares
var generateSP = (numS) => {
  for (let i = 0; i <= numS; i++) {
    // create a new html element
    let square = $("<div>").addClass("square");
    // generate random colors
    square.css('background-color', generateCP())
    // add the num of each square
    // square.text(i)
    // have the class of .suare
    // append it to the body
    $("body").append(square);
  }

};
var generateCP = () => {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  return 'rgb(' +red +', '+ green+',' +blue+')'
};