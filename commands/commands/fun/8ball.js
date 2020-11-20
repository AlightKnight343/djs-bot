const { MessageEmbed } = require("discord.js");
module.exports = {
  commands: "8ball",
  description: "There is a big chance I insult you!",
  callback: async (message, args) => {
    if (!args)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Absolutely",
        "Not in a million years",
        "As I see it, yes.",
        "Don’t count on it.",
        "It is certain.",
        "My sources say no.",
        "Reply hazy, try again.",
        "Very doubtful.",
        "Yes",
        "Outlook good.",
        "Without a doubt.",
        "My reply is no.",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${args}\nMy reply: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};