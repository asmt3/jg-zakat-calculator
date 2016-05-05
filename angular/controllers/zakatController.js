var nisabSourceURL = 'https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/nisab.json'


app.controller('zakatController', function ($scope, $http) {

	// to be loaded from remote source
	$scope.nisab = false;

	// to be determined by user
	$scope.selectedCurrency = false;

	// all form fields
	$scope.formData = {
		
		// assets
		"goldSilver": 0, // if no value, assume 0
		"cash": 0,
		"otherSavings": 0,
		"investment": 0,
		"owedIn": 0,
		"stockValue": 0,
		
		// liabilities
		"owedOut": 0,
		"otherOutgoingsDue": 0,

		// final calculation
		"netAssets": 0,
		"nisabThreshold": 0,
		"useCustomNisabThreshold": false,
		"customNisabThreshold": 0,
		"zakatDue": 0
	}

	// charity search state
	$scope.showCharityPicker = false
	$scope.charityQuery = ""
	$scope.charities = []



	$scope.updateZakatDue = function() {

		// calculate value
		$scope.formData.netAssets = 
			+ (Number($scope.formData.goldSilver) || 0) // if NaN, assume 0
			+ (Number($scope.formData.cash) || 0)
			+ (Number($scope.formData.otherSavings) || 0)
			+ (Number($scope.formData.investment) || 0)
			+ (Number($scope.formData.owedIn) || 0)
			+ (Number($scope.formData.stockValue) || 0)
			
			- (Number($scope.formData.owedOut) || 0)
			- (Number($scope.formData.otherOutgoingsDue) || 0)

		console.log($scope.formData.netAssets)

		// determine nisabThreshold to use
		if ($scope.formData.useCustomNisabThreshold) {
			var workingNisabThreshold = $scope.formData.customNisabThreshold
		} else {
			var workingNisabThreshold = $scope.formData.nisabThreshold
		}

		if( $scope.formData.netAssets <= workingNisabThreshold ) {
			$scope.formData.zakatDue = 0
		} else {
			$scope.formData.zakatDue = 
				Number(0.025 * $scope.formData.netAssets).toFixed(2) // 2dp
		}


	}

	$scope.searchCharities = function() {
		

		// clear results
		$scope.charities = []

		var url = 'https://api.justgiving.com/1d35ed50/v1/charity/search?pageSize=5&page=1&q=' + $scope.query;
		$http.get(url).success( function(response) {


			// construct SDIurl and append to results
			angular.forEach(response.charitySearchResults, function(charity, key){
				charity.SDIurl = 'http://www.justgiving.com/4w350m3/donation/direct/charity/'
					+ charity.charityId + '/'
					+ '?amount=' + $scope.formData.zakatDue
					+ '&exitUrl=http://www.justgiving.com/'
					+ '&currency=' + $scope.selectedCurrency.name
					+ '&reference=zakat-calc';


				$scope.charities.push(charity)
					

			})
		});

	}

	function getNisabValuesByCurrency() {
		// load nisab values
		$http.get(nisabSourceURL).success( function(response) {

			console.log(response)

			// load nisab values
			$scope.nisab = response

			// set default currency as the first in the list
			$scope.selectedCurrency = $scope.nisab.currencies[0]

		})
	}

	
	getNisabValuesByCurrency()

})
