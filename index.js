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
  const xStr = req.query.x;
  const yStr = req.query.y;

  const isNatural = /^\d+$/;

  if (!isNatural.test(xStr) || !isNatural.test(yStr)) {
    res.send("NaN");
    return;
  }

  const x = parseInt(xStr, 10);
  const y = parseInt(yStr, 10);

  if (x <= 0 || y <= 0) {
    res.send("NaN");
    return;
  }

  const result = lcm(x, y);
  res.send(result.toString());
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
