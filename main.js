const Bot = require("./src/Functions/Client.js");
const client = new Bot({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true }).start();