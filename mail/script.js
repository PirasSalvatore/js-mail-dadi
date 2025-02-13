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

//utility variable
let isInvited = false;

// loops 
for (let i = 0; i < invitedEmail.length; i++) {
    thisEmail = invitedEmail[i]
    //serch user mail in array invitedEmail
    if (thisEmail === userEmail) {
        isInvited = true
    }
}

// esit comunication
if (isInvited) {
    alert("congratulazioni, sei invitato alla grande festa")
} else {
    alert("mi dispiace ma non sei nella lista")
}