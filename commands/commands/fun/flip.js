  const Discord = require('discord.js')
module.exports = {
    commands: ['coinflip', 'flip'],
    description: 'Add two numbers.',
    callback: (message, arguments, text) => {
        
        const Results = ['Heads' , 'Tails']
        const flipResult = Math.floor(Math.random() * 2 + 1)
        if(flipResult === 1){
            let embed = new Discord.MessageEmbed()
            .setTitle("IT'S A HEADS!")
            .setColor('RANDOM')
            message.channel.send(embed)
        }

        else{
            let embed = new Discord.MessageEmbed()
            .setTitle("IT'S A TAILS!")
            .setColor('RANDOM')
            message.channel.send(embed)
        }

        
  
    },

  }