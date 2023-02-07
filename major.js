const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2Nzg4MDYxNDY1ODgzNDU5Mw.GA0a3x.W90jeTyj9m64fST8wKrDen1JZQK7PsfG9n4D4E")
