const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [1174180, 359550, 105600, 1281930, 730, 1144200, 1091500, 1245620, 553850, 346110];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible
//레데리  레식 테라리아 티모드로더 카스2  레오낫 사펑 엘든링 헬다이버 ㅏ

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
