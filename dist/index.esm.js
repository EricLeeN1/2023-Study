/*!
* EricLibrary 1.0.0
* Licensed under MIT;
*/

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

console.log(type([]));
console.log(type({}));

function clone(source) {
  const t = type(source);
  if (t !== "object" && t !== "array") {
    return source;
  }
  let target;
  if (t === "object") {
    target = {};
    for (const i in source) {
      if (Object.hasOwnProperty(i)) {
        target[i] = clone(source[i]);
      }
    }
  } else {
    target = [];
    for (let i = 0; i < array.length; i++) {
      target[i] = clone(source[i]);
    }
  }
  return target;
}

export { type, clone };
