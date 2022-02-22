// document.addEventListener("DOMContentLoaded", () => {})



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



// Functions for Attacks and Heals
    const fireball = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);
        console.log('damage done by fireball', damage)
        // fireElemental.health = fireElemental.health - damage
        if (fireElemental.type === 'grass') {
            damage = 1.5 * damage
            fireElemental.health = fireElemental.health - damage
        } else if (fireElemental.type === 'water') {
            damage = damage / 2
            fireElemental.health = fireElemental.health - damage
        } else {
            fireElemental.health = fireElemental.health + damage
        } 
        
    }
    // console.log('is my fireball producing damage', fireball())
    fireball()
    console.log('did fireball reduce health of fireElemental' , fireElemental)

    const waterJet = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);

        if (enemy.type === 'fire') {
            damage = 1.5 * damage
            return damage
        } else if (enemy.type === 'grass') {
            damage = damage / 2
            return damage
        } else {
            return damage
        }
    }

    const vineStrike = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);

        if (enemy.type === 'water') {
            damage = 1.5 * damage
            return damage
        } else if (enemy.type === 'fire') {
            damage = damage / 2
            return damage
        } else {
            return damage
        }
    }

    const heal = () => {
        min = Math.ceil(2);
        max = Math.floor(12);
        return Math.floor(Math.random() * (12 - 2) + 2);
    }
    // console.log('does heal do 2 - 12 randomly?' , heal())

    const enemyAttack = () => {
        min = Math.ceil(1);
        max = Math.floor(8);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);

    }

    const enemySuper =() => {
        min = Math.ceil(5);
        max = Math.floor(15);
        let damage = Math.floor(Math.random() * (8 - 1) + 1);

    }


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