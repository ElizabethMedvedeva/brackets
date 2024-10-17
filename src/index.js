module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketMap = {};

  bracketsConfig.forEach(([open, close]) => {
    bracketMap[open] = close;
  });

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];
    if (bracket === bracketMap[bracket]) {
      if (stack[stack.length - 1] === bracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
      continue;
    }
    // для работы с обычными скобками {}/[]/()
    if (bracket in bracketMap) {
      stack.push(bracket);
    } else {
      if (bracket !== bracketMap[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
