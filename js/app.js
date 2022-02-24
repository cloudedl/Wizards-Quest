// document.addEventListener("DOMContentLoaded", () => {})
let fire = new Audio('audio/fireWhoosh.wav');
let restoreHealth = new Audio('audio/sparkle.wav');
let water = new Audio('audio/waterFlap.wav');
let whip = new Audio('audio/whipStrike.wav');
let fireElem = new Audio('audio/fireWhooshElem.wav');
let waterElem = new Audio('audio/waterFlapElem.wav');
let whipElem = new Audio('audio/whipStrikeElem.wav');
let startQuest = new Audio('audio/wizardsQuestVO.mp3');

    const wizard = {
        name: 'wizard',
        health: 60
    }

    let elem = [
        {
            name: 'Fire Elemental',
            type: 'fire',
            health: 40
        },
        {
            name: 'Water Elemental',
            type: 'water',
            health: 40
        },
        { 
            name: 'Grass Elemental',
            type: 'grass',
            health: 40
        }


    ]




    //turn counter for each turn in the battler
    let turn = 1 
    let battleCounter = 0




    //function to write current health status of characters into html
    const enemyHealthStatus = () => {
        elementalHealth.innerText = `Elemental Health ${elem[battleCounter].health}`
    }
    const playerHealthStatus = () => {
        wizardHealth.innerText = `Wizard Health: ${wizard.health}`
    }




// Functions for Attacks and Heals
    const fireball = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by fireball', damage)
        if (elem[battleCounter].type === 'grass') {
            damage = 2 * damage
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else if (elem[battleCounter].type === 'water') {
            damage = damage / 2
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else {
            elem[battleCounter].health = elem[battleCounter].health + damage
            document.getElementById('combatLog').innerText = `Wizard healed Elemental for ${damage} health`
        } 
        
        document.getElementById('fireBallA').style.display = 'block'
        setTimeout(function() {document.getElementById('fireBallA').style.display = 'none'}, 800)


        //have enemyAttack function activate after some time
        setTimeout(() => {enemyAttack()}, 1000);
        //disable the attack buttons after pressing one
        disableButtons(true)
        //move the turn counter forward
        turn += 1
    
        // console.log('did fireball reduce health of fireElemental' , fireElemental)
        enemyHealthStatus()
    }
    

    const waterJet = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by waterJet', damage)

        if (elem[battleCounter].type === 'fire') {
            damage = 2 * damage
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else if (elem[battleCounter].type === 'grass') {
            damage = damage / 2
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else {
            elem[battleCounter].health = elem[battleCounter].health + damage
            document.getElementById('combatLog').innerText = `Wizard healed Elemental for ${damage} health`
        }

        document.getElementById('waterJetA').style.display = 'block'
        setTimeout(function() {document.getElementById('waterJetA').style.display = 'none'}, 800)

        setTimeout(() => {enemyAttack()}, 1000);
        disableButtons(true)
        turn +=1
        // console.log('did waterJet reduce the health of the fireElemental', fireElemental)
        enemyHealthStatus()
    }

    // waterJet()
    // console.log('did waterJet do extra damage', fireElemental)

    const vineWhip = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by vineWhip', damage)

        if (elem[battleCounter].type === 'water') {
            damage = 2 * damage
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else if (elem[battleCounter].type === 'fire') {
            damage = damage / 2
            elem[battleCounter].health = elem[battleCounter].health - damage
            document.getElementById('combatLog').innerText = `Wizard dealt ${damage} damage to the Elemental`
        } else {
            elem[battleCounter].health = elem[battleCounter].health + damage
            document.getElementById('combatLog').innerText = `Wizard healed Elemental for ${damage} health`
        }

        document.getElementById('vineWhipA').style.display = 'block'
        setTimeout(function() {document.getElementById('vineWhipA').style.display = 'none'}, 800)
        setTimeout(() => {enemyAttack()}, 1000);
        disableButtons(true)
        turn += 1
        // console.log('did vineWhip reduce the health of the fireElemental', fireElemental)
        enemyHealthStatus()
    }

    const heal = () => {
        min = Math.ceil(4);
        max = Math.floor(12);
        healing = Math.floor(Math.random() * (12 - 4) + 4);
        wizard.health += healing
        // console.log('is my wizard healing', wizard)
        setTimeout(() => {enemyAttack()}, 1000);
        disableButtons(true)
        turn += 1
        playerHealthStatus()

        document.getElementById('combatLog').innerText = `Wizard healed themselves by ${healing} health`

        document.getElementById('healA').style.display = 'block'
        setTimeout(function() {document.getElementById('healA').style.display = 'none'}, 800)
        
    }



    const enemyAttack = () => {
        
        if (elem[battleCounter].health > 1) {
            if (turn % 3 === 0) {
                min = Math.ceil(4);
                max = Math.floor(12);
                let superDamage = Math.floor(Math.random() * (12 - 4) + 4);
                wizard.health -= superDamage
                document.getElementById('combatLog2').innerText = `Elemental dealt ${superDamage} damage to the Wizard`
                // console.log('how much superDamage was done', superDamage)
            } else {
                min = Math.ceil(2);
                max = Math.floor(4);
                let damage = Math.floor(Math.random() * (4 - 2) + 2);
                wizard.health -= damage
                document.getElementById('combatLog2').innerText = `Elemental dealt ${damage} damage to the Wizard`
                // console.log ('damage done by enemy', damage)
            }
        }
        
        console.log('did the wizard take damage', wizard)
        console.log('what turn is it', turn)
        disableButtons(false)
        playerHealthStatus()
        
        if (battleCounter === 0) {
            document.getElementById('fireElementA').style.display = 'block'
            setTimeout(function() {document.getElementById('fireElementA').style.display = 'none'}, 800)
            fireElem.play()
        } else if (battleCounter === 1) {
            document.getElementById('waterJetElem').style.display = 'block'
            setTimeout(function() {document.getElementById('waterJetElem').style.display = 'none'}, 800)
            waterElem.play()
        } else if (battleCounter === 2) {
            document.getElementById('vineWhipElem').style.display = 'block'
            setTimeout(function() {document.getElementById('vineWhipElem').style.display = 'none'}, 800)
            whipElem.play()
        }
        
       
      
        
        //what happens when someone dies.
        if (wizard.health < 1) {
            console.log('the player is dead')
            wizard.health = 0
            disableButtons(true)
            playerHealthStatus()
            document.getElementById('wizard').style.transform = 'rotate(90deg)';
            document.getElementById('defeat').style.display = 'inline'
        } else if (elem[battleCounter].health < 1) {
            console.log('player wins!')
            elem[battleCounter].health = 0
            disableButtons(true)
            enemyHealthStatus()

            if (battleCounter === 0) {
                document.getElementById('fireElemental').style.transform = 'rotate(-90deg)';
            } else if (battleCounter === 1) {
                document.getElementById('waterElemental').style.transform = 'rotate(-90deg)';
            } else if (battleCounter === 2) {
                document.getElementById('grassElemental').style.transform = 'rotate(-90deg)';
            }
            
            document.getElementById('victory').style.display = 'inline'
            document.get
        }

    }



//function disables the buttons once someone is defeated.
//answer true or false when calling the function 
const disableButtons = (yesNo) => {
    document.getElementById('waterJet').disabled = yesNo
    document.getElementById('fireBall').disabled = yesNo
    document.getElementById('heal').disabled = yesNo
    document.getElementById('vineWhip').disabled = yesNo
}



//hides the splash screen and reveals the battleBox elements
const startGame = () => {
    let start = document.getElementById('splashScreen')
    let battler = document.getElementById('battleBox')

    start.style.display = 'none'
    battler.style.display = 'block'
}


const setBattleField = () => {
    battleCounter += 1
    if (battleCounter === 1) {
        document.getElementById('fireElemental').style.display = 'none'
        document.getElementById('waterElemental').style.display= 'block'
        document.getElementById('victory').style.display = 'none'
        disableButtons(false)
    } else if (battleCounter === 2) {
        document.getElementById('waterElemental').style.display = 'none'
        document.getElementById('grassElemental').style.display= 'block'
        document.getElementById('victory').style.display = 'none'
        disableButtons(false)
    }
}

// //setAudioVolume to half
// const setHalfVolume = () => {
//     let myAudio = document.getElementById('splashAudio')
//     myAudio.volume = 0.2; 
// }

const wizardHealth = document.getElementById('wizardHealth')
const fireElementalHealth = document.getElementById('fireElementalHealth')   
document.getElementById('nextFight').addEventListener('click', setBattleField)     
document.getElementById('start').addEventListener('click', startGame)
document.getElementById('heal').addEventListener('click', heal )
document.getElementById('waterJet').addEventListener('click', waterJet)
document.getElementById('vineWhip').addEventListener('click', vineWhip)
document.getElementById('fireBall').addEventListener('click', fireball)

    

//Create Static Splash Screen in HTML
    //Create a button that manipulates the DOM to load the first fight
    //Bonus: Add theme music


//Manipulate the DOM to Create Elements
    // 4 buttons 3 attack spells, 1 heal
    //place player and enemy locations
    //enemy elemental will need stats stored in an object
    //build status bars at the top and bottom of the screen
    //draw a box around everything.

//have each attack button damage read the Element Type of the Enemy and do damage based off the element type.
    //Bonus: have a temporary dialog box appear saying "super effective" or "not very effective"
//heal button will raise the player's health by a ranged amount
//create enemy AI, enemy will attack a few seconds after the player plays their turn. Enemy attack will do a range of damage.

//if the Elementals hp reaches zero then the battle is over. Ability buttons can no longer be clicked. Victory screen appears for a few seconds
// if player is defeated then Defeat Screen Appears with a button to restart: restart takes you back to the Splash Screen