



// NISAB figures
// the URL of scraped Nisab figures
var nisabSourceURL = 'https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/nisab-daily.json';

// used for debugging
// var nisabSourceURL = 'data/nisab.json'

// currencies defined here will augmented by nisab figures,
// if they exist... and then fed into the zakat contoller scope
var desiredCurrencies = [
	{
		"code": "GBP",
		"name": "GBP (Great British Pounds)",
		"symbol": "&pound;"
	},
	{
		"code": "USD",
		"name": "USD  (US Dollars)",
		"symbol": "$"
	},
	{
		"code": "EUR (Euros)",
		"name": "EUR",
		"symbol": "&euro;"
	},
	{
		"code": "HKD",
		"name": "HKD (Hong Kong Dollars)",
		"symbol": "HK$"
	},
	{
		"code": "SGD",
		"name": "SGD (Singapore Dollars)",
		"symbol": "SG$"
	},
	{
		"code": "CAD",
		"name": "CAD (Canadian Dollars)",
		"symbol": "$"
	},
	{
		"code": "AED",
		"name": "AED (United Arab Emirates Dirhams)",
		"symbol": "د.إ"
	},
	{
		"code": "AUD",
		"name": "AUD (Australian Dollars)",
		"symbol": "$"
	},
	{
		"code": "ZAR",
		"name": "ZAR (South African Rand)",
		"symbol": "R"
	}
];
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


app.controller('zakatController', function ($scope, $http, $window) {

	// UI stage [loading | form | search]
	$scope.ui_stage = 'loading';

	// to be loaded from remote source
	$scope.nisab = false;

	// to be determined by user
	$scope.selectedCurrency = false;

	// selected Nisab Bse
	$scope.selectedNisabBase = 'silver'; // default silver

	// all form fields
	$scope.formData = {
		
		// assets
		"value_au": 0, 
		"value_ag": 0, 
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
		"zakatCalculated": 0, // how much we calculate
		"zakatOverride": 0, // their override
		"zakatDue": 0 // the value that is shown, that they can override
	};

	// charity search state
	$scope.showCharityPicker = false;
	$scope.charityQuery = "";
	$scope.charitySearchResults = [
		// {
		// 	name: "Test Name of the Charity",
		// 	SDIurl: "http://www.google.co.uk",
		// 	logoUrl: "http://images.justgiving.com/image/91417188-8ec7-45a0-b725-79f2e2e1468c.jpg"
		// },
		// {
		// 	name: "A super long super long super long super long super long super long super long super long Test Name of the Charity",
		// 	SDIurl: "http://www.google.co.uk",
		// 	logoUrl: "http://images.justgiving.com/image/91417188-8ec7-45a0-b725-79f2e2e1468c.jpg"
		// },
		// {
		// 	name: "Test Name of the Charity",
		// 	SDIurl: "http://www.google.co.uk",
		// 	logoUrl: "http://images.justgiving.com/image/91417188-8ec7-45a0-b725-79f2e2e1468c.jpg"
		// }
	];



	$scope.updateZakatCalculated = function() {

		// calculate net assets
		$scope.formData.netAssets = 
			+ (Number($scope.formData.value_au) || 0) // if NaN, assume 0
			+ (Number($scope.formData.value_ag) || 0) // if NaN, assume 0
			+ (Number($scope.formData.cash) || 0)
			+ (Number($scope.formData.otherSavings) || 0)
			+ (Number($scope.formData.investment) || 0)
			+ (Number($scope.formData.owedIn) || 0)
			+ (Number($scope.formData.stockValue) || 0)
			
			- (Number($scope.formData.owedOut) || 0)
			- (Number($scope.formData.otherOutgoingsDue) || 0);

		// determine nisabThreshold to use
		if ($scope.selectedNisabBase == 'silver') {
			var workingNisabThreshold = $scope.selectedCurrency.threshold_ag;
		} else { // gold
			var workingNisabThreshold = $scope.selectedCurrency.threshold_au;
		}

		if( $scope.formData.netAssets <= workingNisabThreshold ) {
			$scope.formData.zakatCalculated = 0;
		} else {
			$scope.formData.zakatCalculated = 
				Number(0.025 * $scope.formData.netAssets).toFixed(2); // 2dp
		}

	};


	// STAGE CHANGES / UI ANIMATIONS
	$scope.showCalculator = function() {

		$scope.ui_stage = 'form';

		// allow the two stages to displayable
		$(".zk-stage-1, .zk-stage-2").removeClass('hidden-until-nisab-loaded');

		// For debugging
		// $scope.ui_stage = 'search'

	};

	$scope.getStarted = function() {

		$scope.ui_stage = 'form';
		scrollToToppish(true);
	};

	$scope.useZakatCalculated = function() {
		$scope.formData.zakatDue = $scope.formData.zakatCalculated;
		$scope.ui_stage = 'search';
		scrollToToppish(false);

		// register events with GA
		if ($scope.formData.selectedNisabBase == 'silver') {
			$window.ga('send', 'event', 'zakat', 'select', 'sivlernisab');
		} else {
			$window.ga('send', 'event', 'zakat', 'select', 'goldnisab')	;
		}
		$window.ga('send', 'event', 'zakat', 'click', 'calculate');
		
	};

	$scope.useZakatOverride = function() {
		$scope.formData.zakatDue = $scope.formData.zakatOverride;
		$scope.ui_stage = 'search';
		scrollToToppish(false);

		// register event with GA
		$window.ga('send', 'event', 'zakat', 'click', 'ownamount');
	};

	$scope.recalculate = function() {
		$scope.ui_stage = 'form';
		scrollToToppish(true);

		// register event with GA
		$window.ga('send', 'event', 'zakat', 'click', 'recalculate');
	};

	function scrollToToppish(animate) {

		// scrolls to the top of whatever form is showing
		var el = $(".zk-intro");
		var scrollTargetY = el.offset().top + el.height() + 80;

		if (animate) {
			$("html,body").animate({scrollTop: scrollTargetY}, "slow");
		} else {
			window.scrollTo(0, scrollTargetY);
		}

	};



	// SEARCH
	$scope.searchCharities = function() {
		

		// clear results
		$scope.charitySearchResults = [];

		var url = 'https://api.justgiving.com/1d35ed50/v1/charity/search?pageSize=5&page=1&q=' + $scope.charityQuery;
		$http.get(url).success( function(response) {


			// construct SDIurl and append to results
			angular.forEach(response.charitySearchResults, function(charity, key){
				charity.SDIurl = 'http://www.justgiving.com/4w350m3/donation/direct/charity/'
					+ charity.charityId + '/'
					+ '?amount=' + $scope.formData.zakatDue
					+ '&exitUrl=http://www.justgiving.com/'
					+ '&currency=' + $scope.selectedCurrency.name
					+ '&reference=zakat-calc';


				$scope.charitySearchResults.push(charity);
					

			});
		});

	};


	// LOAD NISAB VALUES
	$scope.getNisabValuesByCurrency = function() {
		
		$http.get(nisabSourceURL).success( function(response) {

			// load nisab values
			$scope.nisab = filterNisabResponse(response);

			// set default currency as the first in the list
			$scope.selectedCurrency = $scope.nisab.currencies[0];

			// show Calc
			$scope.showCalculator();

		});
	};

	// Augment with nisab values
	function filterNisabResponse(response) {

		var nisabValues = [];

		for (var i = 0; i < desiredCurrencies.length; i++) {
			var desiredCurrency = desiredCurrencies[i];

			// first, are there any currencies with this code
			var nisabValue = response.currencies.filter(function(currency){
				return currency.code == desiredCurrency.code;
			});

			// as long as there was, add the thresholds
			if (nisabValue.length) {

				desiredCurrency.threshold_au = nisabValue[0].threshold_au;
				desiredCurrency.threshold_ag = nisabValue[0].threshold_ag;

				nisabValues.push(desiredCurrency);
			}

		};

		var filteredResponse = response;
		filteredResponse.currencies = nisabValues;

		return filteredResponse;
		
	};


});