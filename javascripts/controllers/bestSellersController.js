(function(){
	angular.module("bestSellers").controller("BestSellersController", function($scope, $http, bestSellersAPI){
		var bestSellers = this;
		bestSellers.books = [];
		bestSellersAPI.getBooks()
			.then(function(response){
				bestSellers.books = response.data.results;
				console.log(response.data.results);
			}, function(response){
				$scope.errorMessage = response;
			});
	});
})();