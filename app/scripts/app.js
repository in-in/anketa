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
	range: {
		'min': 0,
		'max': 3
	},
	step: 1,
	pips: {
		mode: 'values',
		values: [0, 1, 2, 3],
		density: 4
	}
});

$('.noUi-value.noUi-value-horizontal.noUi-value-large').each(function(){
	var val = $(this).html();
	val = recountVal(parseInt(val));
	$(this).html(val);
});

function recountVal(val){
	switch(val){
		case 0: return 'Не владею'; break;
		case 1:return 'Использую готовые решения';break;
		case 2:return 'Использую готовые решения и умею их переделывать';break;
		case 3:return 'Пишу сложные скрипты';break;
		//default :return '$10 M';break;
	}
}

