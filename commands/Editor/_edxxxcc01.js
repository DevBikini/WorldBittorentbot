/*CMD
  command: /edxxxcc01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Editor
  answer: *Admin Editor*
  keyboard: Edit Text,Edit Channel\nEdit START Text\nCancel
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var data = admin_info.list["admin"]
if (data.admin == user.telegramid) {
  if (message == "Edit Text") {
    Bot.sendMessage("Enter new text [example](https://t.me/DevBikini/60)", {
      disable_web_page_preview: true
    })
  }
  if (message == "Edit Channel") {
    Bot.sendMessage("Enter new channel [example](https://t.me/DevBikini/60)", {
      disable_web_page_preview: true
    })
  }
  Bot.run({ command: "/edited", options: { name: message } })
}
//
if (message == "Edit START Text") {
    Bot.sendMessage("Enter new Text [example](https://t.me/DevBikini/60)", {
      disable_web_page_preview: true
    })
  }
  Bot.run({ command: "/edited", options: { name: "startText" } })
}
