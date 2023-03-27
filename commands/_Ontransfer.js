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

var newT = Bot.getProperty("admink", { list: {} })
//here herre here here
var admin_info = Bot.getProperty("admin", { list: {} })
var user_info = Bot.getProperty("user", { list: {} })
var investor_info = Bot.getProperty("investor", { list: {} })
var my_investment = Bot.getProperty("my_investment", { list: {} })
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
BBAdmin.installBot({
  email: message,
  bot_id: bot.id,
  as_protected: true,
  bot_properties: [
    { name: "admin", value: admin_info, type: "json" },
    { name: "user", value: user_info, type: "json" },
    { name: "investor", value: investor_info, type: "json" },
    { name: "my_investment", value: my_investment, type: "json" }
  ]
})
Bot.sendMessage("done sent old data")

