/*CMD
  command: /edxxxcc03
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

Bot.sendMessage("Enter new text example")
Bot.run({ command: "/edited", options: { name: "Edit Referrals" } })

