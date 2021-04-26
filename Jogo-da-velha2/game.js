var player1 = "x";
var player2 = "o";
var playtime = player1;
var gameover = false;

atualizamostrador();
preenchimentoespacos();

function atualizamostrador(){
	if (gameover) {
		return;
	} if (playtime == player1) {
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/x.png");
		playtime = player2;
	} else{
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/o.png");
		playtime = player1;
	}
}

function preenchimentoespacos(){
	
}