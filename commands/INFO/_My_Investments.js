/*CMD
  command: /My_Investments
  help: 
  need_reply: 
  auto_retry_time: 
  folder: INFO
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var data = Bot.getProperty("my_investment", { list: {} })
var investment = data.list[user.telegramid]
if (!investment) {
  var text = "<b>⚙️ Last 10 Active Investments</b>\n✨ No investments found"
} else {
  var text =
    "<b>⚙️ Last 10 Active Investments</b>\nHere you can find your last last 10 Active Investment\n\n" +
    investment.history
}
var inline_keyboard = [[{ text: "🔙 Back", callback_data: "/back_INFO" }]]
Api.editMessageText({
  message_id: message_id,
  text: text,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: inline_keyboard
  }
})
