/*CMD
  command: /Execute_RE-INVEST
  help: 
  need_reply: 
  auto_retry_time: 
  folder: RE-INVEST
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var user_info = Bot.getProperty("user", { list: {} })
var json_user = user_info.list[user.telegramid]
var text =
  "<b>How many " +
  json_admin.currency +
  " you want to Reinvest</b>?\n\n  📥 Minimum Reinvest: <b>" +
  json_admin.withdraw.depomin +
  " " +
  json_admin.currency +
  "</b>\n  📤 Maximum Reinvest: <b>" +
  json_user.user.balance.toFixed(3) +
  " " +
  json_admin.currency +
  "</b>\n\n <i>Maximum Amount Corresponds To Your Balance</i>\n\n<b>➡️ Send Now The Amount Of You Want To Reinvest</b>"
if (json_user.user.balance < json_admin.withdraw.depomin) {
  Bot.sendMessage(
    "❌ *You can not reinvest right now*: You need at least " +
      json_admin.withdraw.depomin +
      " " +
      json_admin.currency +
      " to reinvest!"
  )
  return
}
ApiRequest({
  text: ReplaceTextToVariable(json_admin.deposit.text),
  parse_mode: "html",
  disable_web_page_preview: true
})
ApiRequest({
  text: text,
  parse_mode: "html",
  reply_markup: {
    resize_keyboard: true,
    keyboard: [[{ text: "🔙 Back" }]]
  },
  parse_mode: "html",
  disable_web_page_preview: true
})
Bot.runCommand("/Reinvest")
