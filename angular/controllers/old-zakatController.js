app.controller('zakatController', function ($scope, $http) {



	$scope.updateZakat = function() {

		// calculate value

		$scope.formData.netAssets = 
			+ Number($scope.formData.goldSilver || 0) // if no value, assume 0
			+ Number($scope.formData.cash || 0)
			+ Number($scope.formData.otherSavings || 0)
			+ Number($scope.formData.investment || 0)
			+ Number($scope.formData.owedIn || 0)
			+ Number($scope.formData.stockValue || 0)
			
			- Number($scope.formData.owedOut || 0)
			- Number($scope.formData.otherOutgoingsDue || 0)

		if($scope.formData.netAssets <= $scope.formData.nisabThreshold) {
			$scope.formData.zakatDue = 0
		} else {
			$scope.formData.zakatDue = 
				0.025 * $scope.formData.netAssets
		}



	}



})
