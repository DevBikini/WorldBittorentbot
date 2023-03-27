/*CMD
  command: /backref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: REFERRALS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (json_admin.admin == user.telegramid) {
  Api.editMessageText({
    message_id: message_id,
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
Api.editMessageText({
  message_id: message_id,
  text: ReplaceTextToVariable(json_admin.referral.text),
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ text: "👫 Active Referrals", callback_data: "/My_Referrals" }]
    ]
  }
})

