const KoaRouter = require('koa-router');
const auth = require('./auth');

const router = new KoaRouter();

router.use((ctx, next) => {
  ctx.apiUrl = (...params) => `${ctx.origin}${ctx.router.url(...params)}`;
  return next();
});

router.get('/', async (ctx) => {
  const usersCount = await ctx.orm.User.count();
  ctx.body = {
    message: 'Bienvenido a la API del examen del curso IIC2513',
    usersCount,
  };
});

router.use('/auth', auth.routes());

module.exports = router;
