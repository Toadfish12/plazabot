const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


var embed = new discord.RichEmbed()
.setTitle("Help Menu")
.addField("Addrole", "Addrole to a user who is in the server.")
.addField("Ban", "Bans a user who you want banned")
.addField("botinfo", "Tells you information about the bot")
.addField("clear", "Clears messages that you want deleted.")
.addField("Coins","Tells you how much coins you have.")
.addField("kick","kicks a user from the server.")
.addField("level","Tells you how much xp you have and how much you need to level up.")
.addField("pay","Pay someone some of your coins.")
.addField("Prefix","You can change the prefix in the server.")
.addField("removerole","Removes a users roles.")
.addField("report","report a user and it logs it in the reports channel.")
.addField("say","You can get the bot to say something.")
.addField("serverinfo","Tells you information about the server.")
.addField("Tempmute","Tempmutes a user when you want to mute them.")
.addField("warn","Warns a user when they have done something wrong.")
.addField("warnlevel","Tells you what warnlevel they are at.")
.setColor("0x00FFFF")
.setFooter("Bot made by BetterScripter#3963")
message.author.sendEmbed(embed);





}

module.exports.help = {
  name: "help"
}
