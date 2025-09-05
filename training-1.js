const readline = require('readline-sync'); 
 
let hasTorch = true; 
let hasMap = false; 
let hasSword = false; 
let hasCompass = false; 
 
console.log("You wake up in a dark forest. You have a torch but no map."); 
console.log("You see two paths: one leading to the mountains, the other to the village."); 
const choice = readline.question("Do you go to the 'mountains' or the 'village'? "); 
 
if (choice === "mountains") { 
    if (hasTorch) { 
        console.log("You safely navigate through the dark mountains."); 
        console.log("You find a mysterious cave. Do you enter?"); 
        const caveChoice = readline.question("Enter the cave? (yes/no) "); 
         
        if (caveChoice === "yes") { 
            console.log("Inside, you find a treasure chest and a sword."); 
            hasSword = true; 
            console.log("You take the sword and leave the cave."); 
        } else { 
            console.log("You decide to avoid the cave and continue your journey."); 
        } 
    } else { 
        console.log("It's too dark to proceed. You decide to turn back."); 
    } 
} else if (choice === "village") { 
    console.log("You find your way to the village."); 
    console.log("A merchant offers you a map and a compass for trade."); 
     
    const tradeChoice = readline.question("Do you trade your torch for a map and compass? (yes/no) "); 
    if (tradeChoice === "yes") { 
        hasTorch = false; 
        hasMap = true; 
        hasCompass = true; 
        console.log("You now have a map and a compass, but no torch."); 
    } else { 
        console.log("You keep your torch and move on."); 
    } 
} else { 
    console.log("You get lost and wander aimlessly."); 
} 
 
console.log("Your journey continues...");
