/*CMD
  command: /Errors
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel = params.slice(1)
Bot.sendMessage(
  "*Ohhh error happen*, please add this [bot](t.me/" +
    bot.name +
    ") in You're [channel](t.me/" +
    channel +
    ") as administration. or change the channel",
  { disable_web_page_preview: true }
)
