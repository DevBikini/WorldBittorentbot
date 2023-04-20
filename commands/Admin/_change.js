/*CMD
  command: /change
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
if (params == "cc") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new crypto currency to use Deposit and Withdrawal like. <b>BTT, TRX</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit currency", message_id: message_id }
  })
  return
}
if (params == "cak") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Api key</b> to use Deposit and Withdrawal. <a href='t.me/CryptoAdGateWayBot'>Get Apikey</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit apikey", message_id: message_id }
  })
  return
}
if (params == "csk") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Secret key</b> to use Deposit and Withdrawal. <a href='t.me/CryptoAdGateWayBot'>Get Secretkey</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit secretkey", message_id: message_id }
  })
  return
}
if (params == "ctw") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Text Withdrawal</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit withdrawTex", message_id: message_id }
  })
  return
}
if (params == "mwd1") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Minimum Withdraw</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit min.", message_id: message_id }
  })
  return
}
if (params == "ctwc") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Channel Text Withdrawal</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit withdrawTexChannel", message_id: message_id }
  })
  return
}
//re-in
if (params == "re-in") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Re-Invesment Text</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",

    disable_web_page_preview: true,
    parse_mode: "html"
  })
  Bot.run({
    command: "/edited",
    options: { name: "Re-in", message_id: message_id }
  })
  return
}
//re-ch
if (params == "re-ch") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Re-Invesment Channel Text</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",

    disable_web_page_preview: true,
    parse_mode: "html"
  })
  Bot.run({
    command: "/edited",
    options: { name: "Re-ch", message_id: message_id }
  })
  return
}
//depo text
if (params == "ctd") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Deposit Text</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit deposittext3", message_id: message_id }
  })
  return
}
//depo channel text
if (params == "ctdc") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Enter new <b>Deposit Channel Text</b>. <a href='https://t.me/DevBikini/62'>Example:</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit deposittext4", message_id: message_id }
  })
  return
}
//depo min
if (params == "md") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Minimum Deposit</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit mindepo.", message_id: message_id }
  })
  return
}
//referral com
if (params == "mwd2") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Referral Commission</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit max.", message_id: message_id }
  })
  return
}
//refbon
if (params == "rb") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Referral Bonus</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit RefB", message_id: message_id }
  })
  return
}
//welcomeb
if (params == "wb") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Welcome Bonus</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit WelB", message_id: message_id }
  })
  return
}
//here
if (params == "ip") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Investment Plan</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit InvestPlan", message_id: message_id }
  })
  return
}
if (params == "im") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Investment in Hour</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit Invest", message_id: message_id }
  })
  return
}
if (params == "expin") {
  Api.editMessageText({
    message_id: message_id,
    text: "Enter new <b>Investment Expired</b>:",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/edited",
    options: { name: "Edit InvestExp", message_id: message_id }
  })
  return
}
Bot.sendMessage(params)

