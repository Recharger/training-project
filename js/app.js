var isMove = false;
var currentSection = 1;
var maxSection = 3;

$(document).ready(() => {

	$(document).scroll((e) => {
		e.preventDefault();
		if (currentSection < maxSection && !isMove) {
			isMove = true;
			currentSection+=1;
			$('html, body').animate({
				scrollTop: $("#s"+currentSection).offset().top
			}, {
				duration: 1000,
				complete: () => {
					isMove = false;
				}
			});
		}
	});
});
