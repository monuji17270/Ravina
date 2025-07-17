module.exports.config = {
  name: "Ahad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://ibb.co/SDtvYzBx"
     ];
     var callback = () => api.sendMessage({body:`🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰

 ཫ𝐀𝐇𝐀𝐃 𝐌𝐔𝐆𝐇𝐀𝐋)

𝐀𝐠𝐞 : 22

𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : SINGLE 😎


𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 https://www.facebook.com/share/1F6RgQmnLL/

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : 0341xxx

 🚩🌍❤️🙂!❤🙂♣️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
