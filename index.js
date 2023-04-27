const express = require("express");
const { makeBadge, ValidationError } = require("badge-maker");

const app = express();
const port = 3000;

// Cria uma tabela no SQLite para armazenar informações de visitantes
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(function () {
  db.run("CREATE TABLE visitors (ip TEXT, date TEXT)");
});

// Cria uma rota que retorna o número total de visitantes

app.get("/badge", (req, res) => {
  var { color, labelColor, label, style } = req.query;
  const ip = req.ip;
  const date = new Date().toISOString();

  db.run(
    "INSERT INTO visitors (ip, date) VALUES (?, ?)",
    [ip, date],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Erro ao registrar visitante");
      } else {
        db.get("SELECT COUNT(*) as count FROM visitors", function (err, row) {
          if (err) {
            console.error(err.message);
            res.status(500).send("Erro ao buscar visitantes");
          } else {
            const count = row.count;

            if (typeof label === "undefined" || label === "") {
              label = "Visitas";
            }
            if (typeof color === "undefined" || color === "") {
              color = "red";
            }
            if (typeof labelColor === "undefined" || labelColor === "") {
                labelColor = "grey";
            }
            if (typeof style === "undefined" || style === "") {
              style = "flat";
            }

            const format = {
              label: label,
              message: count.toString(),
              color: color,
              labelColor: labelColor,
              style: style
            };

            const svg = makeBadge(format);
  
            res.set('Content-Type', 'image/svg+xml');
            res.send(svg);
          }
        });
      }
    }
  );
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
