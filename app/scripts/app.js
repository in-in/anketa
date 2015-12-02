import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import noUiSlider from 'nouislider';

$(() => {
	svg4everybody();
});


var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: 1,
	connect: false,
	snap: true,
	range: {
		'min': 0,
		'19.8%': 1,
		'49.4%': 2,
		'max': 3
	},
	step: 1,
	pips: {
		mode: 'values',
		values: [0, 1, 2, 3],
		density: 4
	}
});

var nodes = document.querySelectorAll('.noUi-value.noUi-value-horizontal.noUi-value-large');
Array.prototype.forEach.call(nodes, function( el ){
	switch(el.innerHTML) {
		case '0': el.innerHTML = 'Не владею'; break;
		case '1': el.innerHTML = 'Использую готовые решения'; break;
		case '2': el.innerHTML = 'Использую готовые решения и умею их переделывать'; break;
		case '3': el.innerHTML = 'Пишу сложные скрипты'; break;
	}
});
