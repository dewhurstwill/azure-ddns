const {
  validateConfiguration,
  getPublicIp,
  getToken,
  listDnsZone,
  createUpdateRecord,
} = require('./helpers');

async function main() {
  const config = await validateConfiguration({
    tenantId: process.env.AZURERM_TENANT_ID || process.env.ARM_TENANT_ID || process.env.TENANT_ID || undefined,
    clientId: process.env.AZURERM_CLIENT_ID || process.env.ARM_CLIENT_ID || process.env.CLIENT_ID || undefined,
    clientSecret: process.env.AZURERM_CLIENT_SECRET || process.env.ARM_CLIENT_SECRET || process.env.CLIENT_SECRET || undefined,
    subscriptionId: process.env.SUBSCRIPTION_ID,
    resourceGroupName:  process.env.RESOURCE_GROUP_NAME,
    dnsZone: process.env.DNS_ZONE,
    record: process.env.RECORD // @ or abc
  });

  const token = await getToken(config.tenantId, config.clientId, config.clientSecret);
  const zones = await listDnsZone(token, config.subscriptionId, config.resourceGroupName);

  if (!zones.includes(config.dnsZone)) {
    console.error(`Error - DNS zone [${config.dnsZone}] not found in resource group [${config.resourceGroupName}]`);
    process.exit(1);
  }

  const publicIp = await getPublicIp();
  const zone = await createUpdateRecord(
    token,
    config.subscriptionId,
    config.resourceGroupName,
    config.dnsZone,
    config.record,
    publicIp
  );

  if (!zone.properties.provisioningState === 'Succeeded') {
    console.error(`Error - DNS zone [${config.dnsZone}] could not be updated with [${publicIp}]`);
    process.exit(1);
  }

  console.log(`Updated - Domain: ${config.record === '@' ? config.dnsZone : 
  `${config.record}.${config.dnsZone}`} IP: ${publicIp}`);
}

module.exports = main;