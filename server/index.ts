import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

import passport from "./passport";
import session from "express-session";
import passportLocal from "passport-local";
import { myDataSource } from "./DataSource";
import { User } from "./entity/User.entity";
const user = myDataSource.getRepository(User);
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY || "",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.get("/test", (req, res) => {
  console.log("TEST CONSOLE");
  console.log(req.session);
  res.send("ok");
});
app.post(
  "/login",
  (req, res, next) => {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    res.send("end");
  }
);

app.post("/signup", (req, res) => {
  const { userName, password } = req.body;
  user
    .insert({ userName, password })
    .then(() => {
      res.send("ok");
    })
    .catch(() => {
      res.status(400).send("fail");
    });
});

// app.use(controller);

// app.get("/users", async function (req: Request, res: Response) {
//   const users = await myDataSource.getRepository(User).find();
//   res.json(users);
// });

app.listen(4000);
