var game = game || {};

game.logic = function(user_choise){

	var _private = {
		calculatePlayMachine: function(){

		},
		processPlay: function(){
			var computer_choise = _private.randomChoise(0,4);
			var winner;
			var win_combination = _private.array_combination[_private.array_option[user_choise]];

			if(computer_choise === user_choise){
				_private.printMessage('TIE');
				winner = 'Tie';
			}else if(win_combination.indexOf(computer_choise)!=-1){
				winner = 'Computer win';			
			}else{
				winner = 'User win';
			}
			_private.printMessage('<p>User play <strong>' + _private.array_option[user_choise] + '</strong> and computer play <strong>' + _private.array_option[computer_choise] +'</strong>. The result is: <span class="big-text">'+ winner + '</span></p>');
		},
		printMessage : function(msg){
			document.getElementsByClassName('results')[0].innerHTML=msg
		},
		randomChoise: function(min, max){
			var random = Math.floor( Math.random() * ( max - min + 1 ) + min );

			return random;
		},
		array_combination: 
		{
			"scissors" : [0,4],
			"paper" : [2,3],
			"rock" : [1,4],
			"lizard" : [0,2],
			"spock" : [1,3]
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

	function playTurn(play){
		var logic =  new game.logic(play);	
	}
	


