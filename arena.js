'use strict'
let _participants;
let _settings;
function messageParticipants(){
	ArenaHelper.log('tick', {/* Arena state */});
	let promises = [];
	_participants.forEach(participant => {
		let pendingResponse = participant.postMessage({/* TODO: Send participant input. */}).then(response => {
			participant.payload.response = response;
		});
		promises.push(pendingResponse);
	});
	Promise.allSettled(promises).then(updateArena);
}
function updateArena(){
	_participants.forEach(participant => {
		if(participant.payload.response.message){
			participant.payload.response.message.data; // TODO: Handle response.
		}else{
			// TODO: Handle missing response.
		}
	});
	// TODO: Update arena.
	// TODO: Call `ArenaHelper.postDone()` when match is finished, otherwise call `messageParticipants()` again.
}
ArenaHelper.init = (participants, settings) => {
	_participants = participants;
	_settings = settings;
	ArenaHelper.postAbort('Did-Not-Start', 'Invalid settings.'); // Example
	// TODO: Build arena.
	messageParticipants();
}
