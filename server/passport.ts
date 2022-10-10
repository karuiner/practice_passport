import passport, { use } from "passport";
import passportLocal from "passport-local";
import { myDataSource } from "./DataSource";
import { User } from "./entity/User.entity";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcrypt";

const userRepo = myDataSource.getRepository(User);

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user: { id: number; userName: string }, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  userRepo
    .findOneByOrFail({ id: id })
    .then((user) => {
      done(null, user);
    })
    .catch(() => {
      done("err");
    });
});

passport.use(
  new LocalStrategy(
    { usernameField: "userName", passwordField: "password" },
    (userName, password, done) => {
      console.log(userName, password, "act");
      userRepo
        .findOne({ where: { userName: userName } })
        .then((res) => {
          if (!res) {
            return done(undefined, false, {
              message: `userName ${userName} not found`,
            });
          }
          if (res.password === password) {
            return done(undefined, {
              id: res.id,
              userName: userName,
            });
          }
          return done(undefined, false, {
            message: "Invalid userName or password.",
          });
        })
        .catch((err) => {
          return done(undefined, false, {
            message: "error",
          });
        });
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
  "jwt",
  new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    userRepo
      .findOne({ where: { id: jwt_payload.id } })
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => {
        return done(err, false);
      });
  })
);
export default () => {
  passport;
};
