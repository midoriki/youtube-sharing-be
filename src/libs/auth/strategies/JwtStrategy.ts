import { JWT_SECRET } from 'config';
import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

passport.use(
  new Strategy(opts, function (payload, done) {
    done(null, payload);
  })
);

export const authenticated = passport.authenticate('jwt', { session: false });