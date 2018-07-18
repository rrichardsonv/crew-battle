function compose(firstFunction, ...functions){
  return function(...args){
    var result = firstFunction(...args);

    for(var i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }

    return result;
  }
}



var x = 1
var y = 3

var xy = add(x, y)
var z = 2;
var result = multiply(b, a)

multiply(a) => 2 * a

var addMultiply = compose(
  add,
  (
    curry(multiply)
  )(z)
);


addMultiply()

const addthreenumbers = (x, y, z) => x + y + z;


var curryFn = curry(addthreenumbers);

var nextCurry = curryFn(1)


function curry(fn,arity = fn.length) {
	return (
    function nextCurried(prevArgs){
      return function curried(nextArg){
        var args = prevArgs.concat([nextArg]);
  
        if (args.length >= arity) {
          return fn(...args);
        }
  
        else {
          return nextCurried(args);
        }

      };
    }
  )([]);
}