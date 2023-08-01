import UserRepo from '@infrastructure/repo/UserRepo';
import { JWT_SECRET } from '@/config';
import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

passport.use(
  new Strategy(opts, async function (payload, done) {
    const user = await UserRepo.findByEmail(payload.email);
    if (user) {
      return done(null, user);
    }
    return done(new Error('Invalid JWT data.'), false);
  })
);

export const authenticated = passport.authenticate('jwt', { session: false });