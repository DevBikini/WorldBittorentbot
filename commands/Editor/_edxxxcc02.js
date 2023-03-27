/*CMD
  command: /edxxxcc02
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editor

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("Enter new text [example](https://t.me/DevBikini/60)", {
      disable_web_page_preview: true
    })
Bot.run({ command: "/edited", options: { name: "Edit Info" } })

