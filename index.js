const TELEGRAM_BOT = require("node-telegram-bot-api");
require("dotenv").config();
const bot = new TELEGRAM_BOT(process.env.TOKEN, { polling: true });
const { downLoaderVideo } = require("./request");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const name = msg.from.first_name;
try {
  if (messageText == "/start") {
    bot.sendMessage(
      chatId,
      `Assalom alaykum <b>${name}</b>. botimizga xush kelibsiz, Botga <b>youtube</b> link yuboring.`,
      { parse_mode: "HTML" }
    );
  }else{
    const getVideoUrl = await downLoaderVideo(messageText)
    await bot.sendVideo(chatId, getVideoUrl.videoUrl,{caption:`jjghjghj`})

  }
} catch (error) {
  console.log("error", error);
}
  
});
