import noUiSlider from 'nouislider';

let sliderConfig = {
	start: 1,
	connect: false,
	snap: true,
	step: 1,
	pips: {
		mode: 'values',
		values: [0, 1, 2, 3],
		density: 4
	}
};

const rangeConfigHoriz = {
	min: 0,
	'19.8%': 1,
	'49.4%': 2,
	max: 3
};

const rangeConfigVert = {
	min: 0,
	'33%': 1,
	'66%': 2,
	max: 3
};

if (window.innerWidth >= 640) {
	sliderConfig = {
		orientation: 'horizontal',
		range: rangeConfigHoriz
	};
} else {
	sliderConfig = {
		orientation: 'vertical',
		range: rangeConfigVert
	};
}

const slider = document.getElementById('slider');

noUiSlider.create(slider, sliderConfig);

renameLabel((window.innerWidth >= 640) ? 'horizontal' : 'vertical');

function renameLabel(position) {
	const nodes = document.querySelectorAll(`.noUi-value.noUi-value-${position}.noUi-value-large`);
	function swTop( el ) {
		switch (el.innerHTML) {
		case '0':
			el.innerHTML = 'Не владею';
			el.addEventListener('click', function () {
				slider.noUiSlider.set(0);
			});
			break;
		case '1':
			el.innerHTML = 'Использую готовые решения';
			el.addEventListener('click', function () {
				slider.noUiSlider.set(1);
			});
			break;
		case '2':
			el.innerHTML = 'Использую готовые решения и умею их переделывать';
			el.addEventListener('click', function () {
				slider.noUiSlider.set(2);
			});
			break;
		case '3':
			el.innerHTML = 'Пишу сложные скрипты';
			el.addEventListener('click', function () {
				slider.noUiSlider.set(3);
			});
			break;
		}
	}
	Array.prototype.forEach.call(nodes, swTop);
}

window.addEventListener('resize', function () {
	if (window.innerWidth >= 640) {
		slider.noUiSlider.destroy();
		sliderConfig.orientation = 'horizontal';
		sliderConfig.range = rangeConfigHoriz;
		noUiSlider.create(slider, sliderConfig);
		renameLabel('horizontal');
	} else {
		slider.noUiSlider.destroy();
		sliderConfig.orientation = 'vertical';
		sliderConfig.range = rangeConfigVert;
		noUiSlider.create(slider, sliderConfig);
		renameLabel('vertical');
	}
}, false);
