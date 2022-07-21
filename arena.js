'use strict'
function tick(){
	ArenaHelper.postAbort('Did-Not-Start', 'Make a game.'); // Example
	ArenaHelper.postDone();
}
ArenaHelper.init = participants => {
	tick();
}
