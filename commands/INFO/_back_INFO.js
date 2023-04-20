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
if (json_admin.admin == user.telegramid) {
  Api.editMessageText({
    message_id: message_id,
    text: ReplaceTextToVariable(json_admin.info.text),
    reply_markup: {
      inline_keyboard: GetButton("info")
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
    inline_keyboard: GetButton("info")
  },
  parse_mode: "html",
  disable_web_page_preview: true
})
