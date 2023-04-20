/*CMD
  command: /000adButtom
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Editor

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var data = admin_info.list["admin"]
if (data.admin == user.telegramid) {
  if (message == "Edit Text") {
    Bot.sendMessage("Enter new text [example](https://t.me/DevBikini/62)", {
      disable_web_page_preview: true
    })
    Bot.run({ command: "/admin_edited", options: { name: "welcometext" } })
  }
  if (message == "Edit Channel") {
    Bot.sendMessage("Enter new channel [example](https://t.me/DevBikini/62)", {
      disable_web_page_preview: true
    })
    Bot.run({ command: "/admin_edited", options: { name: "channel" } })
  }
  if (message == "Edit START Text") {
    Bot.sendMessage("Enter new Text [example](https://t.me/DevBikini/62)", {
      disable_web_page_preview: true
    })
    Bot.run({ command: "/admin_edited", options: { name: "starttext" } })
  }
}
