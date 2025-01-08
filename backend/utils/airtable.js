const Airtable = require('airtable');

const airtableApiKey = patkEXwIwCyfN6sdJ.c4530ab9389610f2879210c33188c8cdd3a0b12ecf31e54bad21106fd88f4d23;
const airtableBaseId = appFkXEQOQRyieIqN;

if (!airtableApiKey || !airtableBaseId) {
  throw new Error('Airtable API Key or Base ID is missing.');
}

const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

module.exports = base;
