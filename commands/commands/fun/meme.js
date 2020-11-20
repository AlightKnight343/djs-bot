


const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    commands: 'meme',
    description: 'Get a meme!',
    callback: async (message, arguments, text) => {
        const subReddits = ["memes", "me_irl", "dankmemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`)
    
        message.channel.send(embed);
    },

  }