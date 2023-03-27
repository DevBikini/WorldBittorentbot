/*CMD
  command: /change
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params == "cc") {
  Bot.sendMessage("Enter new currncy use to deposit and withdrawal")
  Bot.run({ command: "/edited", options: { name: "Edit currency" } })
  return
}
if (params == "cak") {
  Bot.sendMessage("Enter new Api key use to deposit and withdrawal")
  Bot.run({ command: "/edited", options: { name: "Edit apikey" } })
  return
}
if (params == "csk") {
  Bot.sendMessage("Enter new Secret key use to deposit and withdrawal")
  Bot.run({ command: "/edited", options: { name: "Edit secretkey" } })
  return
}
if (params == "ctd") {
  Bot.sendMessage("Enter new text example ")
  Bot.run({ command: "/edited", options: { name: "Edit deposittext3" } })
  return
}
if (params == "ctdc") {
  Bot.sendMessage("Enter new text example ")
  Bot.run({ command: "/edited", options: { name: "Edit deposittext4" } })
  return
}
if (params == "mwd1") {
  Bot.sendMessage("Enter Minimum Withdraw")
  Bot.run({ command: "/edited", options: { name: "Edit min." } })
  return
}
if (params == "mwd2") {
  Bot.sendMessage("Enter Referral Commission in percent")
  Bot.run({ command: "/edited", options: { name: "Edit max." } })
  return
}
if (params == "md") {
  Bot.sendMessage("Enter Minimum Deposit")
  Bot.run({ command: "/edited", options: { name: "Edit mindepo." } })
  return
}
if (params == "ctw") {
  Bot.sendMessage("Enter Withdraw Text")
  Bot.run({ command: "/edited", options: { name: "Edit withdrawTex" } })
  return
}
if (params == "ctwc") {
  Bot.sendMessage("Enter Withdraw Text Channel")
  Bot.run({ command: "/edited", options: { name: "Edit withdrawTexChannel" } })
  return
}
Bot.sendMessage(params)

