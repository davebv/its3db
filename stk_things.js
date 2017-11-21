
var s = Snap("#mainpage");

var l = Snap.load("./stk_things.svg", onSVGLoaded);

function onSVGLoaded(data) {
  s.append(data);
  main()
}


function f_in() {
  var scalef = 1.5;
  var c = this.getBBox();
  cx = (c.x+c.x+c.width)/2;
  cy = (c.y+c.y+c.width)/2;
  var xtr = (1 - scalef)*(cx);
  var ytr = (1 - scalef)*(cy);
  this.animate({transform: 'translate(' + xtr + ', ' + ytr + ') scale(' + scalef + ') '}, 400, mina.elastic);
}
function f_out() {
  this.animate({transform: 'translate(0,0) scale(1)'}, 400, mina.elastic);
}

function main() {
  var bg = s.select("#stk_things_cover");
  //var cr_w = s.select("#cr_w");
  var cr_w = s.select("g#gcenter");
  //bg.attr({style: 'position: absolute;'});

  cr_w.hover(f_in, f_out);
}
