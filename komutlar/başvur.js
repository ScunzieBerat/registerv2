const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Doğru Kullanım: .başvuru <başvuru>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Başvurunuz Başarıyla Bildirildi! İyi Günler')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının başvuru:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}`)
.addField("başvuru", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('754347005807034388').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'başvuru',
  description: 'başvuru bildirirsiniz',
  usage: 'başvuru <başvuru>'
};
////HATA OLURSA xSteezy#9060 YAZABİLİRSİNİZ.
﻿