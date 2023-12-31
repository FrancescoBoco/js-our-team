/*

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

*/


const usersArray = [
    {
        name: 'Wayne',
        lastName: 'Barnett',
        businessRole: 'Founder & CEO',
        imgUser: ' wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela',
        lastName: 'Caroll',
        businessRole: 'Chief Editor',
        imgUser: ' angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        lastName: 'Gordon',
        businessRole: 'Office Manager',
        imgUser: ' walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela',
        lastName: 'Lopez',
        businessRole: 'Social Media Manager',
        imgUser: ' angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott',
        lastName: 'Estrada',
        businessRole: 'Developer',
        imgUser: ' scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara',
        lastName: 'Ramos',
        businessRole: 'Graphic Designer',
        imgUser: ' barbara-ramos-graphic-designer.jpg'
    },

]


console.log('array users' , usersArray, typeof usersArray)

let myContainer = document.getElementById('container')



// for(let key in usersArray){

//     let newCell = document.createElement('div');
//     newCell.append(usersArray[key])
//     newCell.classList.add('cell');
//     myContainer.append(newCell)

//     console.log('stampa array object', key , usersArray[key])
// }

// for (let i = 0; i < usersArray.length; i++) {
//     console.log('array', usersArray, typeof usersArray )
    
// }
for (let i = 0; i < usersArray.length; i++) {
    const element = usersArray[i];
    
    for (const key in element) {
        console.log(key, element[key]);
        let newCell = document.createElement('div');
        newCell.append(element[key])
        newCell.classList.add('cell');
        myContainer.append(newCell)
    }
}
