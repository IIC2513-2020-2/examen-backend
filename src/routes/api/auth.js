const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.post('auth-create', '/', async (ctx) => {
  const { email, password } = ctx.request.body;
  const user = await ctx.orm.User.findOne({ where: { email } });
  const authenticated = user && (await bcrypt.compare(password, user.password));
  if (user && authenticated) {
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    const { id, name } = user;
    ctx.status = 201;
    ctx.body = { id, name, token };
  } else {
    ctx.throw(401, 'Correo o contraseña incorrectos');
  }
});

module.exports = router;
