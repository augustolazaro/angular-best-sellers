(function(){
	angular.module('bestSellers').directive('book', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/book.html'
		}
	});
})();