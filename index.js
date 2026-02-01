const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  while (b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(x, y) {
  const X = BigInt(x);
  const Y = BigInt(y);
  return (X * Y) / gcd(X, Y);
}

app.get("/app/alimzhan_mamurbekov_mail_ru", (req, res) => {
const xStr = req.query.x?.replace(/ /g, '+'); 
const yStr = req.query.y?.replace(/ /g, '+');
  const x = Number(xStr);
  const y = Number(yStr);
  console.log(`Received x: ${xStr}, y: ${yStr}`);
  console.log(`Parsed x: ${x}, y: ${y}`);
  if (
    isNaN(x) ||
    isNaN(y) ||
    !isFinite(x) ||
    !isFinite(y) ||
    !Number.isInteger(x) ||
    !Number.isInteger(y) ||
    x <= 0 ||
    y <= 0
  ) {
    console.log("isNan", isNaN(x), isNaN(y));
    console.log("isFinite", isFinite(x), isFinite(y));
    console.log("isInteger", Number.isInteger(x), Number.isInteger(y));
    console.log("x <= 0", x <= 0);
    console.log("y <= 0", y <= 0);
    res.send("NaN");
    return;
  }

  const result = lcm(x, y);
  res.send(result.toString());
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
