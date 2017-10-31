'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$location', '$scope', function($location, $scope) {
	$scope.name = "";
	$scope.submitted = false;
	$scope.attending = false;
	$scope.notAttending = true;

	$scope.submit = function (name){
		console.log('works')
		console.log(name)
		$scope.submitted = true
	}

	$scope.attending = function(){

	}

	$scope.notAttending = function(){

	}

}]);