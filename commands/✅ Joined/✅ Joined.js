/*CMD
  command: ✅ Joined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var joined = User.getProperty("join")
if (!joined) {
  Api.getChatMember({
    chat_id: json_admin.join.channel,
    user_id: user.telegramid,
    on_result: "/CheckChannel"
  })
  return
}
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
