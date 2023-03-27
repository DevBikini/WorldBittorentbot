/*CMD
  command: /setups
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
admin_info.list["admin"] = {
  plan: 1,
  invest: 1,
  api_key: "",
  secret_key: "",
  admin: user.telegramid,
  currency: "BTT",
  start: { text: "welcome to %botname%" },
  join: {
    text:
      "💡 <b>To use this bot you must join this channel:</b> @CryptoAdAlert",
    channel: "@CryptoAdAlert"
  },
  info: {
    text:
      "👤 <b>Account Info</b>:\n\n<b>➖ Withdrawable Balance</b>:\n  %balance%\n\n<b>💳 Active Investments</b>:\n  %invested%\n\n<b>💰 Total Profit</b>:\n  %profit%\n\n<b>🎁 Total Affiliate Bonus</b>:\n  %affiliate%\n\n<b>💸  Total Withdrawn</b>:\n  %withdraw%"
  },
  referral: {
    text:
      "<b>Referrals Link</b>:\n%reflink%\n\n<b>📊 STATISTICS</b>\n<b>Online</b>\n  %GlobalDays% Days\n<b>User</b>\n  %GlobalUsers% Users\n<b>DEPOSIT</b>\n  %GlobalDeposits% BTT\n<b>WITHDRAW</b>\n  %GlobalWithdrawals% BTT"
  },
  support: { text: "contact", link: "https://t.me/Dev_Bikini" },
  deposit: {
    text:
      "➕ Welcome! Here you can start a new investment!\n\n💵 We offer 1% daily for lifetime",
    text2:
      "⚠️ If you send less than 1 TRX, your deposit will be cancelled!\n\n<b>✅ Send the amount you want to invest to the following address:</b>",
    text3:
      "✅ <b>New Investment Started in Bot</b>\n\n📆<b> Total Investment Duration: </b>lifetime\n\n🗒 <code>Get paid on Every Day</code>\n\n⏱<b> Payment 1% every 24 hours</b>\n\n<b>💴 Invested Amount: </b> %amount% %currency%",
    text4:
      "➕<b> A New Deposit Created</b>\n\n👤By Investor: %mention%\n💰 Amount: <b>%amount% %currency%</b>\n\n%hash%"
  },
  withdraw: {
    minimum: 1,
    maximum: 1,
    deposit: 1,
    depomin: 1,
    text:
      "💵 <b>Withdrawal Paid</b>\nThe owner <b>Automatically Paid your withdrawal of %amount% %currency%</b> on your wallet" +
      " \n<code>%wallet%</code>\n\n%txid%",
    text2:
      "➖ <b>✨ Withdraw Success</b>" +
      " \n\n<b>User: </b>%username%\n<b>Amount: </b>%amount% %currency%\n\n%txid%"
  }
}
Bot.setProperty("admin", admin_info, "json")
Bot.sendMessage("/admin set to default")

