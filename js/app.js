// document.addEventListener("DOMContentLoaded", () => {})

// document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)


//Objects for Characters
    const fireElemental = {
        name: 'Fire Elemental',
        type: 'fire',
        health: 40
    }
    console.log('fire elemental object before damage', fireElemental)
    
    const waterElemental = {
        name: 'Water Elemental',
        type: 'water',
        health: 40
    }

    const grassElemental = { 
        name: 'Grass Elemental',
        type: 'grass',
        health: 40
    }
    const wizard = {
        name: 'wizard',
        health: 40
    }

    //turn counter for each turn in the battler
    let turn = 1 


// Functions for Attacks and Heals
    const fireball = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by fireball', damage)
        if (fireElemental.type === 'grass') {
            damage = 2 * damage
            fireElemental.health = fireElemental.health - damage
        } else if (fireElemental.type === 'water') {
            damage = damage / 2
            fireElemental.health = fireElemental.health - damage
        } else {
            fireElemental.health = fireElemental.health + damage
        } 
        
        enemyAttack()
        turn += 1
       
        console.log('did fireball reduce health of fireElemental' , fireElemental)
    }
    

    const waterJet = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by waterJet', damage)

        if (fireElemental.type === 'fire') {
            damage = 2 * damage
            fireElemental.health = fireElemental.health - damage
        } else if (fireElemental.type === 'grass') {
            damage = damage / 2
            fireElemental.health = fireElemental.health - damage
        } else {
            fireElemental.health = fireElemental.health + damage
        }

        enemyAttack()
        turn +=1
        console.log('did waterJet reduce the health of the fireElemental', fireElemental)
    }

    // waterJet()
    // console.log('did waterJet do extra damage', fireElemental)

    const vineWhip = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by vineWhip', damage)

        if (fireElemental.type === 'water') {
            damage = 2 * damage
            fireElemental.health = fireElemental.health - damage
        } else if (fireElemental.type === 'fire') {
            damage = damage / 2
            fireElemental.health = fireElemental.health - damage
        } else {
            fireElemental.health = fireElemental.health + damage
        }
        enemyAttack()
        turn += 1
        console.log('did vineWhip reduce the health of the fireElemental', fireElemental)
    }

    const heal = () => {
        min = Math.ceil(2);
        max = Math.floor(12);
        healing = Math.floor(Math.random() * (12 - 2) + 2);
        wizard.health += healing
        console.log('is my wizard healing', wizard)
        enemyAttack()
        turn += 1
    }
  


    const enemyAttack = () => {
        

        if (turn % 3 === 0) {
            min = Math.ceil(5);
            max = Math.floor(15);
            let superDamage = Math.floor(Math.random() * (15 - 5) + 5);
            wizard.health -= superDamage
            console.log('how much superDamage was done', superDamage)
        } else {
            min = Math.ceil(1);
            max = Math.floor(8);
            let damage = Math.floor(Math.random() * (8 - 1) + 1);
            wizard.health -= damage
            console.log ('damage done by enemy', damage)
        }
        
        console.log('did the wizard take damage', wizard)
        console.log('what turn is it', turn)

    }

if (wizard.health < 1) {
    console.log('the player is dead')
} else if (fireElemental.health < 1) {
    console.log('player wins!')
}

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