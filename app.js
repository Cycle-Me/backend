import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthenticationRoute from "./routes/AuthenticationRoute.js";
import SequelizeStore from "connect-session-sequelize";
dotenv.config();

const app = express();

const sessionstore = SequelizeStore(session.Store)

const store = new sessionstore({
    db: db
});

// CREATE TABLE
// (async ()=>{
//     await db.sync();
// });

app.use(session({
    secret: process.env.SESS_SECRET,
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
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthenticationRoute);

// CREATE TABLE SESSION IN DB
// store.sync();

try{
    await db.authenticate();
    console.log("Database is connected...")
} catch (error) {
    console.error(error)
}

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running")
})




















//  DIHAPUS AJA GAPAPA

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
