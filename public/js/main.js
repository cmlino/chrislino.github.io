var app = angular.module("home", []);

// Here is the Javascript for our controller which we linked (scoped) to the body tag
app.controller("home-control", ['$scope','$http',function($scope, $http) {
	$scope.view = 0;
	$scope.one = 'active';
	$scope.items = [['public/css/images/jukebox.png','','JukeBox',"https://github.com/peterg4"]];
}]);