var a = ['Abstract', '', 'I'];
var b = ['Masked', 'Hidden', ''];
var c = ['Client', 'Server', ''];
var d = ['Player', 'Hand', 'Trick', 'Packet'];
var e = ['Definition', 'Utils', '', ''];

function makeAClass() {
  var result = rand(a) + rand(b) + rand(c) + rand(c) + rand(d) + rand(e);

  alert(result);
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
