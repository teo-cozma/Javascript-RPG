// Creating the characters
function Character(race, weapon, picture){
    this.race = race;
    this.weapon = weapon;
    this.picture = picture;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.weapon}, my total health point are ${this.maxHealth}`);
    };
}

var assassin = {
    race : 'assassin',
    weapon : 'blades',
    picture : "assassin2.png",
}

var orc = {
    race : 'orc',
    weapon : 'axe',
    picture : "orc.png",
}

var elf = {
    race : 'elf',
    weapon : 'bow',
    picture : "elf.png",
}

var wizard = {
    race : 'wizard',
    weapon : 'staff',
    picture : "wizard.png",
}

function fight() {
    if((name1.value == " ") || (name2.value == " ")) { 
           button.disabled = true; 
       } else { 
           button.disabled = false;
       };
};

// Changing the images according to the character type
var race1 = document.getElementById('race1');
var race2 = document.getElementById('race2');

function setAvatarImg1() {
    var avatar1 = document.getElementById('avatar1');
    avatar1.src = this.value;
    return false;
}
race1.onchange = setAvatarImg1;

function setAvatarImg2(){
    var avatar2 = document.getElementById('avatar2');
    avatar2.src = this.value;
    return false;
}
race2.onchange = setAvatarImg2;


// Creating the arena
var arena = document.getElementById('arena');

// Filling the arena
var position1 = document.getElementById('position1');
var position2 = document.getElementById('position2');

function fillArena(){
    //console.log(race2.value);
    position1.src = race1.options[race1.selectedIndex].value;
    position2.src = race2.options[race2.selectedIndex].value;
}


// Creation panel and arena visibility
const main = document.querySelector('main');
main.style.display = "none";

const creationPanel = document.getElementById('creationPanel');

const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');

const player_1 = document.getElementById('player_1');
const player_2 = document.getElementById('player_2');

const button = document.getElementById('submit');
button.disabled = true;

button.addEventListener('click', () => {
    main.style.display = "grid";
    creationPanel.style.display = "none";

    player_1.innerHTML = name1.value;
    player_2.innerHTML = name2.value;

    fillArena();
    reset();
})

// Only applicable to the arena
function reset() {
    health1.value = 100;
    health2.value = 100;
    gamelog.innerText = '';
    hit1.disabled = false;
    hit2.disabled = false;
    heal1.disabled = false;
    heal2.disabled = false;
    yield1.disabled = false;
    yield2.disabled = false;
}

function emptyNames() {
    name1.value = " ";
    name2.value = " ";
    fight();
}


// Attack, heal and yield functions + Game Log

var gamelog = document.getElementById('gamelog');

// Health bars
let health1 = document.getElementById("health1");
let health2 = document.getElementById("health2");

// Player 1 attacks
const hit1 = document.getElementById('hit1');

hit1.addEventListener('click', () => {
    let damage1 = Math.floor((Math.random() * 20) + 1);
    health2.value -= damage1;
    gamelog.innerText += `${name1.value} has attacked. ${name2.value} has lost ${damage1} health points.` + '\r\n';

    if (health2.value == 0) {
        modalBox.style.display= "block";
        boxText.innerHTML = `Game over!<br> ${name2.value} is dead. ${name1.value} has won, fair and square!`;
        
        gameBTN();

        span.addEventListener('click', () => {
            modalBox.style.display = "none";
            main.style.display = "none";
            creationPanel.style.display = "grid";
            emptyNames();
        });
    };
    
});

// Player 2 attacks
const hit2 = document.getElementById('hit2');

hit2.addEventListener('click', () => {
    let damage2 = Math.floor((Math.random() * 20) + 1);
    health1.value -= damage2;
    gamelog.innerText += `${name2.value} has attacked. ${name1.value} has lost ${damage2} health points.`+ '\r\n';

    if (health1.value == 0) {
        modalBox.style.display= "block";
        boxText.innerHTML = `Game over!<br> ${name1.value} is dead. ${name2.value} has won, fair and square!`;
        
        gameBTN();

        span.addEventListener('click', () => {
            modalBox.style.display = "none";
            main.style.display = "none";
            creationPanel.style.display = "grid";
            emptyNames();
        });
    };
    
});

// Player 1 heals
const heal1 = document.getElementById('heal1');

heal1.addEventListener('click', () => {
    let revive1 = Math.floor((Math.random() * 30) + 1);
    health1.value += revive1;
    gamelog.innerText += `${name1.value} is healing and has regained ${revive1} health points.` + '\r\n';
});

// Player 2 heals
const heal2 = document.getElementById('heal2');

heal2.addEventListener('click', () => {
    let revive2 = Math.floor((Math.random() * 30) + 1);
    health2.value += revive2;
    gamelog.innerText += `${name2.value} is healing and has regained ${revive2} health points.` + '\r\n';
})


// Yield, Game over
const yield1 = document.getElementById('yield1');
const yield2 = document.getElementById('yield2');

const modalBox = document.getElementById('modalBox');
const boxText = document.getElementById('boxText');
const span = document.getElementById('close');

modalBox.style.display= "none";

yield1.addEventListener('click', () => {
    modalBox.style.display= "block";
    boxText.innerHTML = `Game over!<br> I, ${name1.value}, surrender. ${name2.value} has won, fair and square!`;

    gameBTN();

    span.addEventListener('click', () => {
        modalBox.style.display = "none";
        main.style.display = "none";
        creationPanel.style.display = "grid";
        emptyNames();
    });
});

yield2.addEventListener('click', () => {
    modalBox.style.display= "block";
    boxText.innerHTML = `Game over!<br> I, ${name2.value}, surrender. ${name1.value} has won, fair and square!`;
    
    gameBTN();
    
    span.addEventListener('click', () => {
        modalBox.style.display = "none";
        main.style.display = "none";
        creationPanel.style.display = "grid";
        emptyNames();
    });
});

hit1.disabled = false;
hit2.disabled = false;
heal1.disabled = false;
heal2.disabled = false;
yield1.disabled = false;
yield2.disabled = false;

function gameBTN() {
    hit1.disabled = true;
    hit2.disabled = true;
    heal1.disabled = true;
    heal2.disabled = true;
    yield1.disabled = true;
    yield2.disabled = true;
}