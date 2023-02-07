const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2Nzg4MDYxNDY1ODgzNDU5Mw.GCITjT.yN4H0S4adifN-Gk6teJQOe2GPpHt8kQy3NrFf8")
