const Rochelle = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has('753301259901206548') && !message.member.hasPermission('753301259901206548')) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`);
  let kullanıcı = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('753301293291929729')
  member.removeRole('753301273134104597')
     const kanal = message.guild.channels.find(c => c.id == '727908213474721813')
  let rochelle1 = new Rochelle.RichEmbed()
  .setColor('RED')
  .addField(`Menthe`, `${kullanıcı} **Adlı Üyenin Cezası Kalktı! **`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
message.react('753494215648083998')




const rochelle = new Rochelle.RichEmbed()
.setColor('RED')
.addField(`Ceza Kaldırma İşlemi`,
`${kullanıcı} **adlı üyenin cezası kalktı! **`)
.setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(rochelle1).then(kanal.send(rochelle)).then(m => m.delete(5000));};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Cezalı rolünü kaldırır",
  usage: 'Cezalı rolü açar'
}