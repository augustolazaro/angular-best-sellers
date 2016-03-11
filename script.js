(function(){
	var app = angular.module("bestSellers", []);

	app.controller("booksController", function($scope, $http){
		books = [];
		$http.get('http://api.nytimes.com/svc/books/v2/lists/2008-10-01/hardcover-nonfiction.json?api-key=709ffb5028ee399ade8fa636d4d8ee1c:1:74645562')
			.then(function(response){
				$scope.message = response;
			});
	});
})();