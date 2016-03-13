(function(){
	angular.module("bestSellers").factory("bestSellersAPI", function($http){
		var _getBooks = function(){
			return $http.get('http://api.nytimes.com/svc/books/v2/lists/hardcover-nonfiction.json?api-key=709ffb5028ee399ade8fa636d4d8ee1c:1:74645562');
		};

		return {
			getBooks: _getBooks
		};
	});
})();