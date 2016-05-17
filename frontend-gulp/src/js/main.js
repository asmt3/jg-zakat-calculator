var app = angular
	.module('zakat', ['ui.bootstrap', 'ngSanitize'])
	.config(function($sceDelegateProvider) {
	  $sceDelegateProvider.resourceUrlWhitelist([
	    // Allow same origin resource loads.
	    'self',
	    // Allow loading from outer templates domain.
	    'https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/**'
	  ]); 
	});

