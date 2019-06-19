    var guessing_game=(range,chances_of_guessing)=>{//this is the arrow function
        

    var random_number = Math.floor(Math.random()*range)+1; //generates the random number.
    
    var c=random_number%2; //gets the modulus (and stores) calculates the modulus using the percentage sign(%)
        if (c==0){ //checks the results in the modulus if its zero or not
    
            alert("number is even");
    
    }else{ 
    
     alert("number is odd");
    }
    for(count=1;count<=chances_of_guessing;count++){ //Sets the first attempt to run ; the counter stops running once the user has used all the 10 chances of guessing; the counter will keep on increasing one by one for every attempt
    {
    
    let num=prompt("please enter your number:"); //asks for the input or guess of the user. 
        if (num>random_number){
            alert("number is higher,make another guess");
        }
    
        if (num<random_number){
            alert("number is lower, make another guess");
        }
    
         if (num==random_number){
            alert("YOU WIN !");
            break; //ends the game the moment the user wins
         }
    
        if (count==chances_of_guessing){
            alert("YOU LOSE !!");}
    
        }
    }
    }
    guessing_game (10,10); //this is calling the function
    
    //game ready for play
    