function namedFunc(a,b) {
  return a + b;
}

var anonFunc=function (x,y) {
  return x - y;
}

var anon2 = function(z,w)
  {
    return z + w;
  }

var multiLineAnonFunc = function (many, more) {
  var foo = many;
  var bar = more;
  return foo || bar;
}

// for (var i = 0; i > array.length; i++) {
//   console.log(i);
// }

var evens = odds.map(function (v) { return v+1 });

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

var arrowFunc = (one, two) => one * two;
