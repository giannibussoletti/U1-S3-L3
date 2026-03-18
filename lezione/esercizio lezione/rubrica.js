const formSubmitFunction = function (e) {
  e.preventDefault()
}

// recupero un riferimento DEL FORM
const form = document.getElementById("new-contact-form")
form.addEventListener("submit", formSubmitFunction)
// le tonde dopo formSubmitFunction NON CI VANNO -> perchè altrimenti quella funzione verrebbe
// eseguita AUTOMATICAMENTE all'avvio della pagina (perchè è un ESECUZIONE di funzione!)
// quindi non dobbiamo mettere le tonde -> "collegate" formSubmitFunction  all'evento submit del form
