const addBtn = document.querySelector('.btn__add')
const removeBtn = document.querySelector('.btn__remove')
const teamBox = document.querySelector('.team__box')
const allPlayers = document.querySelectorAll('.team__player')
const mainSection = document.querySelector('.main')
const popup = document.querySelector('.popup')
const mainWrapper = document.querySelector('.main__wrapper')
const approveBtn = document.querySelector('.btn__approve')
const closeBtn = document.querySelector('.btn__close')

const removeLastPlayer = () => {
	const teamBox = document.querySelector('.team__box')
	teamBox.removeChild(teamBox.lastChild)
}

const addFunction = () => {
	popup.classList.add('active')
	mainWrapper.style.opacity = '0.4'
}

const addPlayer = () => {
	const inputPopup = document.querySelector('.popup__input').value

	let newPlayerDiv = document.createElement('div')
	let newPlayerIcon = document.createElement('i')
	let newPlayerName = document.createElement('p')

	newPlayerDiv.classList.add('team__player')
	newPlayerIcon.classList.add('fa-solid', 'fa-user', 'team__player-icon')
	newPlayerName.classList.add('team__player-name')

	let newName = document.createTextNode(inputPopup)
	newPlayerName.appendChild(newName)

	newPlayerDiv.appendChild(newPlayerIcon)
	newPlayerDiv.appendChild(newPlayerName)

	teamBox.appendChild(newPlayerDiv)

	console.log(inputPopup)
}

const closeFunction = () => {
	popup.classList.remove('active')
	mainWrapper.style.opacity = '1'
}

addBtn.addEventListener('click', addFunction)
removeBtn.addEventListener('click', removeLastPlayer)
approveBtn.addEventListener('click', addPlayer)
closeBtn.addEventListener('click', closeFunction)

// let listUl = document.querySelector('.ul')

// console.log(listUl)

// const removeLi = () => {
// 	listUl.removeChild(listUl.lastChild)
// }

// removeBtn.addEventListener('click', removeLi)

// newPlayer.classList.add('team__player')
// let newText = document.createTextNode('testowy tekst')
// newPlayer.appendChild(newText)
// teamBox.appendChild(newPlayer)

// const removePlayer = () => {
// 	allPlayers.removeChild(allPlayers.lastChildElement)
// }
