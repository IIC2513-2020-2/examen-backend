const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('districts-forecasts', '/forecasts', async (ctx) => {
  const districts = await ctx.orm.District.findAll({ include: 'WeatherForecasts' });
  ctx.body = districts;
});

module.exports = router;
