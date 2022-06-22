const Joi = require('joi');

async function validateConfiguration(config) {
  const schema = Joi.object({
    tenantId: Joi.string().uuid().required(),
    clientId: Joi.string().uuid().required(),
    clientSecret: Joi.string().min(10).required(),
    subscriptionId: Joi.string().uuid().required(),
    resourceGroupName:  Joi.string().min(2).required(),
    dnsZone: Joi.string().min(3).required(),
    record: Joi.string().required(),
  });

  try {
      const value = await schema.validateAsync(config);
      return value;
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = validateConfiguration;