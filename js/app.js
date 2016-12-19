var сurrentSection = 1;
var oldWinScrollTop = 0;
var maxSection = 4;
var blockMyScrollHandler = false;
var animationSpeed = 400;


function scrollToElement(element, duration, complete) {
	$('html, body').animate({
		scrollTop: element.offset().top
	}, duration, complete);
};

function goTo(section) {
	blockMyScrollHandler = true;
	сurrentSection = section;
	scrollToElement($("#s"+section), animationSpeed, () => {
		oldWinScrollTop = $(document).scrollTop();
		blockMyScrollHandler = false;
	});
}


$(document).ready(() => {

	$(document).scroll(() => {
		if (!blockMyScrollHandler) {
			if ($(document).scrollTop() > oldWinScrollTop && сurrentSection < maxSection) {
				goTo(сurrentSection+1);
			} else if ($(document).scrollTop() < oldWinScrollTop && сurrentSection > 1) {
				goTo(сurrentSection-1);
			}
		}
	});

});
