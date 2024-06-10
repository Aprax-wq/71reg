class Gacıbul {
  constructor () {
    (this.name = "gacıbul", this.alias = ["kızbul"]);
  };
  
  async operate ({client, message, args, author, member, config}) { 
    if (author.id !== config.Import.Owners[0]) return;

    let isim = args[0];
    let yaş = args[1];
    let i =0;

    if (!isim || !yaş) return message.channel.send("ya orospu çocuğu detaylı Arama için isim yaş girmen laızm hem girmiyon hem de uğraşa sokuyon")
    let kızlar = message.guild.members.cache.filter(x => x.displayName.includes(isim) || x.displayName.includes(yaş)).split(0,9).map(x=> i+1 + x.user.discriminator);
    message.channel.send(`sa \n\n ${kızlar} `)
  };
};

module.exports = Gacıbul;
