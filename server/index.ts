import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import passportS from "./passport";
import passport from "passport";
import session from "express-session";
import { myDataSource } from "./DataSource";
import { User } from "./entity/User.entity";
import { TypeormStore } from "connect-typeorm";
import { Session } from "./entity/typeorm-session";
import jwt from "jsonwebtoken";
const user = myDataSource.getRepository(User);
const sessionRepository = myDataSource.getRepository(Session);
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
    saveUninitialized: false,
    cookie: {},
    store: new TypeormStore({
      cleanupLimit: 2,
      limitSubquery: false,
      ttl: 86400,
    }).connect(sessionRepository),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

passportS();
app.use(passport.session());
app.use(express.json());
// app.get("/test", (req, res) => {
//   console.log("TEST CONSOLE");
//   console.log(req.session);
//   res.send("ok");
// });

app.post(
  "/login",
  (req, res, next) => {
    console.log(req.body);
    console.log("is work");
    next();
  },
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    const token = jwt.sign({ ...req.user }, process.env.JWT_SECRET_KEY);
    req.session.userName = "test";
    console.log(req.user);
    console.log(req.session);
    console.log(req.sessionID);
    req.session.save(function () {
      res.send({ token });
    });
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

app.get(
  "/test",
  passport.authenticate("session"),
  passport.authenticate("jwt", { session: true }),
  (req, res) => {
    req.session.userName = "test";
    console.log(req.sessionID);
    console.log(req.session);
    console.log(req.user);
    req.session.save(function () {
      res.send("jwt 인증 됨");
    });
  }
);

app.get(
  "/test2",
  passport.authenticate("session"),
  passport.authenticate("jwt", { session: true }),
  (req, res) => {
    console.log(req.sessionID);
    console.log(req.session);
    console.log(req.user);
    req.session.save(function () {
      res.send("jwt 인증 됨");
    });
  }
);
// app.use(controller);

// app.get("/users", async function (req: Request, res: Response) {
//   const users = await myDataSource.getRepository(User).find();
//   res.json(users);
// });

app.listen(4000);
