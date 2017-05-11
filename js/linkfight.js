var linklife = 100;
var ganonlife = 100; 
var linkmessage = "";
var ganonmessage = "";

function userPick() {
    if (linklife > 0 && ganonlife > 0) {
        //Link's attacks
        var userChoice = prompt("Time to attack! Choices: Spin / Stab / Slash").toUpperCase();
        //Spin Attack
        if (userChoice === 'SPIN') {
            console.log('spin');
            var linkspin = Math.random();
            if (linkspin < 0.34) {
                ganonlife -= 10;
                linkmessage = 'You used Spin <br> Your attack did some damage';
            } else if(linkspin <= 0.67) {
                ganonlife -= 15;
                linkmessage = 'You used Spin <br> You got him!';
            } else {
                ganonlife -= 0;
                linkmessage = 'You used Spin <br> Your attack was ineffective!';
            }
            if (ganonlife >  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: " + ganonlife; 
            }
            else if (ganonlife <=  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: 0";
            }
        }     
        //Stab Attack
        else if(userChoice === 'STAB') {
            console.log('Stab');
            var linkstab = Math.random();
            if (linkstab < 0.34) {
                ganonlife -= 15;
                linkmessage = 'You used Stab <br> Ganon got hurt.';
            } else if(linkstab <= 0.67) {
                ganonlife -= 20;
                linkmessage = 'You used Stab <br> You got him!';
            } else {
                ganonlife -= 0;
                linkmessage = 'You used Stab <br> You missed.';
            }
            if (ganonlife >  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: " + ganonlife; 
            }
            else if (ganonlife <=  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: 0";
            }
        }     
        //Slash Attack
        else if(userChoice === 'SLASH'){
            console.log('SLASH');
            var linkslash = Math.random();
            if (linkslash < 0.34) {
                ganonlife -= 20;
                linkmessage = 'You used Slash <br> Ganon got hurt.';
            } else if(linkslash <= 0.67) {
                ganonlife -= 25;
                linkmessage = 'You used Slash <br> Ganondorf is really hurt!';
            } else {
                ganonlife -= 0;
                linkmessage = 'You used Slash <br> Ganon evaded your attack.';
            }
            if (ganonlife >  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: " + ganonlife; 
            }
            else if (ganonlife <=  0) {
                document.getElementById("ganonlf").innerHTML = linkmessage + "<br>" + "Ganondorf's life: 0";
            }
        }     
        //Nonsense input
        else {
            console.log('Invalid');
            return
        }
        //Ganon's attack
        if (ganonlife > 0) {
            var GanonChoice = computerPick();
        }
    }
    //You die
    else if (linklife <= 0) {
        linklife = 0;
        console.log("You lost!")
        document.getElementById("demo").innerHTML = '<a href="'+ '#/lose'+'">'+"You lost!"+'</a>';
        return
    }
    //Ganon dies
    else if (ganonlife <= 0) {
        ganonlife = 0;
        console.log("You defeated Ganondorf!")
        document.getElementById("demo").innerHTML = '<a href="'+ '#/win'+'">'+"You won!"+'</a>';
        return
    }
}   


computerPick = function(){
    var computerChoice = Math.random();
    //Flame Attack
    if (computerChoice < 0.34) {
        console.log ('Ganondorf used Flame attack.');
        var ganonFlame = Math.random();
        if (ganonFlame < 0.34) {
            linklife -= 10;
            ganonmessage = 'Ganondorf used Flame Attack <br> Ganondorf got a hit!';
        } else if(ganonFlame <= 0.67) {
            linklife -= 15;
            ganonmessage = "Ganondorf used Flame Attack <br> Ganon got you!";
        } else {
            linklife -= 0;                
            ganonmessage = "Ganondorf used Flame Attack <br> Ganon's attack was ineffective!";
        }
        if (linklife >  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: " + linklife; 
        }
        else if (linklife <=  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: 0"; 
        }
    } 
    //Smash Attack
    else if(computerChoice <= 0.67) {
        console.log ('Ganondorf used Smash attack.');
        var ganonSmash = Math.random();
        if (ganonSmash < 0.34) {
            linklife -= 15;
            ganonmessage = "Ganondorf used Smash Attack <br> Ganon's attack was effective!";
        } else if(ganonSmash <= 0.67) {
            linklife -= 20;
            ganonmessage = "Ganondorf used Smash Attack <br> Ganondorf got a hit!";
        } else {
            linklife -= 0;                
            ganonmessage = 'Ganondorf used Smash Attack <br> Ganon missed!';
        }
        if (linklife >  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: " + linklife; 
        }
        else if (linklife <=  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: 0"; 
        }
    } 
    //Dash Attack
    else {
        console.log ('Ganondorf used Dash attack.');
        var ganonDash = Math.random();
        if (ganonDash < 0.34) {
            linklife -= 20;
            ganonmessage = "Ganondorf used Dash Attack <br> You took a lot of damage.";
        } else if(ganonDash <= 0.67) {
            linklife -= 25;
            ganonmessage= "Ganondorf used Dash Attack <br> Ganon's attack VERY effective!";
        } else {
            linklife -= 0;
            ganonmessage = 'Ganondorf used Dash Attack <br> You evaded his attack!';
        } 
        if (linklife >  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: " + linklife; 
        }
        else if (linklife <=  0) {
            document.getElementById("linklf").innerHTML = ganonmessage + "<br>" + "Link's life: 0"; 
        }
    }
     
};
