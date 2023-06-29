import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config({ path: "config/config.env" });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:5173/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      const userData = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      };
      return done(null, userData);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
