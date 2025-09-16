alert("\tgame rules\nrock beats scesor\npaper beats rock\nscesor beats paper\n 1 for rock,2 for scesor, 3 for paper");



let count=0;
let win=0;
let lose=0;
let tie=0;
let you=0;

while(you!=4)
{
    let computer= Math.floor(Math.random()*3)+1;
    let you=prompt("enter your choice (1 for rock,2 for scesor,3 for paper ,4 for exit)")
    
    
    if(you==1 && computer==2)
    {
        console.log("you choose ROCK")
        console.log("computer choose scessor")
        console.log("you lose! ")
        lose+=1
        
    }
    else if(you==1 && computer==3)
        {
            console.log("you choose ROCK")
            console.log("computer choose paper")
            console.log("you lose! ")
            lose+=1
        
        }
        else if(you==2 && computer==1)
            {
                console.log("you choose scessor ")
                console.log("computer choose rock")
                console.log("you lose! ")
                lose+=1
                
            }
            else if(you==2 && computer==3)
                {
                    console.log("you choose scessor")
                    console.log("computer choose paper")
                    console.log("you win! ")
                    win+=1
                    
                }
                else if(you==3 && computer==1)
                    {
                        console.log("you choose paper")
                        console.log("computer choose rock")
                        console.log("you win! ")
                        win+=1
                        
                    }
                    else if(you==3 && computer==2)
                        {
                            console.log("you choose paper")
                            console.log("computer choose scessor")
                            console.log("you lose! ")
                            lose+=1
                            
                        }
                        else if(you==computer)
                        {
                            
                                console.log("math has been tie !");
                            tie+=1;
                        }
                        else if(you===4)
                        {
                            break
                        }
                        else{
                            break
                        }
                        count=count+1;              
                    }
            console.log("total played ",count," times\nyou win :",win,"\nyou lose :",lose,"\n tie :",tie)