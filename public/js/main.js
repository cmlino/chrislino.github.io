AOS.init();

var app = angular.module("home", []);

app.controller("home-control", ['$scope','$http',function($scope, $http) {
	$scope.view = 0;
	$scope.one = 'active';
	$scope.items = [['public/css/images/jukebox.png','','JukeBox',"https://github.com/peterg4"]];
}]);