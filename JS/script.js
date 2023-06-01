"use strict"

// ARRAY INVITATI
const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

console.log(invited);

let arrayObje = invited.map((item,index) =>{
    let obj = {
        'table_name': 'Tavolo Vip',
        'name': item,
        'place_occuped': index + 1
    }
    return obj
})

console.log(arrayObje);