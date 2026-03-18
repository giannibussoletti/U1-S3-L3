const inputTask = document.getElementById("input-list")
const mainList = document.getElementById("main-list")

inputTask.addEventListener("submit", (e) => {
  e.preventDefault()
  dataCollection()
})

const dataCollection = () => {
  const input = document.getElementById("text")
  const okInput = input.value
  const singleItem = document.createElement("li")
  singleItem.classList.add("single-item-design")
  singleItem.innerHTML = `
  <span onclick="strikeAction(event)" id="strike"><i class="fa-solid fa-check"></i></span>
  ${okInput}
  <span onclick="deleteAction(event)" id="delete"><i class="fa-solid fa-trash-can"></i></span>
  `
  mainList.appendChild(singleItem)
  inputTask.reset()
}

let clickCount = 0
const strikeAction = (event) => {
  const singleItemStrike = event.target.parentElement.parentElement

  singleItemStrike.classList.toggle("item-deleted")
}

const deleteAction = (event) => {
  const singleItemDelete = event.target.parentElement.parentElement
  singleItemDelete.remove()
}
