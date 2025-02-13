// create array list 
const invitedEmail = [
    "leonardo@gmail.com",
    "giacomo@gmail.com",
    "antonio@gmail.com",
    "anna@gmail.com",
    "erica@gmail.com",
    "marta@gmail.com"
]

// user data
const userEmail = prompt("inserisci la tua Email")

//variable && check invited
let isInvited = invitedEmail.includes(userEmail);

// esit comunication
if (isInvited) {
    alert("congratulazioni, sei invitato alla grande festa")
} else {
    alert("mi dispiace ma non sei nella lista")
}