/**
 * Created by dnewbold on 6/14/16.
 */

if ( 'time' in console ) {
	let times = [];

	console.time = function(id) {
		if ( typeof window !== 'undefined' && 'performance' in window ) {
			times[id] = performance.now();
		} else {
			times[id] = new Date().getTime();
		}
	};

	console.timeEnd = function(id, output) {
		let time;
		if ( typeof window !== 'undefined' && 'performance' in window ) {
			time = performance.now() - times[id];
		} else {
			time = new Date().getTime() - times[id];
		}
		delete times[id];

		if ( typeof output === 'undefined' || output === true ) {
			console.log(`${id}: ${time}ms`);
		}
		return time;
	};
}