const express = require("express");
const { makeBadge, ValidationError } = require("badge-maker");

const app = express();
const port = 3000;

// Cria uma tabela no SQLite para armazenar informações de visitantes
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./badgeCount.db");

db.serialize(function () {
  db.run("CREATE TABLE IF NOT EXISTS visitors (ip TEXT, date TEXT, pageid TEXT)");
});

// Cria uma rota que retorna o número total de visitantes

app.get("/badge", (req, res) => {
  var { color, labelColor, label, style, pageId } = req.query;
  const ip = req.ip;
  const date = new Date().toISOString();
  const expiryTime = new Date(Date.now() - 10 * 60 * 1000); // Define a data e hora de expiração 10 minutos atrás em relação ao horário atual

  db.run(
    "INSERT INTO visitors (ip, date, pageid) VALUES (?, ?, ?)",
    [ip, date, pageId],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Erro ao registrar visitante");
      } else {
        db.get("SELECT COUNT(*) as count FROM visitors WHERE pageid = ?", [pageId], function (err, row) {
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
            res.set('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate');
            res.set('Expires', expiryTime.toUTCString() );  
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
