const express = require("express");
const cors = require("cors");
const client = require("./dbPost");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("hello this blogging api is working"));

app.get("/api/allposts", async (req, res) => {
  const query = `select * from posts;`;
  const result = await client.query(query);
  if (!result) return res.status(500).send("INTERNAL SERVER ERROR");
  res.send(result.rows);
});

app.post("/api/posts", async (req, res) => {
  const { title, context, author, image_url } = req.body;
  const query = `INSERT INTO posts ( title, context, author, image_url) values ( $1 , $2, $3 , $4)RETURNING*;`;
  const values = [title, context, author, image_url];
  const result = await client.query(query, values);
  if (!result) return res.status(500).send("INTERNAL SERVER ERROR");
  res.send(result.rows);
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, context, author, image_url } = req.body;

    const query = `
      UPDATE posts
      SET title = $1, context = $2, author = $3, image_url = $4
      WHERE id = $5
      RETURNING *;
    `;

    const values = [title, context, author, image_url, id];

    const result = await client.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).send("Post not found");
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("INTERNAL SERVER ERROR");
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = `DELETE FROM posts WHERE id = $1 RETURNING*;`;
    const result = await client.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).send("POST IS NOT AVILABLE");
    }
    res.json({
      message: "items deleted sucessfully",
      deletedPost: result.rows[0],
    });
  } catch (error) {
    console.error(err);
    res.send(500).send("INTERNAL SERVER ERROR");
  }
});

app.listen(3000, () => {
  console.log("CONNECTION IS SUCCESSFULLY CONNECTED WITH THE PORT 3000");
});
