const addBtn = document.querySelector('.btn__add')
const removeBtn = document.querySelector('.btn__remove')
const teamBox = document.querySelector('.team__box')
const allPlayers = document.querySelectorAll('.team__player')
const mainSection = document.querySelector('.main')
const popup = document.querySelector('.popup')
const mainWrapper = document.querySelector('.main__wrapper')
const approveBtn = document.querySelector('.btn__approve')
const closeBtn = document.querySelector('.btn__close')
const selectImage = document.querySelector('.popup__select')
const pictureBackground = document.querySelector('.picture')
let uploadedImage = ''
const btnRun = document.querySelector('.btn__run')
const deleteBox = document.querySelector('.delete__box')
const allDragablePitchFields = document.querySelectorAll('.pitch__field-draggable')

allPlayers.forEach(player => {
	player.addEventListener('dragstart', () => {
		player.classList.add('is-dragged')
	})
	player.addEventListener('dragend', () => {
		player.classList.remove('is-dragged')
	})
})

deleteBox.addEventListener('dragover', e => {
	e.preventDefault()
	const isDragged = document.querySelector('.is-dragged')
	isDragged.remove()
})

const removeLastPlayer = () => {
	const teamBox = document.querySelector('.team__box')
	teamBox.removeChild(teamBox.lastChild)
}

const addFunction = () => {
	popup.classList.add('active')
	mainWrapper.style.opacity = '0.4'
}

allDragablePitchFields.forEach(field => {
	field.addEventListener('dragover', e => {
		e.preventDefault()
		if (field.childElementCount < 1) {
			const isDragged = document.querySelector('.is-dragged')
			field.appendChild(isDragged)
		}
	})
})

// const addPlayer2 = () => {
// 	let newPlayerDiv = document.createElement('div')
// 	selectImage.addEventListener('change', function () {
// 		const reader = new FileReader()
// 		reader.addEventListener('load', () => {
// 			uploadedImage = reader.result
// 			pictureBackground.style.backgroundImage = `url(${uploadedImage})`
// 		})
// 		reader.readAsDataURL(this.files[0])
// 		console.log(reader.readAsDataURL(this.files[0]))
// 	})
// 	newPlayerDiv.classList.add('team__player')
// 	newPlayerDiv.style.backgroundColor = 'blue'
// 	teamBox.appendChild(newPlayerDiv)
// }

// selectImage.addEventListener('change', function () {
// 	const reader = new FileReader()
// 	reader.addEventListener('load', () => {
// 		uploadedImage = reader.result
// 		pictureBackground.style.backgroundImage = `url(${uploadedImage})`
// 	})
// 	reader.readAsDataURL(this.files[0])
// })

selectImage.addEventListener('change', function () {
	console.log('test')
	const reader = new FileReader()
	reader.addEventListener('load', () => {
		console.log('test2')
		uploadedImage = reader.result
		let newDiv = document.createElement('div')
		newDiv.classList.add('team__player')
		newDiv.classList.add('test_div')
		console.log('test3')
		newDiv.style.backgroundImage = `url(${uploadedImage})`
		teamBox.appendChild(newDiv)
	})
	reader.readAsDataURL(this.files[0])
})

// btnRun.addEventListener('click', test)

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
	newPlayerDiv.setAttribute('draggable', true)

	teamBox.appendChild(newPlayerDiv)
	const allPlayers = document.querySelectorAll('.team__player')

	allPlayers.forEach(player => {
		player.addEventListener('dragstart', () => {
			player.classList.add('is-dragged')
		})
		player.addEventListener('dragend', () => {
			player.classList.remove('is-dragged')
		})
	})

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

// const addPlayer2 = () => {
// 	selectImage.addEventListener('change', function () {
// 		const reader = new FileReader()
// 		reader.addEventListener('load'),
// 			() => {
// 				const inputPopup = document.querySelector('.popup__input').value

// 				let newPlayerDiv = document.createElement('div')
// 				let newPlayerImage = document.createElement('div')
// 				let newPlayerName = document.createElement('p')

// 				newPlayerDiv.classList.add('team__player')
// 				newPlayerImage.classList.add('team__player-img')
// 				newPlayerName.classList.add('team__player-name')

// 				let newName = document.createTextNode(inputPopup)
// 				newPlayerName.appendChild(newName)

// 				uploadedImage = reader.result
// 				newPlayerImage.style.backgroundColor = `url(${uploadedImage})`

// 				newPlayerDiv.appendChild(newPlayerImage)
// 				newPlayerDiv.appendChild(newPlayerName)
// 			}

// 		reader.readAsDataURL(this.files[0])
// 	})
// }

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
