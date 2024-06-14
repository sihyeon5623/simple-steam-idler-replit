const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [289070, 1174180, 359550, 550,105600, 1281930, 730, 1144200, 1091500, 1245620, 553850, 346110, 8500, 1973530, 239140, 537340, 1172620 , 346010, 629730, 322330, 2788630, 477160, 1085660, 312520 ];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible
//            문명  레데리  레식 레포데 테라리아 티모드로더 카스2  레오낫 사펑 엘든링 헬다이버 아크 이브 리썰 다잉라이트 것츠 씨딥1172620   비시즈  블레이드앤소서리   돈스타브 낫띵투게더 휴먼폴플렛  데가   레인월드  ,

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
