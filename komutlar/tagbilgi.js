const Discord = require('discord.js');

exports.run = function(client, message) {
  var tagdakiler = 0;
  let tag = "ᛉ"; // tagınızı yazın
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('**Tag Bilgi**')
.setTimestamp()
.addField(' **Tag Nasıl Alınır**', 'Kullanıcı Adınıza **ᛉ** Sembolü Ekleyerek <@&753301287268909258> Rolünü Alabilirsiniz.')
.addField(' **Tag Alınca Ne Olucak**', 'Yetkili Alımlara Katılabilirsiniz ve Taglılara Özel Nitro Çekilişlerine Katılabilirsin.')
.addField(` **Tagımızda Toplam Bulunan Kişiler**`, `<@&753301287268909258> **${tagdakiler}**`)
.setFooter('Scunzie Tarafından Kodlanmıştor.', client.user.avatarURL)
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/attachments/753301354906124411/754335764250099823/tag3.gif') // tagınızın tasarımı ve ya bir tane resim
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'tag-bilgi',
  description: 'Tagınızın Bilgisini Gösterir !',
  usage: 'tag-bilgi'
};