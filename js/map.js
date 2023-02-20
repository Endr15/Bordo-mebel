document.addEventListener('DOMContentLoaded', function () {
	/* YANDEX MAP */

	ymaps.ready(init)
	function init() {
		let map = new ymaps.Map('map', {
			center: [56.1095860686318, 47.47143549999999],
			zoom: 17,
		})

		let placemark = new ymaps.Placemark(
			[56.1095860686318, 47.47143549999999],
			{},
			{}
		)

		map.geoObjects.add(placemark)
	}
})
