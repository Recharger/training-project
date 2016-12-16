$(document).ready(() => {
	var currentSection = 1;
	var maxSection = 3;
	var move = true;

	window.onscroll = (e) => {
		if (currentSection < maxSection && move) {
			currentSection+=1;
			move = false;
			$('html, body').animate({
				scrollTop: $('#section-'+currentSection).offset().top,
			}, {
				duration: 3000,
				complete: () => {
					move = !move;
					console.log('complate');
				}
			});
		}
	};
});
