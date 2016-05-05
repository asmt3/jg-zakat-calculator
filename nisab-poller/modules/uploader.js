var AWS = require('aws-sdk');

exports.upload = function(nisabObj, cb){

	var s3 = new AWS.S3()

	var key = 'nisab.json'

	console.log('Started Uploading Nisab')
	s3.putObject({
		Bucket: 'zakat-dev-justgiving-com',
		Key: key,
		ACL:'public-read',
		Body: JSON.stringify(nisabObj)
	}, function(err, data) {

	    if (err) {
	      console.log('Error uploading: ' + err)
	    } else {
	      
	      console.log('Completed Uploading Nisab')
	      cb()

	    }

  });

}