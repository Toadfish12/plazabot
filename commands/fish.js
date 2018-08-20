const Discord = require("discord.js");
const fs = require("fs");
const strength = require("../playerstats/strength.json");
const botconfig = require("../botconfig.json");
const questL = require("../questhandler/questcompleted.json");
const fishL = require("../playerinventory/fish.json");
const fishInv = require("../playerinventory/fish.json");
const purple = botconfig.purple;

module.exports.run = async (bot, message, args) => {

if(!fish[message.author.id]){
    fishL[message.author.id] = {
        level:1
    };
}
if(!fishInv[message.author.id]){
    fishInv[message.author.id] = {
        fish:0 
    };
}

 let uLevel = fishL[message.author.id].level;
 let addmamt = Math.floor(Math.random() * 5 ) + 1;
 let chance = Math.ceil(Math.random() * 100);
 let curfish = fishInv[message.author.id].fish;



}
 

module.exports.help = {
  name: "fish"
}
