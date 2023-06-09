"use strict"

// // SNACK 1
// // ARRAY INVITED
const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


// NEW ARRAY
let arrayObje = invited.map((item,index) =>{
    // OBJECT
    let obj = {
        'table_name': 'Tavolo Vip',
        'name': item,
        'place_occuped': index + 1
    }
    return obj;
})

console.log(arrayObje);
// SNACK 2
// ARRAY STUDENTS
const students = [
    {
        'id': '213',
        'name': 'Marco della Rovere',
        'grades': '78'
    },
    {
        'id': '110',
        'name': 'Paola Cortellessa',
        'grades': '96'
    },
    {
        'id': '250',
        'name': 'Andrea Mantegna',
        'grades': '48'
    },
    {
        'id': '145',
        'name': 'Gaia Borromini',
        'grades': '74'
    },
    {
        'id': '196',
        'name': 'Luigi Grimaldello',
        'grades': '68'
    },
    {
        'id': '102',
        'name': 'Piero della Francesca',
        'grades': '50'
    },
    {
        'id': '120',
        'name': 'Francesca da Polenta',
        'grades': '84'
    }
]

// UPPERCASE ARRAY
let uppercase_array = students.map((item) => item.name.toUpperCase());
console.log(uppercase_array);

// ARRAY GRADES_PLUS
let grades_plus = students.filter((item) => {
    if(item.grades > 70){
        return true;
    }
    return false;
})

console.log(grades_plus);

// ARRAY IDGRADES_PLUS
let idGradesPlus = students.filter((item) => {
    if(item.grades > 70 && item.id > 120){
        return true;
    }
    return false;
})

console.log(idGradesPlus);

// SNACK 3
// ARRAY BIKE
const bikes = [
    {
        name: 'Mountain bike',
        weight: 12
    },
    {
        name: 'City bike',
        weight: 15
    },
    {
        name: 'Racing bike',
        weight: 7
    },
    {
        name: 'Foldable bike',
        weight: 15
    },
    {
        name: 'Electric bicycle',
        weight: 20
    },
    {
        name: 'Gravel bike',
        weight: 10
    }
];
console.log(bikes);

let biciLeggera = bikes[0];
for(let i=0; i < bikes.length; i++){
    if(bikes[i].weight < biciLeggera.weight){
        biciLeggera = bikes[i];
    }
}

let {weight} = biciLeggera;
console.log(`Weight: ${weight}`);

// SNACK 4
// FUNCTION
function randomNumber(min, max){
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

// // ARRAY FOOTBAL_TEAM
const football_team = [
        {
            name: 'Juventus',
            points_made: 0,
            fail_immediately: 0
        },
        {
            name: 'Barcellona',
            points_made: 0,
            fail_immediately: 0
        },
        {
            name: 'Real Madrid',
            points_made: 0,
            fail_immediately: 0
        },
        {
            name: 'Roma',
            points_made: 0,
            fail_immediately: 0
        },
        {
            name: 'Napoli',
            points_made: 0,
            fail_immediately: 0
        },
        {
            name: 'Cagliari',
            points_made: 0,
            fail_immediately: 0
        }
];

football_team.forEach((element) => {
    element.points_made = randomNumber(1, 100);
    element.fail_immediately = randomNumber(1, 100);
})

const newTeams = [];

for(let i=0; i<football_team.length; i++){
    let currentTeam = football_team[i];

    const {name, fail_immediately} = currentTeam;

    let obj ={
        name,
        fail_immediately
    }

    newTeams.push(obj);
}

console.log(newTeams);


