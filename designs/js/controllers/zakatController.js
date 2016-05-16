// var nisabSourceURL = 'https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/nisab.json'
var nisabSourceURL = 'data/nisab.json'

app.controller('zakatController', function ($scope, $http) {


	// UI stage [loading | form | search]
	$scope.ui_stage = 'loading'

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
	}

	// charity search state
	$scope.showCharityPicker = false
	$scope.charityQuery = ""
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
	]



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
			- (Number($scope.formData.otherOutgoingsDue) || 0)

		// determine nisabThreshold to use
		if ($scope.selectedNisabBase == 'silver') {
			var workingNisabThreshold = $scope.selectedCurrency.threshold_ag
		} else { // gold
			var workingNisabThreshold = $scope.selectedCurrency.threshold_au
		}

		if( $scope.formData.netAssets <= workingNisabThreshold ) {
			$scope.formData.zakatCalculated = 0
		} else {
			$scope.formData.zakatCalculated = 
				Number(0.025 * $scope.formData.netAssets).toFixed(2) // 2dp
		}

	}

	$scope.showCalculator = function() {

		$scope.ui_stage = 'form'

		// For debugging
		// $scope.ui_stage = 'search'

	}

	$scope.getStarted = function() {

		$scope.ui_stage = 'form'
		scrollToToppish(true)
	}

	$scope.useZakatCalculated = function() {
		$scope.formData.zakatDue = $scope.formData.zakatCalculated;

		
		$scope.ui_stage = 'search'
		
		animateToStage2()
	}

	$scope.useZakatOverride = function() {
		$scope.formData.zakatDue = $scope.formData.zakatOverride;
		
		$scope.ui_stage = 'search'
		
		animateToStage2()
	}

	$scope.recalculate = function() {
		$scope.ui_stage = 'form'
		showStage1()
	}

	$scope.searchCharities = function() {
		

		// clear results
		$scope.charitySearchResults = []

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


				$scope.charitySearchResults.push(charity)
					

			})
		});

	}

	function getNisabValuesByCurrency() {
		// load nisab values

		var simulatedDelay = 3//000;

		setTimeout(function(){

			$http.get(nisabSourceURL).success( function(response) {

				// load nisab values
				$scope.nisab = response

				// set default currency as the first in the list
				$scope.selectedCurrency = $scope.nisab.currencies[0]

				// show Calc
				$scope.showCalculator()

			})
		}, simulatedDelay)
	}


	function scrollToToppish(animate) {

		// scrolls to the top of whatever form is showing
		var el = $(".zk-intro");
		var scrollTargetY = el.position().top + el.height() + 80;

		if (animate) {
			$("body").animate({scrollTop: scrollTargetY}, "slow");
		} else {
			$("body").scrollTop(scrollTargetY);	
		}
		

	}

	function animateToStage2() {


		$(".zk-stage-1").animate({opacity:0}, function(){

			
			$(".zk-stage-2").css({
				display: "block",
				opacity: 0
			})

			scrollToToppish(false)

			$(".zk-stage-1").animate({height:0}, function(){
				$(".zk-stage-2").animate({
					opacity:1
				})
			})

		})
	}

	function showStage1() {
		$(".zk-stage-1").css({
			display: "block",
			opacity: 1,
			height:'auto'
		});

		$(".zk-stage-2").css({
			display: "none",
			opacity: 0
		});

		scrollToToppish(false)

	}

	
	getNisabValuesByCurrency()


})


// // make nicely formatted donation amount
// .directive('format', ['$filter', function ($filter) {
//     return {
//         require: '?ngModel',
//         link: function (scope, elem, attrs, ctrl) {
//             if (!ctrl) return;

//             ctrl.$formatters.unshift(function (a) {
//                 return $filter(attrs.format)(ctrl.$modelValue, '') // no currency symbol
//             });

//             elem.bind('blur', function(event) {
//                 var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
//                 elem.val($filter(attrs.format)(plainNumber, '')); // no currency symbol
//             });
//         }
//     };
// }])

// .directive('scrollOnClick', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, $elm) {

//     	// determine target
//     	var $target = angular.element($elm.attr('href'))

//       $elm.on('click', function() {
//         $("body").animate({scrollTop: $target.offset().top}, "slow");
//       });
//     }
//   }
// })
