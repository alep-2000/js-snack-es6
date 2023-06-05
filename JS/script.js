"use strict"

// SNACK 1
// ARRAY INVITED
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