// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

//* Milestone 0

const teamMembers = [
    {firstName: 'Wayne', lastName: 'Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg',},
    {firstName: 'Angela', lastName: 'Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg',},
    {firstName: 'Walter', lastName: 'Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg',},
    {firstName: 'Angela', lastName: 'Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg',},
    {firstName: 'Scott', lastName: 'Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg',},
    {firstName: 'Barbara', lastName: 'Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg ',},
]

console.log(teamMembers);

//* Milestone 2

const membersList = document.getElementById('members');
const memberCard = document.getElementById('member-card');

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    
    for(let key in member) {
        console.log(member[key]);
        memberCard.innerText += (member[key]);
    }
}