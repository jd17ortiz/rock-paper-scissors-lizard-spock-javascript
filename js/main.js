var game = game || {};

game.model = function(user_choise){

	var _private = {
		calculatePlayMachine: function(){

		},
		processPlay: function(){
			var computer_choise = _private.randomChoise(0,4);

			alert('USER PLAY: ' + _private.array_option[user_choise]);
			alert('COMPUTER PLAY' + _private.array_option[computer_choise])
			var win_combination = _private.array_combination[_private.array_option[user_choise]];

			if(computer_choise === user_choise){
				alert('TIE')
			}else if(win_combination.indexOf(computer_choise)!=-1){
				alert('WIN COMPUTER')
			}else{
				
				alert('WIN USER')
			}
		},
		randomChoise: function(min, max){
			var random = Math.floor( Math.random() * ( max - min + 1 ) + min );

			return random;
		},
		array_combination: 
		{
			"scissors" : [3,1],
			"paper" : [2,0],
			"rock" : [1,4],
			"lizard" : [0,3],
			"spock" : [4,2]
		},
		array_option : ["rock", "paper", "scissors", "lizard", "spock"]


	}

	var _public = {

		getWinner : _private.processPlay(),
		getPlayMachine : _private.calculatePlayMachine(),
		getRandomChoise : _private.randomChoise(),
	}
	
	return _public
};

game.logic = function(){

	var model =  new game.model(0);

}


var new_game = new game.logic;

