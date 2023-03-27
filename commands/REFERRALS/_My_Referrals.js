/*CMD
  command: /My_Referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: REFERRALS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
//my referral active
var data = Bot.getProperty("active_referral", { list: {} })
var history = data.list[user.telegramid]
if (!history) {
  var text = "📑 Advanced Active Referrals Report\nNot any Invest"
} else {
  var text =
    "📑 Advanced Active Referrals Report\n\n" +
    history.active
}
Api.editMessageText({
  message_id: message_id,
  text: text,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [[{ text: "🔙 Back", callback_data: "/backref" }]]
  }
})

