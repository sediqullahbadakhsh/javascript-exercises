const repeatString = function (name, repeate) {
  if (repeate < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < repeate; i++) {
    string += name;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
