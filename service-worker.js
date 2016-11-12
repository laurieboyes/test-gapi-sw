this.addEventListener('install', function (event) {
	console.log('Service worker installed, refresh to see all fetch requests');
});

this.addEventListener('fetch', function (event) {
	console.log('FETCH EVENT: ', event.request.url);
});
