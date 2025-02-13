//creo 2 variabili una per il pc e una per l'utente, e metto al loro interno 2 numeri casuli

const userDice = Math.floor(((Math.random() * 10) % 6) + 1)
const aiDice = Math.floor(((Math.random() * 10) % 6) + 1)

//visualizzo i 2 tiri di dado
console.log(`Utente ha fatto ${userDice}`)
console.log(`Computer ha fatto ${aiDice}`)

//controllo chi ha fatto il punteggio più alto
if (userDice > aiDice) {
    console.log("congratulazioni hai vinto contro il computer")
} else if (userDice < aiDice) {
    console.log("mi dispiace hai perso contro il computer")
} else {
    console.log("attenzione abbiamo un pareggio")
}

