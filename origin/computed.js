
var Dep = {
  target: null
};

var trace = function (message) {
  if(false)
    console.log('[trace]' + message);
};

function defineReactive(obj, key, val) {
  var deps = [];
  Object.defineProperty(obj, key, {
    get: function () {
      if(Dep.target && deps.indexOf(Dep.target) == -1){
        deps.push(Dep.target);
      }
      return val;
    },
    set: function (newValue) {
      val = newValue;
      for(var i=0; i< deps.length; i++){
        deps[i]();
      }
    }
  })
}

function defineComputed(obj, key, computeFunc, callbackFunc) {
  var onDependencyUpdated = function () {
    var value = computeFunc();
    callbackFunc(value);
  }

  Object.defineProperty(obj, key, {
    get: function () {
      Dep.target = onDependencyUpdated;

      var value = computeFunc();
      Dep.target = null;

      return value;
    },
    set: function () {
      console.warn('nope!');
    }
  })
}


var person = {};
defineReactive(person, 'age', 16);
defineReactive(person, 'country', 'CHina');

defineComputed(person, 'status', function () {
    if (person.age > 18) {
      return 'Adult';
    } else {
      return 'MINOR';
    }
}, function (newValue) {
    console.log ("CHANGED!! The person's status is now: " + newValue);
});

console.log ("Current age: " + person.age)
console.log ("Current status: " + person.status)

// change age
console.log ("Changing age");
person.age = 22;

person.age = 23;
