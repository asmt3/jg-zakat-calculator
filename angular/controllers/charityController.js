app.controller('charityController', function ($scope, $http) {



	$scope.search = function(val) {
		

		// clear results
		$scope.charities = []

		var url = 'https://api.justgiving.com/1d35ed50/v1/charity/search?pageSize=5&page=1&q=' + $scope.query;
		$http.get(url).success( function(response) {
			$scope.charities = response.charitySearchResults;
		});

	}



})
