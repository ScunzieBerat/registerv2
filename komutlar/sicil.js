const Rochelle = require('discord.js');
const db = require("quick.db");
const client = new Rochelle.Client();
String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

const donustur = function(sayi) {
  let gorunum = sayi.toString().replace('0', '0_')
    .replaceA('1', '1_')
    .replaceA('2', '2_')
    .replaceA('3', '3_')
    .replaceA('4', '4_')
    .replaceA('5', '5_')
    .replaceA('6', '6_')
    .replaceA('7', '7_')
    .replaceA('8', '8_')
    .replaceA('9', '9_')
  
  gorunum = gorunum
    .replaceA("0_", '<a:0_:753494333839114321>')
    .replaceA("1_", "<a:1_:753494328571330580>")
    .replaceA("2_", "<a:2_:753494332345942028>")
    .replaceA("3_", "<a:3_:753494332375433327>")
    .replaceA("4_", '<a:4_:753494330873872454>')
    .replaceA("5_", '<a:5_:753494332694069248>')
    .replaceA("6_", '<a:6_:753494334812455052>')
    .replaceA("7_", '<a:7_:753494331674984515>')
    .replaceA("8_", '<a:8_:753494852938891314>')
    .replaceA("9_", '<a:9_:753494334476648459>')
  
  return gorunum
}

exports.run = async (client, message, args, presence) => {
const emoji = client.emojis.find(emoji => emoji.name === "hac")

if(!message.member.roles.has('723088302453817406') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanmağa yetkin yok`)
      let rochelle = message.mentions.users.first();

  if (!rochelle) rochelle = message.author;

 
// Tarih hesaplama son.
  const member = message.guild.member(rochelle);
  let kız = await db.fetch(`kadın.${rochelle.id}`);
  let erkek = await db.fetch(`erkek.${rochelle.id}`);
  let isimdeğiştirme = await db.fetch(`isim.${rochelle.id}`);
  let jail = await db.fetch(`devtr.jail_${rochelle.id}`);
  let mute = await db.fetch(`muted.${rochelle.id}`);
  let smute = await db.fetch(`smuted.${rochelle.id}`);


  let k_uses = ""
  let e_uses = ""
  let n_uses = "" 
  let j_uses = "" 
  let m_uses = "" 
let sm_uses = "" 

  if (!kız) {
    if (kız  === null || kız === undefined || kız === NaN)
    k_uses = 0
  } else {
  k_uses = kız
  }

  if (!erkek) {
    if (erkek === null || erkek === undefined || erkek === NaN)
    e_uses = 0
  } else {
    e_uses = erkek
  }
  
 if (!isimdeğiştirme){
if (isimdeğiştirme === null || isimdeğiştirme === undefined || isimdeğiştirme === NaN)
    n_uses = 0
  } else {
    n_uses = isimdeğiştirme
  }
 if (!jail){
if (jail === null || jail === undefined || jail === NaN)
    j_uses = 0
  } else {
    j_uses = jail
  }
  if (!mute) {
    if (mute  === null || mute === undefined || mute === NaN)
    m_uses = 0
  } else {
  m_uses = mute
  }

 if (!smute) {
    if (smute  === null || smute === undefined || smute === NaN)
    sm_uses = 0
  } else {
  sm_uses = mute
  }
let total = e_uses + k_uses
  
const rochelle1 = new Rochelle.RichEmbed()

  .setColor("0a0039")
.setThumbnail(message.author.avatarURL)
.setDescription(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam **${donustur(e_uses)}** Adet Kullanıcıyı Erkek Kayıt Etmiş. 
Toplam **${donustur(k_uses)}** Adet Kullanıcıyı Kadın Kayıt Etmiş. 
Toplam **${donustur(n_uses)}** Adet Kullanıcının İsmini Değişmiş. 
Toplam **${donustur(j_uses)}** Adet Kullanıcıyı Jaile Atmış. 
Toplam **${donustur(m_uses)}** Adet Kullanıcıya Chat Mute Atmış. 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam ${donustur(e_uses + k_uses)} Kullanıcıyı Kayıt Etmiş 
`)
//setDescription(`**Teyit Bilgileri**\n\n \`Erkek Teyit\` : **${e_uses}**\n\n\`Kadın Teyit\` : **${k_uses}**\n\n\`ToplamTeyit\` : **${e_uses + k_uses}**\n\n**İsim Değişme**\n\n\`Toplam İsim Değişme\` : **${n_uses}** `)
.setFooter('Scunzie Developer')
      console.log("Komut " + message.author.username + " tarafından kullanıldı.")
      message.channel.sendEmbed(rochelle1).then(m => m.delete(7000))
  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sicil"], 
    permLevel: 0,
};

exports.help = {
    name: 'sicilbilgi',
    usage: 'kullanımı',
    description: 'açıklama',
};