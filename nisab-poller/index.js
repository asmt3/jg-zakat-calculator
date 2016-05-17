// load local modules
var e_nisab = require('./modules/e_nisab.js')
var uploader = require('./modules/uploader.js')

// var currencies = ["GBP","USD"];
var currencies = ["GBP","USD","EUR","HKD","SGD","CAD","AED","AUD","ZAR"];


// For development/testing purposes
exports.handler = function( event, context, callback ) {
  

	// get the nisab values
	e_nisab.get(currencies, onPollComplete)

	function onPollComplete(nisab) {
		uploader.upload(nisab, onUploadComplete)
	}

	function onUploadComplete(err, obj) {
		console.log('Exiting')
		callback(err, obj)
	}

}


