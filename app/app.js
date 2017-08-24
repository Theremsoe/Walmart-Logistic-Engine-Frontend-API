import express from "express";
import env     from "node-env-file";

const app  = express();

/**
 * Environment file.
 * For more details please see the file .env.example and read the key comments
 */
env(".env");

/**
 * Static directory
 * By default, this application not use any HTML template engine becasue
 * in this point will not render dynamic HTML (process data in server and show it
 * in a HTML).
 */
app.use(express.static("public"));


app.get("/", (req, res) => {
    let dogs = {"status":"success","message":"https://dog.ceo/api/img/newfoundland/n02111277_4317.jpg"};

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(dogs));
});

app.listen(process.env.APP_PORT);
