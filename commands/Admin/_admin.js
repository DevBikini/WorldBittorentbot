/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (json_admin.admin == user.telegramid) {
  var text = "Welcome Admin"
  var main_buttton = [
    [{ text: "💲 Currency", callback_data: "/Go_edit currency" }],
    [
      { text: "📝 Withdrawal", callback_data: "/Go_edit withdraw" },
      { text: "📝 Re-Invest", callback_data: "/Go_edit reinvest" },
      { text: "📝 Deposit", callback_data: "/Go_edit deposit" }
    ],
    [{ text: "🎁 Bonus", callback_data: "/Go_edit bonus" }],
    [{ text: "⚙ Investment", callback_data: "/Go_edit investment" }]
  ]
  if (params == "back") {
    var message_id = request.message.message_id
    Api.editMessageText({
      message_id: message_id,
      text: text,
      parse_mode: "html",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: main_buttton
      }
    })
    return
  }
  ApiRequest({
    text: text,
    reply_markup: {
      inline_keyboard: main_buttton
    }
  })
}
