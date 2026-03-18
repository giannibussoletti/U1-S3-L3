// il comportamento in automatico dei form durante la loro fase di invio è la ricerca di una
// pagina esterna da contattare -> provoca il REFRESH del browser (e conseguente perdita dei valori inseriti
// noi, da sviluppatori moderni, siamo chiamati in carica per AGGIRARE questo comportamento di default!

// la si aggira PREVENENDO questo comportamento di default e inserendo la NOSTRA logica per l'invio!
// per farlom dobbiamo (OGNI VOLTA CHE FACCIAMO UN FORM) intervenire sul suo evento SUBMIT

// recupero un riferimento del form
const form = document.getElementById("main-form")

form.addEventListener(
  "submit",
  (event /*Ogni evento ha un suo elemento che può essere richiamato esplicitamente*/) => {
    // ogn
    // per prima, dobbiamo FERMARE il comportamento di default che prevede il refresh della pagina
    event.preventDefault() // si blocca il comportamento di defaul dell'event
    // Questa riga va sempre messa all'inizio della funzione in modo da fermare il comportamento di default
    // ora che abbiamo fermato il comportamento di defaul possiamo raccogliere i dati del form

    // recupero tutti i campi
    const firstNameInput = document.getElementById("firstname")
    const lastNameInput = document.getElementById("lastname")
    const ageInput = document.getElementById("age")
    const emailInput = document.getElementById("email")

    // da questi referimenti, i oleggo per ciascun campo il suo "value"
    const nome = firstNameInput.value
    const cognome = lastNameInput.value
    const età = ageInput.value
    const mail = emailInput.value

    console.log(`UTENTE SALVATO! Ecco i dati:
        Nome: ${nome}
        Cognome: ${cognome}
        età: ${age}
        mail: ${mail}`)

    alert("Utente salvato con successo")
    // ora svuotiamo il form altrimenti l'utente non capirà che l'operazione è andata a buon fine
    // a) MANUALMENTE
    // firstNameInput = ""
    // lastNameInput = ""
    // ageInput = ""
    // emailInput = ""

    //b) INVOCAZIONE DEL RESET
    form.reset()
  },
)
