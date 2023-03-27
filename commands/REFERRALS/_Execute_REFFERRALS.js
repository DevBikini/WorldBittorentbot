/*CMD
  command: /Execute_REFFERRALS
  help: 
  need_reply: 
  auto_retry_time: 
  folder: REFERRALS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var inline_keyboard = [
  [{ text: "👫 Active Referrals", callback_data: "/My_Referrals" }]
]
if (json_admin.admin == user.telegramid) {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.referral.text),
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [{ text: "👫 Active Referrals", callback_data: "/My_Referrals" }],
        [{ text: "📝 Edit Text", callback_data: "/edxxxcc03" }]
      ]
    }
  })
  return
}
ApiRequest({
  text: ReplaceTextToVariable(json_admin.referral.text),
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: inline_keyboard
  }
})

