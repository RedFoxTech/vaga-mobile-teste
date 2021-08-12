export const formatPad = (number: string, length = 3) => {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }

  return str;
};
