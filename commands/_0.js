/*CMD
  command: /0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var investor = Bot.getProperty("investor")
if(!investor){
Bot.sendMessage("No any investor yet.")
return
}
var no = 0
var all = ""
for (var ind in investor.list) {
  var time = investor.list[ind].user.invest_time
  var no = no + 1
  //Bot.sendMessage()
  var all = all + "Time: " + GetTime(time, json_admin.invest).text + "\n"
}
Api.sendMessage({ text: "Total Invested: " + no + "\n\n" + all })
//sending not

