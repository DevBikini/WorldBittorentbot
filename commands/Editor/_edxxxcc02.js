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

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter new text [example](https://t.me/DevBikini/62)",
  parse_mode: "markdown",
  disable_web_page_preview: true
})
Bot.run({
  command: "/admin_edited",
  options: { name: "info", message_id: request.message.message_id }
})

