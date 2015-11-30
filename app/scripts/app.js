import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import noUiSlider from 'nouislider';

$(() => {
	svg4everybody();
});


var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});
