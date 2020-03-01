var app = angular.module("home", []);

// Here is the Javascript for our controller which we linked (scoped) to the body tag
app.controller("home-control", ['$scope','$http',function($scope, $http) {
	$scope.view = 0;
	$scope.one = 'active';
	$scope.activate1 = function(){
		$scope.one = "active";
		$scope.two = "";
		$scope.three = "";
		$scope.four = "";
	}
	$scope.activate2 = function(){
		$scope.one = "";
		$scope.two = "active";
		$scope.three = "";
		$scope.four = "";
	}
	$scope.activate3 = function(){
		$scope.one = "";
		$scope.two = "";
		$scope.three = "active";
		$scope.four = "";
	}
	$scope.activate4 = function(){
		$scope.one = "";
		$scope.two = "";
		$scope.three = "";
		$scope.four = "active";
	}
}]);