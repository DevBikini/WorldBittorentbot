/*CMD
  command: @@
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//investment
var info = Bot.getProperty("user", { list: {} })
var data = info.list[user.telegramid]
var investor = Bot.getProperty("investor", { list: {} })
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (investor) {
  for (var ind in investor.list) {
    var tgID = investor.list[ind].user.telegramid
    var hash = investor.list[ind].user.hash
    var invest_time = investor.list[ind].user.invest_time
    var invest_amount = investor.list[ind].user.invest_amount
    var history = investor.list[ind].history
    var currency = investor.list[ind].currency
    if (canRun(invest_time, json_admin.invest)) {
      var ci = json_admin.plan * 1
      var gf = ci / 100
      var amount = invest_amount * gf
      var text =
        "💳 <b>Accurral Reicived</b> 💳\n\n💰 Amount: <b>" +
        amount +
        " " +
        currency +
        "</b>\n📆 Next Update in: <code>23H 59M 60S</code>"
      Api.sendMessage({ chat_id: tgID, text: text, parse_mode: "html" })
      investor.list[hash] = {
        user: {
          telegramid: tgID,
          invest_time: Date.now(),
          invest_amount: invest_amount,
          hash: hash
        },
        history: history,
        currency: currency
      }
      Bot.setProperty("investor", investor, "json")
      //user balance add
      info.list[tgID] = {
        user: {
          balance: data.balance + amount,
          profit: data.profit + amount,
          invested: data.invested,
          affiliate: data.affiliate,
          withdraw: data.withdraw,
          refid: data.refid
        }
      }
      Bot.setProperty("user", info, "json")
      //line can run
    }
    //line index
  }
  //line have list
}
//function
function canRun(time, invest) {
  if (invest) {
    var investTime = invest
  } else {
    var investTime = 24
  }
  var last_run_at = time
  var minutes = (Date.now() - last_run_at) / 1000 / 60
  var minutes_in_day = investTime * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)

  next -= wait_hours * 60
  if (minutes < minutes_in_day) {
    //investment not done yet
    return
  }
  //investment done
  return true
}

