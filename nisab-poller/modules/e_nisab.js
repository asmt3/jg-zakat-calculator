// load 3rd party libraries
var request = require("request");


// Uses the e-nisab JSON endpoint to get current nisab thresholds
// in the given currencies
// Expects: currencies as an array of three letter currency codes
// Returns: an array of thresholds sorted according to order of supplied currency codes
// TODO: handle errors
exports.get = function(currencies, callback) {

	var responses = [],
		timestamp = false


	console.log('Started Polling ' + currencies.length + " Currencies from e-nisab.com")

	// create a request for each currency
	currencies.forEach(function(currency){

		// get JSON
		var url = "http://www.e-nisab.com/json2?&currency=" + currency + "&gold=85.0&silver=595.0&purity=24"

		request(url, function(error, response, body) {
			
			// save it
			var response_obj = JSON.parse(body)
			responses.push(response_obj)

			// store/overwrite the timestamp, if we got one
			// we will return this at global 
			timestamp = response_obj.timestamp || timestamp

			// when all complete
			if (responses.length == currencies.length) {

				// sync reorder and respond
				cleanAndCallback(responses);
			}
			
		});
	})


	function cleanAndCallback(responses) {

		// extract the thresholds we care about
		var responsesClean = responses.map(function(response){
			return {
				timestamp_ms: Date.parse(response.timestamp),
				name: response.currency,
				// we use silver threshold only
				// rounded to 2 dp
				threshold: Number(Number(response.ag_nisab_j).toFixed(2)) 
			}
		})

		// reorder according to order of currencies supplied
		responsesClean.sort(function(a,b){


			var pos_a = currencies.indexOf(a.name)
			var pos_b = currencies.indexOf(b.name)

			if (pos_a > pos_b)
			    return 1;
			else if (pos_a < pos_b)
				return -1;
			else 
				return 0;
		})

		callback({
			"timestamp_ms": Date.parse(timestamp), // returns milliseconds
			"currencies": responsesClean
		});
	}

	




}