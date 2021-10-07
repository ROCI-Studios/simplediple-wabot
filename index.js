const wa = require('@open-wa/wa-automate');
const fs = require("fs");
//////////////////////////////////
const menu = fs.readFileSync("./menu.json");
const config = fs.readFileSync("./config.json");
const menuMSG = JSON.parse(menu);
const conf = JSON.parse(config);
const prefix = conf.prefix;
//////////////////////////////////
wa.create({
  sessionId: "mosuSession",
  authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'id-id',
  logConsole: false,
  popup: true,
  qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
}).then(client => start(client));

function start(client) {
console.log("Welcome back! Mosu Code Has Been Run");


  client.onMessage(async message => {
    if (message.body === `${prefix}help`) {
      await client.sendText(message.from, menuMSG.message);
    }
    });
}