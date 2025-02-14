import Express from "express";
const app = Express();
import dotenv from "dotenv";
dotenv.config();
import conn from "./db/conn.js";
import routes from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", routes);

    

const PORT = process.env.PORT || 5050;

conn();
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});
