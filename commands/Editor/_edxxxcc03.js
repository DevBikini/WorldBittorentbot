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

Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter new text [example](https://t.me/DevBikini/62)",
  disable_web_page_preview: true,
  parse_mode: "markdown"
})
Bot.run({
  command: "/admin_edited",
  options: { name: "ref", message_id: request.message.message_id }
})
