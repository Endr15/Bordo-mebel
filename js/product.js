document.addEventListener('DOMContentLoaded', function () {
	//Добавление цветов
	const colorSettings = document.querySelector('.color-settings').innerHTML
	const arrayOfColors = colorSettings.split(' ')

	arrayOfColors.forEach(i => {
		const colorItem = document.createElement('div')
		colorItem.setAttribute('class', 'product-choice__item')
		colorItem.setAttribute('style', `background-color: ${i}`)
		document.querySelector('.color').prepend(colorItem)
	})

	//Добавление размеров
	const settings = document.querySelector('.price-settings').innerHTML
	const arrayOfSettings = settings.split(' ')
	arrayOfSettings.reverse()

	arrayOfSettings.forEach(i => {
		arrayOfSettingsItems = i.split('-')

		//Добавление размеров
		const sizeItem = document.createElement('button')
		sizeItem.setAttribute('class', 'product-choice__item-size')
		sizeItem.setAttribute('id', arrayOfSettingsItems[1])
		sizeItem.innerHTML = arrayOfSettingsItems[0]
		document.querySelector('.size').prepend(sizeItem)

		//Изменение цены
		const price = document.querySelector('.price')
		sizeItem.addEventListener('click', () => {
			sizeItem.classList.add('active')
			document.querySelector(
				'.price'
			).innerHTML = `<span>Цена: </span> ${sizeItem.id}₽`
		})
	})
})
