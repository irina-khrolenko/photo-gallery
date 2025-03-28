module.exports = ({ env }) => ({
  url: env("STRAPI_URL", "http://localhost:1337"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", process.env.PORT || 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
