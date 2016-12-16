var oldCurrentSection = 1;
var oldWinScrollTop = 0;
var maxSection = 4;
var blockMyScrollHandler = false;


function scrollToElement(element, duration, complete) {
	$('html, body').animate({
		scrollTop: element.offset().top
	}, duration, complete);
};

function goTo(section) {
	blockMyScrollHandler = true;
	scrollToElement($("#s"+section), 700, () => {
		blockMyScrollHandler = false;
	});
}


$(document).ready(() => {

	$(document).scroll(() => {
		if (blockMyScrollHandler) {
			return;
		}
		if ($(document).scrollTop() >= oldWinScrollTop) {
			var fix = 300;
		} else {
			var fix = -300;
		}
		var newCurrentSection = Math.round(($(document).scrollTop() + fix) / $("#s1").height()) + 1;
		if (newCurrentSection != oldCurrentSection) {
			scrollToElement($("#s"+newCurrentSection), 700, () => {
				oldWinScrollTop = $(document).scrollTop();
			});
			oldCurrentSection = newCurrentSection;
		}
	});

});
