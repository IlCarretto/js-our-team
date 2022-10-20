// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// BONUS 1:
// [*] Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// [*] Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


// MILESTONE 0:
// [*] Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// [*] Stampare su console le informazioni di nome, ruolo e la stringa della foto
const teamArray = [
    {
        nomeCompleto: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nomeCompleto: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nomeCompleto: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nomeCompleto: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        nomeCompleto: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg"
    },
    {
        nomeCompleto: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg"
    }
];

console.log(teamArray);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const row = document.querySelector(".row");
for (let i = 0; i < teamArray.length; i++) {
    const teamEmployee = teamArray[i];
    console.log(teamEmployee);
    // for (let key in teamEmployee) {
    //     console.log(teamEmployee[key]);
    row.innerHTML += `
    <div class="col-4">
        <div class="ms-card">
            <div class="card-top-content">
                <img id="photo" src="
                ${teamEmployee.foto}" alt="">
            </div>
            <div class="card-bottom-content">
                <h1 id="name">
                ${teamEmployee.nomeCompleto}
                </h1>
                <h2 id="role">
                ${teamEmployee.ruolo}
                </h2>
            </div>
        </div>
    </div>
    `
};

// [] BONUS 3: Inserire un bottone per nuova card con un altro membro 
// Al click del bottone appaiono 3 prompt per l'utente per le info
// Pushare le nuove info 
const insertBtn = document.querySelector(".insert-btn");
insertBtn.addEventListener("click", function() {
    const userNewName = prompt("Inserisci il nome del nuovo membro");
    const userNewRole = prompt("Inserisci il ruolo del nuovo membro");
    const userNewPhoto = prompt("Inserisci la foto del nuovo membro");
    const newEmployee = {
        nomeCompleto: userNewName,
        ruolo: userNewRole,
        foto: userNewPhoto
    };
    row.innerHTML += `
    <div class="col-4">
        <div class="ms-card">
            <div class="card-top-content">
                <img id="photo" src="
                ${newEmployee.foto}" alt="">
            </div>
            <div class="card-bottom-content">
                <h1 id="name">
                ${newEmployee.nomeCompleto}
                </h1>
                <h2 id="role">
                ${newEmployee.ruolo}
                </h2>
            </div>
        </div>
    </div>
    `
})
