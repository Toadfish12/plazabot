const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

var embed = new discord.RichEmbed()
 .addField("Uptime",process.uptime())
 .setColor("#FF9900")
 .addField("API Latency", bot.ping)
message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "uptime"
}