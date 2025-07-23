import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT),
});

db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const item = await db.query("SELECT * FROM list ORDER BY id ASC");
  let items = item.rows;
  try{
    res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
}
catch(er){
  console.error("Error fetching items:", er);
}

});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  try{
    
  db.query("INSERT INTO list (task) VALUES ($1)",[item]);
  
  }
  catch(e){
    console.error("Error inserting item:", e);
  }
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const nt = req.body.updatedItemTitle;
  const nid = req.body.updatedItemId;
  db.query("UPDATE list SET task = $1 WHERE id = $2", [nt,nid], (err, result) => {
    if (err) {
      console.error("Error updating item:", err);
    }
    else{
      console.log("Item updated successfully");
    }
});
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const dt = parseInt(req.body.deleteItemId);
  db.query("DELETE FROM list WHERE id = $1", [dt], (err, result) => {
    if (err) {
      console.error("Error deleting item:", err);
    } else {
      console.log("Item deleted successfully");
    }
  });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
