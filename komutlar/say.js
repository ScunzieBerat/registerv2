const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("753301260207259670") && !message.member.hasPermission("MANAGE_MESSAGES") ) //Komudu Kullanabilecek Rol ID
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "753299520837910649"; //Sunucu ID
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:753494333839114321>`,
    '1': `<a:1_:753494328571330580>`,
    '2': `<a:2_:753494332345942028>`,
    '3': `<a:3_:753494332375433327>`,
    '4': `<a:4_:753494330873872454>`,                       
    '5': `<a:5_:753494332694069248>`,
    '6': `<a:6_:753494334812455052>`,
    '7': `<a:7_:753494331674984515>`,
    '8': `<a:8_:753494852938891314>`,
    '9': `<a:9_:753494334476648459>`}[d];
      })
    }
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:753494333839114321>`,
    '1': `<a:1_:753494328571330580>`,
    '2': `<a:2_:753494332345942028>`,
    '3': `<a:3_:753494332375433327>`,
    '4': `<a:4_:753494330873872454>`,                       
    '5': `<a:5_:753494332694069248>`,
    '6': `<a:6_:753494334812455052>`,
    '7': `<a:7_:753494331674984515>`,
    '8': `<a:8_:753494852938891314>`,
    '9': `<a:9_:753494334476648459>`}[d];
      })
    }

  var tagdakiler = 0;
  let tag = "ᛉ"; //Tagınız
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:753494333839114321>`,
    '1': `<a:1_:753494328571330580>`,
    '2': `<a:2_:753494332345942028>`,
    '3': `<a:3_:753494332375433327>`,
    '4': `<a:4_:753494330873872454>`,                       
    '5': `<a:5_:753494332694069248>`,
    '6': `<a:6_:753494334812455052>`,
    '7': `<a:7_:753494331674984515>`,
    '8': `<a:8_:753494852938891314>`,
    '9': `<a:9_:753494334476648459>`}[d];
      })
    }

  var cevrimici = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= cevrimici.match(/([0-9])/g)
  cevrimici = cevrimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    cevrimici = cevrimici.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:753494333839114321>`,
    '1': `<a:1_:753494328571330580>`,
    '2': `<a:2_:753494332345942028>`,
    '3': `<a:3_:753494332375433327>`,
    '4': `<a:4_:753494330873872454>`,                       
    '5': `<a:5_:753494332694069248>`,
    '6': `<a:6_:753494334812455052>`,
    '7': `<a:7_:753494331674984515>`,
    '8': `<a:8_:753494852938891314>`,
    '9': `<a:9_:753494334476648459>`}[d];
      })
    }

const emoji1 = client.emojis.get('753494262447865976') //Embedde Yazıların Başındaki Emoji ID
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('ᛉ Menthe')
 .setDescription(` <a:tik2:753494262447865976> **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n <a:tik2:753494262447865976>  **Sunucumuzda Toplam** ${cevrimici} **Çevrimiçi üye bulunmakta.** \n\n <a:tik2:753494262447865976>  **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n <a:tik2:753494262447865976>  **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)

     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Başarısız`)
    .setDescription(`**Bu komutu kullanmak için yeterli yetkiye sahip değilsin!**`)
 
  msg.channel.send(embed1);
  
  client.setInterval(() => {
  let channel = client.channels.get("753301379191144622"); //Kanal ID
  channel.setTopic(`Toplam üye: ${üyesayısı.toString()} - Çevrimiçi üye: ${cevrimici} -Tagdaki Üye :  ${tagdakilerr}`); //Kanal Açıklamasına Yazar
}, 1000);
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}