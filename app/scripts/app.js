//import svg4everybody from 'svg4everybody';
//import $ from 'jquery';
import noUiSlider from 'nouislider';

//$(() => {
//	svg4everybody();
//});

var sliderConfig = {
	start: 1,
	connect: false,
	orientation: (window.innerWidth >= 640) ? 'horizontal' : 'vertical',
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
};

//var SliderConfigVert = {
//	start: 1,
//	connect: false,
//	snap: true,
//	orientation: 'vertical',
//	range: {
//		'min': 0,
//		'35%': 1,
//		'70%': 2,
//		'max': 3
//	},
//	step: 1,
//	pips: {
//		mode: 'values',
//		values: [0, 1, 2, 3],
//		density: 4
//	}
//};

var slider = document.getElementById('slider');
//var sliderVert = document.getElementById('slider-vert');

noUiSlider.create(slider, sliderConfig);
//noUiSlider.create(sliderVert, SliderConfigVert);
reName();

window.addEventListener('resize', function(){
	if(window.innerWidth >= 640){
		slider.noUiSlider.destroy();
		sliderConfig.orientation = 'horizontal';
		noUiSlider.create(slider, sliderConfig);
		reName("horizontal");
	} else {
		slider.noUiSlider.destroy();
		sliderConfig.orientation = 'vertical';
		noUiSlider.create(slider, sliderConfig);
		reName("vertical");
	}
}, false);


//var nodes = document.querySelectorAll('.noUi-value.noUi-value-horizontal.noUi-value-large');

//var nodesVert = document.querySelectorAll('.noUi-value.noUi-value-vertical.noUi-value-large');

//Array.prototype.forEach.call(nodes, swTop);
//Array.prototype.forEach.call(nodesVert, swTop);

function reName(pos) {
	var nodes = document.querySelectorAll(`.noUi-value.noUi-value-${pos}.noUi-value-large`);
	Array.prototype.forEach.call(nodes, swTop);
	function swTop( el ){
		switch(el.innerHTML) {
			case '0':
				el.innerHTML = 'Не владею';
				el.addEventListener('click', function(){
					slider.noUiSlider.set(0);
				});
				break;
			case '1':
				el.innerHTML = 'Использую готовые решения';
				el.addEventListener('click', function(){
					slider.noUiSlider.set(1);
				});
				break;
			case '2':
				el.innerHTML = 'Использую готовые решения и умею их переделывать';
				el.addEventListener('click', function(){
					slider.noUiSlider.set(2);
				});
				break;
			case '3':
				el.innerHTML = 'Пишу сложные скрипты';
				el.addEventListener('click', function(){
					slider.noUiSlider.set(3);
				});
				break;
		}
	}

}
//
//function swTop( el ){
//	switch(el.innerHTML) {
//		case '0':
//			el.innerHTML = 'Не владею';
//			el.addEventListener('click', function(){
//				slider.noUiSlider.set(0);
//			});
//			break;
//		case '1':
//			el.innerHTML = 'Использую готовые решения';
//			el.addEventListener('click', function(){
//				slider.noUiSlider.set(1);
//			});
//			break;
//		case '2':
//			el.innerHTML = 'Использую готовые решения и умею их переделывать';
//			el.addEventListener('click', function(){
//				slider.noUiSlider.set(2);
//			});
//			break;
//		case '3':
//			el.innerHTML = 'Пишу сложные скрипты';
//			el.addEventListener('click', function(){
//				slider.noUiSlider.set(3);
//			});
//			break;
//	}
//}
