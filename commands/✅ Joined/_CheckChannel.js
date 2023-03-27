/*CMD
  command: /CheckChannel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = options.result.status
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (
  (status == "member") |
  (status == "administrator") |
  (status == "creator")
) {
  if (json_admin.admin == user.telegramid) {
    ApiRequest({
      text: ReplaceTextToVariable(json_admin.start.text),
      reply_markup: {
        //resize_keyboard: true,
        keyboard: [
          [{ text: "INFO" }],
          [{ text: "DEPOSIT" }, { text: "WITHDRAW" }],
          [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
        ]
      },
      parse_mode: "html",
      disable_web_page_preview: true
    })
    return
  }
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.start.text),
    reply_markup: {
     // resize_keyboard: true,
      keyboard: [
        [{ text: "INFO" }],
        [{ text: "DEPOSIT" }, { text: "WITHDRAW" }],
        [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
      ]
    },
    parse_mode: "html"
  })
  User.setProperty("join", { yes: true }, "json")
  return
}
if (status == "left") {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.join.text),
    reply_markup: {
      resize_keyboard: true,
      keyboard: [[{ text: "✅ Joined" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
