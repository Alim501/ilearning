const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(a, b) {
  while (b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get("/app/alimzhan_mamurbekov_mail_ru", (req, res) => {
  const xStr = req.query.x;
  const yStr = req.query.y;

  const isNatural = /^[1-9]\d*$/;

  if (!isNatural.test(xStr) || !isNatural.test(yStr)) {
    res.send("NaN");
    return;
  }

  const x = BigInt(xStr);
  const y = BigInt(yStr);

  const result = lcm(x, y);
  res.send(result.toString());
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));