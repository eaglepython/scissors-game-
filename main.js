const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||userInput === 'paper' || userInput === 'scissors'){
      return userInput ;
    }
    else{
      console.log("Error! please type rock or paper or scissors")
    }
    };
    
     console.log(getUserChoice ('paper'))
     console.log(getUserChoice ('lol'))
    
    
    const  getComputerChoice =()=>{
      const randomNumber = Math.floor(Math.random()*3);
    
    switch(randomNumber){
      case 0:
        return 'rock'
      case 1: 
        return 'paper'
      case 2:
        return 'scissors'
    }
    }
    
    console.log(getComputerChoice());
    console.log(getComputerChoice());
    console.log(getComputerChoice());
    
    const determineWinner = ( userChoice, computerChoice) => {
      if (userChoice === computerChoice){
        return "The game was a Tie"
      }
    if(userChoice==="rock"){
      if (computerChoice === "paper"){
        return "The computer won"
      }else{
        return "The user won"
    }
    }
    if(userChoice==="paper"){
      if (computerChoice === "paper"){
        return "The computer won"
      }else{
        return "Congratulations you won"
    }
    }
    if (userChoice =="paper"){
      if(computerChoice === "scissors"){
        return "Sorry computer won!"; 
      }else{
        return "Congratulations ,you won!";
      }
    }
    if (userChoice =="scissors"){
      if(computerChoice =="rock"){
        return "Sorry, computer won!";
      } else{
        return "Congratulatons , you won!";
      }
    }
    };
    
    
    const playGame = () =>{
      const userChoice = getUserChoice("paper");
      const  computerChoice = getComputerChoice();
      console.log("you threw: " + userChoice);
      console.log("The Computer threw: " + computerChoice);
    
      console.log(determineWinner(userChoice, computerChoice));
    }
    
    
    playGame()
    
    