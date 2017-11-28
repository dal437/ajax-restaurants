// TODO: add your JavaScript here!


document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('init');
	var button = document.getElementById('get-repos'),
		rateLimitButton = document.getElementById('get-rate-limit');

	button.addEventListener('click', handleClick);
	rateLimitButton.addEventListener('click', handleRateLimitClick);
}
