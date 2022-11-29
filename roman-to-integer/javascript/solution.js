var romanToInt = function (s) {
  let int = 0;
  for (let i = s.length; i >= 0; i--) {
    switch (s[i]) {
      case "I":
        {
          if (s[i + 1] === "X") {
            int += 9;
          } else if (s[i + 1] === "V") {
            int += 4;
          } else {
            int += 1;
          }
        }
        break;

      case "V":
        {
          if (s[i - 1] === "I") {
            int += 0;
          } else {
            int += 5;
          }
        }
        break;
      case "X":
        {
          if (s[i + 1] === "L") {
            int += 40;
          } else if (s[i + 1] === "C") {
            int += 90;
          } else if (s[i - 1] === "I") {
            int += 0;
          } else {
            int += 10;
          }
        }
        break;
      case "L":
        {
          if (s[i - 1] === "X") {
            int += 0;
          } else {
            int += 50;
          }
        }
        break;
      case "C":
        {
          if (s[i + 1] === "D") {
            int += 400;
          } else if (s[i + 1] === "M") {
            int += 900;
          } else if (s[i - 1] === "X") {
            int += 0;
          } else {
            int += 100;
          }
        }
        break;
      case "D":
        {
          if (s[i - 1] === "C") {
            int += 0;
          } else {
            int += 500;
          }
        }
        break;
      case "M":
        {
          if (s[i - 1] === "C") {
            int += 0;
          } else {
            int += 1000;
          }
        }
        break;
      default:
        int += 0;
    }
  }
  return int;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("DCXXI"));
