const WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({
		port: 3000
	});

wss.on('connection', function connection(ws) {
	const response = {
		pos: 'yes, I would',
		neg: 'no',
		message: ['Would you like to respond?']
	};
	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		if (message === 'yes') {
			ws.send(JSON.stringify({
				message: ['How about now? 🤔'],
				pos: response.pos,
				neg: `Nah, I'm good for now. Thanks though! This is a really long response though, hope it works`
			}));
		} else if (message === 'no') {
			ws.send(JSON.stringify({
				message: ['Ok!', 'Let me know when you do'],
				pos: response.pos,
				neg: response.neg
			}));
		}
	});
	ws.send(JSON.stringify(response));
});