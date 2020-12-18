const KoaRouter = require('koa-router');

const router = new KoaRouter();

const PERMITTED_ECLIPSE_INFO_FIELDS = [
  'startTime',
  'totalityTime',
  'endTime',
  'duration',
  'altitude',
  'districtId',
];

const PERMITTED_WEATHER_FORECAST_FIELDS = [
  'forecast',
  'date',
  'min',
  'max',
  'districtId',
];

const PERMITTED_PEOPLE_INFLUX_FIELDS = [
  'quantity',
  'date',
  'districtId',
];

router.param('id', async (id, ctx, next) => {
  const district = await ctx.orm.District.findByPk(id);
  if (!district) ctx.throw(404);
  ctx.state.district = district;
  return next();
});

router.get('districts-forecasts', '/forecasts', async (ctx) => {
  const districts = await ctx.orm.District.findAll({
    include: 'WeatherForecasts',
    order: [
      ['WeatherForecasts', 'date', 'DESC'],
    ],
  });
  ctx.body = districts;
});

router.get('districts-influxes', '/influxes', async (ctx) => {
  const districts = await ctx.orm.District.findAll({
    include: 'PeopleInfluxes',
    order: [
      ['PeopleInfluxes', 'date', 'DESC'],
    ],
  });
  ctx.body = districts;
});

router.get('districts-eclipse-info', '/eclipse-info', async (ctx) => {
  const districts = await ctx.orm.District.findAll({ include: 'EclipseInfo' });
  ctx.body = districts;
});

router.post('districts-forecasts-create', '/:id/forecasts', async (ctx) => {
  const { district } = ctx.state;
  const weatherForecast = ctx.orm.WeatherForecast.build({
    ...ctx.request.body,
    districtId: district.id,
  });
  try {
    await weatherForecast.save({ fields: PERMITTED_WEATHER_FORECAST_FIELDS });
    ctx.status = 201;
    ctx.body = weatherForecast;
  } catch (error) {
    ctx.throw(422);
  }
});

router.post('districts-influxes-create', '/:id/influxes', async (ctx) => {
  const { district } = ctx.state;
  const peopleInflux = ctx.orm.PeopleInflux.build({
    ...ctx.request.body,
    districtId: district.id,
  });
  try {
    await peopleInflux.save({ fields: PERMITTED_PEOPLE_INFLUX_FIELDS });
    ctx.status = 201;
    ctx.body = peopleInflux;
  } catch (error) {
    ctx.throw(422);
  }
});

router.patch('districts-eclipse-info-update', '/:id/eclipse-info', async (ctx) => {
  const { district } = ctx.state;
  const eclipseInfo = await district.getEclipseInfo();
  const params = ctx.request.body;
  try {
    await eclipseInfo.update(params, { fields: PERMITTED_ECLIPSE_INFO_FIELDS });
    ctx.status = 200;
    ctx.body = eclipseInfo;
  } catch (error) {
    ctx.throw(422);
  }
});

module.exports = router;
