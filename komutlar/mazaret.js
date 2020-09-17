const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Doğru Kullanım: .mazeret <mazeretiniz>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Mazeretiniz Başarıyla Bildirildi! İyi Günler')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının mazereti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}`)
.addField("mazeret", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('754344044590530709').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'mazeret',
  description: 'mazeretinizi bildirirsiniz',
  usage: 'mazeret <mazeretiniz>'
};
////HATA OLURSA xSteezy#9060 YAZABİLİRSİNİZ.
﻿