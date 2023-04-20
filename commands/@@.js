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
var investor = Bot.getProperty("investor")
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (investor) {
  for (var ind in investor.list) {
    var tgID = investor.list[ind].user.telegramid
    var data = info.list[tgID]
    var hash = investor.list[ind].user.hash
    var invest_time = investor.list[ind].user.invest_time
    var invest_amount = investor.list[ind].user.invest_amount
    var expire = investor.list[ind].expire
    var currency = investor.list[ind].currency
    if (canRun(invest_time, json_admin.invest)) {
      var ci = json_admin.plan * 1
      var gf = ci / 100
      var amount = invest_amount * gf
      if (json_admin.exp == 0) {
        var next =
          "📆 Next Update in: <code>" +
          GetTime(Date.now(), json_admin.invest).text +
          "</code>"
      } else {
        var next = "<code>Investment Expire</code>"
      }
      var text =
        "💳 <b>Accurral Reicived</b> 💳\n\n💰 Amount: <b>" +
        amount +
        " " +
        currency +
        "</b>\n" +
        next
      Api.sendMessage({ chat_id: tgID, text: text, parse_mode: "html" })
      if (json_admin.exp == 0) {
        //lifetime
        investor.list[hash] = {
          user: {
            telegramid: tgID,
            invest_time: Date.now(),
            invest_amount: invest_amount,
            hash: hash
          },
          currency: currency,
          expire: expire
        }
        Bot.setProperty("investor", investor, "json")
      } else {
        if (json_admin.exp > expire + 1) {
          //run more round
          investor.list[hash] = {
            user: {
              telegramid: tgID,
              invest_time: Date.now(),
              invest_amount: invest_amount,
              hash: hash
            },
            currency: currency,
            expire: expire + 1
          }
          Bot.setProperty("investor", investor, "json")
        } else {
          //stoped investment
          investor.list[hash] = Bot.setProperty("investor", investor, "json")
        }
      }
      //user balance add
      info.list[tgID] = {
        user: {
          balance: data.user.balance + amount,
          profit: data.user.profit + amount,
          invested: data.user.invested,
          affiliate: data.user.affiliate,
          withdraw: data.user.withdraw,
          refid: data.user.refid
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
function GetTime(time, invest) {
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
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    return { text: wait_hours + "H " + wait_minutes + "M " + seconds + "S" }
  }
  //investment done
  return { text: "24H 59M 60S" }
}
//function validname
function ValidName() {
  if (user.username) {
    return "@" + user.username
  }
  if (user.first_name) {
    return GetLinkNames(user.first_name)
  }
  return GetLinkNames(user.last_name)
}
//function mention name
function MentionName() {
  if (user.username) {
    return GetLinkNames(user.username)
  }
  if (user.first_name) {
    return
    GetLinkNames(user.first_name)
  }
  if (user.last_name) {
    return GetLinkNames(user.last_name)
  }
}
//function get linl
function GetLinkNames(names) {
  return "<a href='tg://user?id=" + user.telegramid + "'>" + names + "</a>"
}

