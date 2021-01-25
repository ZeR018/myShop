const JACKET = 'JACKET'; // куртка
const HAT = 'HAT'; // шапка
const SCARF = 'SCARF'; // шарф
//const SHOES = 'SHOES'; // обувь
const SWEATER = 'SWEATER'; // свитеры, кофты, блузки, джемперы

const initialState = {
	products: [
		{
			name: 'Куртка утепленная мужская Columbia Marquam Peak',
			photo: 'https://cdn.sptmr.ru/upload/resize_cache/iblock/668/370_416_1/23811270299.jpg',
			availableSizes: [46, 48, 52, 54, 56],
			cost: 15999,
			forMen: true,
			category: JACKET,
		},
		{
			name: 'Куртка утепленная мужская Glissade',
			photo: 'https://cdn.sptmr.ru/upload/resize_cache/iblock/c27/331_394_1/34758620299.jpg',
			availableSizes: [46, 48, 50, 52, 54, 56, 60],
			cost: 2999,
			forMen: true,
			category: JACKET,
		},
		{
			name: 'Шапка Puma Archive',
			photo: 'https://cdn.sptmr.ru/upload/resize_cache/iblock/37a/370_416_1/21067020299.jpg',
			availableSizes: [46, 48, 52, 54, 56],
			cost: 15999,
			forMen: true,
			category: HAT,
		},
		{
			name: 'Джемпер флисовый женский Outventure',
			photo: 'https://cdn.sptmr.ru/upload/resize_cache/iblock/61f/370_416_1/34594440299.JPG',
			availableSizes: [42, 44, 46, 48, 56],
			cost: 15999,
			forMen: false,
			category: SWEATER,
		},
	],
};

export default initialState;
