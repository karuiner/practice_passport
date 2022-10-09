import passport, { use } from "passport";
import passportLocal from "passport-local";
import { myDataSource } from "./DataSource";
import { User } from "./entity/User.entity";
const userRepo = myDataSource.getRepository(User);

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser(
  (user: { id: number; userName: string; password: string }, done) => {
    done(null, user.id);
  }
);

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
              userName: "test",
              password: "test",
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

export default passport;
