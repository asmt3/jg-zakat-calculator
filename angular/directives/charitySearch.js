app.directive('charitySearch', function ($http) {

    var createDropdown = function (scope, data, searchText) {
        var elem = angular.element('<div class=\"dropdown-container\"></div>');

        data.charitySearchResults.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        for (var i = 0; i < data.charitySearchResults.length; i++) {
            var item = angular.element('<div class=\"dropdown-item\"></div>');

            var wrap = angular.element('<div class=\"dropdown-item-wrap\"></div>');
            item.append(wrap);

            var img = angular.element('<div class=\"charity-logo\"><img src=\"' + data.charitySearchResults[i].logoUrl + '\" alt=\"' + data.charitySearchResults[i].name + ' logo\" /></div>');
            wrap.append(img);
            var text = angular.element("<div class=\"charity-name\"></div>");

            text.append(highlightSearchTerms(searchText, data.charitySearchResults[i].name));

            wrap.append(text);

            var reg = angular.element("<div class=\"charity-reg\"></div>");
            reg.append(data.charitySearchResults[i].registrationNumber);
            wrap.append(reg);

            item.bind('click', data.charitySearchResults[i], scope.charitySelected);
            elem.append(item);
        }

        return elem;
    };

    var highlightSearchTerms = function (searchText, resultText) {
        searchText = searchText.toLowerCase();
        var resultTerms = resultText.split(" ");
        var formattedResult = "";
        for (var i = 0; i < resultTerms.length; i++) {
            if (searchText.indexOf(resultTerms[i].toLowerCase()) > -1) {
                formattedResult += "<strong>" + resultTerms[i] + "</strong> ";
            } else {
                formattedResult += resultTerms[i] + " ";
            }
        }

        return formattedResult;
    }

    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(function (value) {

                if (!value) {
                    ctrl.$setValidity('charitySearch', true);
                    return value;
                }

                if (value.length < 3) {
                    ctrl.$setValidity('charitySearch', false);
                    return value;
                }

                scope.isInSearch = true;

                $http.defaults.headers.common.Accept = 'application/json';

                $http.get('https://api.justgiving.com/1d35ed50/v1/charity/search?pageSize=5&page=1&q=' + ctrl.$viewValue).success(function (data, status, headers, config) {

                    if (scope.isInSearch) {
                        // angular.element('#charity-dropdown').children().remove();
                        // angular.element('#charity-dropdown').append(createDropdown(scope, data, value));
                        console.log(createDropdown(scope, data, value))
                    }

                }).error(function (data, status, headers, config) {

                });


                return value;
            });
        }
    }
});