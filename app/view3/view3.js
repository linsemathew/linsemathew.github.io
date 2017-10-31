'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$location', '$scope', function($location, $scope) {
	$scope.name = "";
	$scope.submitted = false;

	$scope.submit = function (name){
		console.log('works')
		console.log(name)
		$scope.submitted = true
	}

}]);