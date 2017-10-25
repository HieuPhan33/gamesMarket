app.controller("MainController", ['$scope', function($scope){
	$scope.games =
	[
		{
			name 		: "Clash Royale",
			description : "Freemium mobile tower rush video games",
			publisher	: "Super Cell",
			pubDate		: new Date("2016","03","02"),
			icon		: "img/clashroyale.jpg"
		},
		
		{
			name		: "League of Legends",
			description	: "League of Legends is a multiplayer online battle arena video game ",
			publisher	: "Riot",
			pubDate		: new Date("2009","10","03"),
			icon		: "img/leagueoflegends.jpg"
		},
		{
			name		: "Dota 2",
			description	: "Dota 2 is a free-to-play multiplayer online battle arena video game ",
			publisher	: "Valve",
			pubDate		: new Date("2013","07","09"),
			icon		: "img/dota.jpg"
		}
	]
}]);