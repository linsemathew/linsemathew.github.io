'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$location', '$scope', function($location, $scope) {
	$scope.name = "";
	$scope.submitted = false;

	$scope.submit = function (name){
		console.log('works')
		console.log(name)
		$scope.submitted = true
	}

}]);