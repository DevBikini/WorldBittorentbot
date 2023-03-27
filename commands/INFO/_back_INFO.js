/*CMD
  command: /back_INFO
  help: 
  need_reply: 
  auto_retry_time: 
  folder: INFO
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var inline_keyboard = [
  [{ text: "📥 My Investments", callback_data: "/My_Investments" }],
  [{ text: "📤 My Withdrawals", callback_data: "/My_withdrawals" }]
]
var admin_inline = [
  [{ text: "📥 My Investments", callback_data: "/My_Investments" }],
  [{ text: "📤 My Withdrawals", callback_data: "/My_withdrawals" }],
  [{ text: "📝 Edit Text", callback_data: "/edxxxcc02" }]
]
if (json_admin.admin == user.telegramid) {
  Api.editMessageText({
    message_id: message_id,
    text: ReplaceTextToVariable(json_admin.info.text),
    reply_markup: {
      inline_keyboard: admin_inline
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
Api.editMessageText({
  message_id: message_id,
  text: ReplaceTextToVariable(json_admin.info.text),
  reply_markup: {
    inline_keyboard: inline_keyboard
  },
  parse_mode: "html",
  disable_web_page_preview: true
})

