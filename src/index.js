export function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

Array.from("abc"); // ['a', 'b', 'c']

export function clone(source) {
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
