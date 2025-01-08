require('dotenv').config(); // Use dotenv for environment variables

const Airtable = require('airtable');

const airtableApiKey = process.env.AIRTABLE_API_KEY;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;

if (!airtableApiKey || !airtableBaseId) {
  throw new Error('Airtable API Key or Base ID is missing.');
}

const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

module.exports = base;
