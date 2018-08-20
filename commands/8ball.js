const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!args[2]) return message.reply("Error: Please ask a full question!");
    let replies = ["Yes.", "No.","Mabye","Error: Ask Again!"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question",question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);

}

module.exports.help = {
  name:"8ball"
}