(function(){
	var app = angular.module("bestSellers", []);

	app.filter('capitalize', function(){
		return function(text) {
			return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
		}
	});
})();