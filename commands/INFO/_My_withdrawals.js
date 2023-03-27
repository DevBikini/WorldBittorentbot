/*CMD
  command: /My_withdrawals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: INFO
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var data = Bot.getProperty("user", { list: {} })
var history = data.list[user.telegramid].history
if (!history) {
  var text = "<b>🧾 Withdrawals History</b>\n✨ No Withdrawal found"
} else {
  var text =
    "<b>🧾 Withdrawals History</b>\nHere you can find your last 15 pending or paid withdrawals\n\n" +
    history
}
var inline_keyboard = [[{ text: "🔙 Back", callback_data: "/back_INFO" }]]
Api.editMessageText({
  message_id: message_id,
  text: text,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: inline_keyboard
  }
})

