document.addEventListener('DOMContentLoaded', function () {
	const filter = document.querySelector('.filter')
	const list = document.querySelector('.aside-box__company-about-small')
	filter.addEventListener('click', () => {
		list.classList.toggle('list-active')
	})
})
