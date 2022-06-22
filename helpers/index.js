const getToken = require('./auth');
const validateConfiguration = require('./config');
const getPublicIp = require('./publicIp');
const {
  listDnsZone,
  getDnsZone,
  listARecords,
  createUpdateRecord
} = require('./azure');

module.exports = {
  validateConfiguration,
  getPublicIp,
  getToken,
  listDnsZone,
  getDnsZone,
  listARecords,
  createUpdateRecord,
}