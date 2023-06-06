import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthenticationRoute from "./routes/AuthenticationRoute.js";
dotenv.config();

const port = process.env.PORT || 5000;
const secret = process.env.SESS_SECRET || "qhjc4mp83uqy45tjdf9835qyp9483mu349857oiwedjoiru923401"
const app = express();

const sessionstore = SequelizeStore(session.Store)

const store = new sessionstore({
    db: db
});


// CREATE TABLE
// (async ()=>{
//     await db.sync();
// })();

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))
// MOBILE FRONTEND COULD SEND REQUEST AND COOKIE
app.use(cors({
    credential: true,
    origin: 'https://backend-dot-cycleme-2023.et.r.appspot.com'
}));
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthenticationRoute);
app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
})

// CREATE TABLE SESSION IN DB
// store.sync();

try{
    await db.authenticate();
    console.log("Database is connected...")
} catch (error) {
    console.error(error)
}

// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is running...`)
// })

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
