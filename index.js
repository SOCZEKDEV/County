/*const Client = require("./base/Client"),
      client = new Client();
require("dotenv").config();

client._login(process.env?.TOKEN)
client._initCommands("./commands")
client._initEvents("./events");*/

var Client=require("./base/Client"),client=new Client();require("dotenv").config();client._login(process.env?.TOKEN);client._initCommands("./commands");client._initEvents("./events");
