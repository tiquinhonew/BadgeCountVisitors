const express = require("express");
const badgen = require("badgen");
const shields = require("shields-lightweight");

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
  var { color, subject, style } = req.query;
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

            subject ? "Visitas" : subject;
            color ? "red" : color;
            style ? "flat" : style;

            const response =
              {
                schemaVersion: 1,
                label: subject,
                message: count.toString(),
                color: color,
                style: style
              }
            ;

            res.json(response);
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
