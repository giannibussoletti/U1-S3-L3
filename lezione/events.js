// EVENTI NEL BROSWER
// Un evento del broswer è una situazione che accade nella pagina
// Si può scatenare in automatico oppure dall'interazione da parte dell'utente (click, scroll, hover etc.)

// gli EVENTI accadono sempre all'interno della pagina,
// anche se la pagina è semplice html,
// ma di default non scatenano nessun comportamento della pagina

// Per avere il controllo di questi EVENTI è necessario sistemare delle "TRAPPOLE"
// Le TRAPPOLE possono catturare ogni evente di un certo elemento -> es. click sui bottone.

// Le trappole in gergo si chiamano "EVENT LISTENERS" (ASCOLTATORI DI EVENTI)
// Si possono sistemare su qualsiasi elemento della pagina per qualsiasi tipo di evento

// Per impostare un event listeners su un elemento e renderlo ascoltabile, si utilizzano 2 tecniche:

// a) Se avete a disposizione l'elemento in HTML, si può inserire nell'elemento una particolare
// famiglia di attributi -> "on" + nomeEvento --> es. "onclick", "onscroll" "onmouseenter", etc.
// a questo attributo verrà assegnata poi l'esecuzione di una funzione
// es. <button onclick="miaFunzione()">CLICCAMI</button>

// Se l'elemento designato non esiste ancora in HTML e viene creato per esempio tramite
// document.createElement("button") l'event listenere va inserito in javascript.
// Per farlo, dovete utilizzare sull'elemento appena creato un metodo JS di nome "addEventListener()"

// Liste  degli eventi
// "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events"
// "https://www.w3schools.com/jsref/dom_obj_event.asp"

// questa funzione viene ripetutta ogni volta che il pulsante viene cliccato
// quindi bisogna impostare un limite tramite un if per esempio
let numberOfButton = 0
const buttonClick = () => {
  if (numberOfButton < 1) {
    createButton()
  } else {
    console.log("Troppi bottoni")
  }
}

// creiamo invece un bottone via JS
const createButton = () => {
  const buttonNew = document.createElement("button")
  const parentButton = document.getElementById("btn-container")
  buttonNew.innerText = "btn creato con JS"
  buttonNew.classList.add("rounded", "violet")
  // applichiamo al bottone viola un comportamento, e rendiamolo sensibile al click del mouse
  // non ho a disposizione il tag HTML, quindi devo ricorrere al metodo b) -> addEventListener
  buttonNew.addEventListener("click", function () {
    const orsoImg = document.createElement("img") // < creiamo un nuovo elemento
    orsoImg.setAttribute("src", "https://placebear.com/200/200") //< settiamo attributo per il link
    orsoImg.setAttribute("alt", "Orso") //< settiamo attributo per l'alt
    orsoImg.classList.add("circle") //< gli diamo una classe
    orsoImg.addEventListener("mouseenter", function () {
      orsoImg.style.transform = "scale(1.25)"
    })
    orsoImg.addEventListener("mouseleave", function () {
      orsoImg.style.transform = "scale(1)"
    })
    const parent = document.getElementById("bears")
    parent.appendChild(orsoImg)
  })
  // il primo è il tipo di evento che va richamato,
  // non va messo con on davanti ma solo con il nome dell'evento da utilizzare // onckick <-- no! click <-- si
  parentButton.appendChild(buttonNew)
  // Questo bottone non essere richiamato
  numberOfButton++
}
