/**
 * Created by dnewbold on 6/14/16.
 */

var timeButton = document.getElementById('time'),
	timeLabel  = document.getElementsByTagName('span')[0];

timeButton.started = false;
timeButton.textContent = 'Start Timer';

timeButton.addEventListener('click', () => {
	if ( ! timeButton.started ) {
		console.time('test');
		timeButton.started = true;
		timeButton.textContent = 'Stop Timer';
	} else {
		let elapsed = console.timeEnd('test', false);
		timeButton.started = false;
		timeButton.textContent = 'Start Timer';
		timeLabel.textContent = elapsed;
	}
});