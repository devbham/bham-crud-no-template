
angular.module('bham', [
		'ngRoute',	
		'bham.patientModule'
])
.controller('BhamCtrl', [ '$scope','$location', function($scope, $location){
	$scope.redirect = function(path){
		$location.path(path);
	}
}]);

