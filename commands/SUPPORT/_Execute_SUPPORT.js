/*CMD
  command: /Execute_SUPPORT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: SUPPORT

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var inline_keyboard = [
  [
    { text: "Support", url: json_admin.support.link },
    { text: "Developer", url: "https://t.me/Dev_Bikini" }
  ]
]
var admin_inline = [
  [
    { text: "Support", url: json_admin.support.link },
    { text: "Developer", url: "https://t.me/Dev_Bikini" }
  ],
  [
    { text: "📝 Edit Text", callback_data: "/edxxxcc04" },
    { text: "📝 Edit SupportLink", callback_data: "/edxxxcc04 go" }
  ]
]
if (json_admin.admin == user.telegramid) {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.support.text),
    reply_markup: {
      inline_keyboard: admin_inline
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
ApiRequest({
  text: ReplaceTextToVariable(json_admin.support.text),
  reply_markup: {
    inline_keyboard: inline_keyboard
  },
  parse_mode: "html",
  disable_web_page_preview: true
})

