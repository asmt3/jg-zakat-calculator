var AWS = require('aws-sdk');

exports.upload = function(nisabObj, callback){

	var s3 = new AWS.S3()

	var bucket = 'zakat-dev-justgiving-com'
	var key = 'nisab-daily.json'


	var url = 'https://s3-eu-west-1.amazonaws.com/' + bucket + '/' + key


	console.log('Started Uploading Nisab object: ')
	console.dir(nisabObj);

	// upload
	s3.putObject({
		Bucket: bucket,
		Key: key,
		ACL:'public-read',
		Body: JSON.stringify(nisabObj)
	}, function(err, data) {

	    if (err) {
	      console.log('Error uploading: ' + err)
	      // report error
	      callback(err, nisabObj)
	    } else {
	      
	      console.log('Completed Uploading Nisab: ' + url)
	      callback(null, {
	      	url:url,
	      	nisab:nisabObj
	      })

	    }

  });

}