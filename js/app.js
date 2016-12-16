var isMove = false;
var oldCurrentSection = 1;
var maxSection = 3;

function scrollToElement(element, duration) {
	$('html, body').animate({
		scrollTop: element.offset().top
	}, duration);
};

function generateStopPoints(step, count) {
	var listStopPoints = [];
	var diff = 0;
	for (let i = 0; i < count; i++) {
		listStopPoints.push(10+diff);
		diff = step;
	}
	return listStopPoints;
}

function isBetween(value, left, right) {
	return value > left && value < right;
}

$(document).ready(() => {

	var listStopPoints = generateStopPoints($('#s1'), maxSection);

	$(document).scroll(() => {
		var newCurrentSection = Math.round($(document).scrollTop() / $("#s1").height()) + 1;
		if (newCurrentSection != oldCurrentSection) {
			scrollToElement($("#s"+newCurrentSection), 700);
			oldCurrentSection = newCurrentSection;
		}
	});

});
