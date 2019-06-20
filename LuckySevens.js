function rollDice(){
			return Math.floor(Math.random()*6)+1;
}

//Ask user for starting bet 
//have to click play in order to sumbit bet 

function playValidation(){
	//var startBet = document.form["betForm"]["inputbet"].value;
	var startBet = document.getElementById("inputbet").value
	var dice1;
	var dice2;
	var betMoney = parseInt(startBet);
	var numOfRolls = 0;
	var maxMoney = 0;
	var maxRolls = 0;
	debugger;
	if (startBet <= 0){
		alert("No bet has been placed!!")
	}
	else
	{
		while(betMoney > 0){
			dice1 = rollDice();
			dice2 = rollDice();
			numOfRolls += 1;
			if(dice1 + dice2 == 7){
				betMoney = betMoney + 4;
				maxMoney += betMoney;
				maxRolls += 1;
			}
			else if(dice1 +  dice2 != 7){
				betMoney = betMoney - 1;
			}

		}
	}
	
	document.getElementById("startingBet").innerText = startBet;
	document.getElementById("TotalRolls").innerText = numOfRolls;
	document.getElementById("maxMoney").innerText = maxMoney;
	document.getElementById("highRoll").innerText = maxRolls;
	return false;
	
	
	
}	