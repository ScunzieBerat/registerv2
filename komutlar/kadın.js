const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "bildirim")
const emoji1 = client.emojis.find(emoji => emoji.name === "kitap")
const emoji2 = client.emojis.find(emoji => emoji.name === "mor")

 if (!message.member.roles.has('753301261159366693') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilgi` , `   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1)
let isim = args[1]
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilgi` , ` Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`  Bilgi` , ` Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 
rochelle.setNickname(`ᛉ ${isim} '${yas}`)
  rochelle.addRole('753301291610013846'); // kadın 1
  rochelle.addRole('753301291610013846'); // kadın 1
  rochelle.addRole('753301291610013846'); // kadın 1
  rochelle.addRole('753301291610013846'); // kadın 1

  rochelle.removeRole('753301292591611974'); // erkek 1


  rochelle.removeRole('753301293291929729') // kayıtsız 1
  rochelle.removeRole('753301271477485679') // cezalı 1 717777340708552807 717743735705960448
  

    message.react("753494215648083998");
db.add(`kadın.${message.author.id}`, 1);
    const kanal = message.guild.channels.find(c => c.id == "753301379191144622") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`<a:tik3:753494215648083998>  ${rochelle.user}  **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`)
    .setColor("#B0E0E6")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
        kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('Menthe Krallığı', message.author.avatarURL)
  .setDescription(`**<a:tik3:753494215648083998> ${rochelle.user} Adlı Üye  <@&753301291610013846> Rolüyle Kayıt Oldu.** `)
.setFooter('Kalite Tesadüf Değildir')
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız","k", "gacı"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kadın isim yaş"
};
