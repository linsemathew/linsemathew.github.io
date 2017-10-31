'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$location', '$scope', function($location, $scope) {
	$scope.name = "";
	$scope.submitted = false;

	$scope.submit = function (name){
		console.log('works')
		console.log(name)
		$scope.submitted = true
	}

}]);