const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const connection = await mysql.createConnection({
    host: "db",
    user: "root",
    password: "fullcyclepassword",
    database: "fullcycle",
  });

  try {
    await Promise.all([
      connection.query("INSERT INTO people (name) VALUES (?)", [
        "Ana Catarina",
      ]),
      connection.query("INSERT INTO people (name) VALUES (?)", ["João Pedro"]),
      connection.query("INSERT INTO people (name) VALUES (?)", ["Maria Flor"]),
    ]);

    const [results] = await connection.query("SELECT * FROM people");

    const tableRows = results.map((row) => {
      return `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
    });

    const htmlTable =
      `<h1>Full Cycle Rocks!</h1><p>List of names in the database:</p>` +
      `<table border="1"><tr><th>ID</th><th>Name</th></tr>${tableRows.join(
        ""
      )}</table>`;

    return res.send(htmlTable);
  } catch (error) {
    console.error("Error retrieving data from MySQL:", error);
    return res.status(500).send("Internal Server Error");
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
