const Discord = require("discord.js");
const googleTTS = require("google-tts-api");
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//

client.on("guildMemberAdd", async member => {
  require("moment-duration-format");
  moment.locale("tr");
  let user = client.users.get(member.id);
  let tarih = moment(member.user.createdAt.getTime()).format("LLL");
  let gün = moment
    .duration(new Date().getTime() - member.user.createdAt.getTime())
    .format("D");
  let resim = new Discord.Attachment(
    "https://cdn.discordapp.com/attachments/689091888871112704/727964686544273429/tag3.gif"
  );
  let kişi = member.guild.memberCount;
  let kayıtcırol = "753301261159366693"; //Yetkili rolünüz ID'sini girin.
  let kanal = client.channels.get("753301354906124411"); //Kanalınızın ID'sini girin.
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün1 = moment.duration(kurulus).format("D");
  var devtr;
  if (kurulus < 1296000000)
    devtr = "**__Hesabınız : Şüpheli__** <a:hayr:753494035414646875>";
  if (kurulus > 1296000000)
    devtr = "**__Hesabınız : Güvenli__** <a:onay:753494063243591702>";
  let emoji2 = client.emojis.find(emoji => emoji.name === "hypesquad");

  kanal.send(
    `<a:elmas:753494076711633026> **Merhaba** <@${
      member.user.id
    }> ** Sunucumuza** **Hoşgeldin!**\n\n<a:elasss:753494108617703475> **Seninle Beraber** **${kişi}** ** Kişiyiz.** \n\n<a:sonsuz3:753494111847186513> **Tagımızı Alarak Bize Destek Olabilirsin**\n\n${client.emojis.get(
      "698935602351177818"
    )} **Hesap Kuruluş Tarihi;** **${tarih}** [**__${gün} Gün Önce__]**\n\n<a:tik2:753494262447865976> <@&753301261159366693> **Sizinle İlgilenecektir.** \n\n ${devtr} `,
    resim
  );
});
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
//
client.on("guildMemberAdd", async member => {
  member.addRole("753301293291929729");
  const rochelle = member.guild.channels.find(
    channel => channel.id === "753301379191144622"
  );
  const rochelle1 = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      `Hoş Geldin Karşim`,
      `• ${member} adlı üye sunucumuza katıldı, <@&753301293291929729> rolünü verdim!\n • Sunucumuz artık \`${member.guild.memberCount}\` üyeye sahip.! `
    );
  rochelle.send(rochelle1);
}); // otorol

client.on("guildMemberAdd", member => {
  var moment = require("moment");
  require("moment-duration-format");
  moment.locale("tr");
  var { Permissions } = require("discord.js");
  var x = moment(member.user.createdAt)
    .add(7, "days")
    .fromNow();
  var user = member.user;
  x = x.replace("birkaç saniye önce", " ");
  if (!x.includes("önce") || x.includes("sonra") || x == "7") {
    var rol = member.guild.roles.get("753301271477485679"); ///Cezalı Rol ID

    var kayıtsız = member.guild.roles.get("753301293291929729"); ///Kayıtsız rolü ID'si
    var eks = member.guild.roles.get("753301293291929729"); ///Kayıtsız rolü ID'si
    var eksi = member.guild.roles.get("753301293291929729"); ///Kayıtsız rolü ID'si  717777340708552807 717743735705960448
    member.addRole(rol);
    member.removeRole(kayıtsız);
    member.removeRole(eks);
    member.removeRole(eksi);

    member.user.send(
      "Hesabınız 7 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsinin dostum"
    );//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

    const rochelle = new Discord.RichEmbed()
      .setColor("GOLD")
      .setDescription(
        `${user} adlı şahısın hesabı 7 günden önce açıldığı için koruma nedeniyle cezalı rolünü verdik.`
      );
    client.channels.get("753586692694474802").send(rochelle);
    setTimeout(() => {
      member.removeRole(kayıtsız.id);
      member.removeRole(eks.id);
      member.removeRole(eksi.id);
    }, 1000);
  } else {
  }
}); // 7 günden önce hesaplar
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.on("voiceStateUpdate", async (thrones, sanal) => {
  let voiceLog = thrones.guild.channels.find(c => c.name === "voice-log");
  if (thrones.voiceChannel === sanal.voiceChannel) return;
  //if()
  if (thrones.voiceChannel && !sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından çıkış yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  if (!thrones.voiceChannel && sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            sanal.id +
            "> adlı kullanıcı **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  if (thrones.voiceChannel !== sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
}); // ses log

client.on("ready", Rochelle => {
  setInterval(async Rochelle => {
    let kanal = client.guilds
      .get("753299520837910649")
      .channels.get("753301379191144622");
    let mesaj = await kanal.fetchMessage("753301379191144622");
    let Rochelle1 = new Discord.RichEmbed()
      .setTitle("**ᛉ Menthe İNFORMATİON**")
      .setTimestamp()
      .setFooter(mesaj.guild.name, mesaj.guild.iconURL)
      .setColor("2F3136");
    let emoji = client.emojis.find(emoji => emoji.name === "men_hac1");
    let emoji1 = client.emojis.find(emoji => emoji.name === "men_kelebek");
    let emoji2 = client.emojis.find(emoji => emoji.name === "hypesquad");
    let emoji3 = client.emojis.find(emoji => emoji.name === "diamond");
    let tag = mesaj.guild.members.filter(r => r.user.username.includes("ᛉ"))
      .size;
    let erkek = mesaj.guild.members.filter(r =>
      r.roles.has("753301292591611974")
    ).size;
    let kız = mesaj.guild.members.filter(r => r.roles.has("753301291610013846"))
      .size;
    let kayıtsız = mesaj.guild.members.filter(r =>
      r.roles.has("753301293291929729")
    ).size;
    let booster = mesaj.guild.members.filter(r =>
      r.roles.has("753301286451019776")
    ).size;
    let çevrimiçi = mesaj.guild.members.filter(
      m => m.presence.status !== "offline"
    ).size;
    let çevrimdışı = mesaj.guild.members.filter(
      r => r.presence.status !== "online"
    ).size;
    const voiceChannels = mesaj.guild.channels.filter(c => c.type === "voice");
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels)
      count += voiceChannel.members.size;
    Rochelle1.setThumbnail(
      "https://cdn.discordapp.com/attachments/689091888871112704/727964686544273429/tag3.gif"
    );
    Rochelle1.setDescription(
      `<a:hac:728158127324790834> **Toplam Üye •** \`${mesaj.guild.memberCount}\` \n<a:hac:728158127324790834> **Çevrimiçi Üye •** \`${çevrimiçi}\` \n<a:hac:728158127324790834> **Ses Aktifliği •** \`${count}\` \n\n\n${emoji2} **Tagımızı Bulunduran Üye Sayısı •** \`${tag}\`\n${emoji2} **Sunucuyu Boostlayan Üye Sayısı •** \`${booster}\`\n\n<a:men_kelebek:728158201060655175> **Sunucumuzda Bulunan Erkek Üye •** \`${erkek}\` \n<a:men_kelebek:728158201060655175> **Sunucumuzda Bulunan Kadın Üye •** \`${kız}\` \n\n<a:men_manvi:728159772469362698> **Sunucumuzda Bulunan Kayıtsız Üye •** \`${kayıtsız}\``
    );
    mesaj.edit(Rochelle1);
  }, 10 * 1000);
}); ////message.guild.roles.get("boosterid").members.map("x=>  x.tag").join("\n")
//

client.on("userUpdate", async (saint, yeni) => {
  var sunucu = client.guilds.get("753299520837910649"); // Buraya Sunucu ID
  var uye = sunucu.members.get(yeni.id);
  let roles = [

  ];
  var normalTag = "ᛉ"; // Buraya Normal Tag (Yoksa boş bırakın)
  var ekipTag = "ᛉ"; // Buraya Ekip Tag
  var kayıtsızRol = "753301293291929729";
  var ekipRolü = "753301287268909258"; // Buraya Ekip Rolünün ID
  var logKanali = "753301379191144622"; // Loglanacağı Kanalın ID

  if (
    !sunucu.members.has(yeni.id) ||
    yeni.bot ||
    saint.username === yeni.username
  )
    return;//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

  if (yeni.username.includes(ekipTag) && !uye.roles.has(ekipRolü)) {
    try {
      await uye.addRole(ekipRolü);
      let rochelleembed = new Discord.RichEmbed()
        .setColor(`GREEN`)
        .setDescription(
          ` ${yeni} **adlı üye** \`ᛉ\` **tagımızı Aldı Ve Ekibimize Katıldı için** <@&753301287268909258> **rolü verildi!**`
        );
      client.channels.get(logKanali).send(rochelleembed);
    } catch (err) {
      console.error(err);
    }
  }
  if (!yeni.username.includes(ekipTag) && uye.roles.has(ekipRolü)) {
    try {
      await uye.addRole(kayıtsızRol);

      await uye.removeRoles(
        uye.roles.filter(
          rol => rol.position >= sunucu.roles.get(ekipRolü).position
        )
      );
      await uye.removeRoles(roles);
      let rochelle = new Discord.RichEmbed()
        .setColor("GOLD")
        .setDescription(
          `${yeni} **adlı üye** \`ᛉ\` **tagımızı çıkardığı için** <@&753301287268909258> **rolü alındı!**`
        );
      client.channels.get(logKanali).send(rochelle);
    } catch (err) {
      console.error(err);
    }
  }
});
client.on("message", async message => {
  if (message.content === ".gir") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam Hoşgeldin! ");
    msg.react("753494111847186513");
  }
});



client.on("message", msg => {
  if (msg.content.toLowerCase() === "!tag") {
    msg.channel.sendMessage("ᛉ");
    msg.react("753494215648083998");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.sendMessage("ᛉ");
    msg.react("753494215648083998");
  }
});


client.on("guildMemberAdd", async member => {
  let jail = db.fetch(`devtr.jail_${member.guild.id}_${member.id}`);
  if (!jail) return;
  member.roles.forEach(xfalcon => {
    member.removeRole(xfalcon);
    member.addRole(jail);//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  });
});
//jail e bu db yi eklesene
/*
client.on("guildBanAdd", async (guild, member) => {
  var log = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(logg => logg.entries.first());
  var yapan = guild.members.get(log.executor.id);
  yapan.roles.forEach(sd => yapan.removeRole(sd.id));
  guild.unban(member.id);
});
*/
client.on("guildMemberAdd", member => {
  let cezali = "753301275705081947";
  let uyerol = "753301293291929729";

  if (member.user.username.includes("￥")) {
    member.addRole(cezali);
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.removeRole(uyerol); //Eğer sunucunuzda otorol yoksa bu satırı silin.
    member.send("Yasaklı tagdasın çık git işine");
  }
});

client.on("ready", async message => {
  const channel = client.channels.get("732496075847368780");
  if (!channel) return console.error("Kanal 'ID' girilmemiş.");
  channel
    .join()
    .then(connection => {
      console.log("Başarıyla bağlanıldı.");
    })
    .catch(e => {
      console.error(e);
    });
});

client.on("guildMemberAdd", member => {
  let rakamlar = Array(9)
    .fill(0)
    .map((_, index) => index + 1);

  let nickkontrol = member.user.username.split("");

  if (!tumHarfler("a", "z").some(harf => nickkontrol.includes(harf))) {
    member.setNickname(`• ${member.user.username}`); //Botun değiştirmesini istediğiniz ismi girin.
  } else {
    return; //DevTR
  }

  function tumHarfler(charA, charZ) {
    let a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
      a.push(String.fromCharCode(i));
    }
    return a;
  }
});

/*
client.on('voiceStateUpdate', async(oldUser, newUser) => {
if(oldUser.user.bot || newUser.user.bot) return;
googleTTS(`${newUser.guild.name} Sunucusuna hoşgeldin`, `tr`, 1).then(x => { 
newUser.voiceChannel.join().then(xfalcon => {
xfalcon.playStream(x).on(`end`, (devtr) => {
xfalcon.disconnect();
})
})
})
});*/

client.login(ayarlar.token);

//sunucuya giren kişinin isim değiştirmek 
client.on("guildMemberAdd", member => {
member.setNickname(" ᛉ İsim | Yaş");
 }); 


