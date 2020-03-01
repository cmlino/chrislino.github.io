var app = angular.module("home", []);

// Here is the Javascript for our controller which we linked (scoped) to the body tag
app.controller("home-control", ['$scope','$http',function($scope, $http) {
	$scope.view = 0;
	$scope.one = 'active';
	$scope.activate = function(){
		$scope.one = "";
		$scope.two = "active";
		$scope.three = "";
		$scope.four = "";
	}
}]);