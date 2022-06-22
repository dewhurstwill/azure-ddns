const makeRequest = require('./rest');

async function listDnsZone(token, subscriptionId, resourceGroupName) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  const { value: zones } = await makeRequest(
    'GET', 
    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.Network/dnsZones?api-version=2018-05-01`, 
    headers
  );

  return zones.map(zone => zone.name);
}

async function getDnsZone(token, subscriptionId, resourceGroupName, zoneName) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  return await makeRequest(
    'GET', 
    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.Network/dnsZones/${zoneName}?api-version=2018-05-01`, 
    headers
  );
}

async function listARecords(token, subscriptionId, resourceGroupName, zoneName) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  return await makeRequest(
    'GET', 
    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.Network/dnsZones/${zoneName}/A?api-version=2018-05-01`, 
    headers
  );
}

async function createUpdateRecord(token, subscriptionId, resourceGroupName, zoneName, record, ipAddress) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  const body = {
    "properties": {
      "TTL": 3600,
      "ARecords": [
        {
          "ipv4Address": ipAddress
        }
      ]
    }
  }

  return await makeRequest(
    'PUT', 
    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.Network/dnsZones/${zoneName}/A/${record}?api-version=2018-05-01`, 
    headers,
    body
  );
}

module.exports = {
  listDnsZone,
  getDnsZone,
  listARecords,
  createUpdateRecord
}