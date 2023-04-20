/*CMD
  command: /Execute_INFO
  help: 
  need_reply: 
  auto_retry_time: 
  folder: INFO

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (json_admin.admin == user.telegramid) {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.info.text),
    reply_markup: {
      inline_keyboard: GetButton("info")
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
ApiRequest({
  text: ReplaceTextToVariable(json_admin.info.text),
  reply_markup: {
    inline_keyboard: GetButton("info")
  },
  parse_mode: "html",
  disable_web_page_preview: true
})
