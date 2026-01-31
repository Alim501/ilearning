const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

function gcd(a, b) {
  while (b !== 0) {
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
