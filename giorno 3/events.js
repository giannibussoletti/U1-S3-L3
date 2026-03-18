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
"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events"
"https://www.w3schools.com/jsref/dom_obj_event.asp"
