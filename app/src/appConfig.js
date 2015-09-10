var inject = ['$stateProvider', '$urlRouterProvider', '$compileProvider'];
var config = function ($stateProvider, $urlRouterProvider, $compileProvider) {

	// removes ng-scope annotations in html
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('login', {
			url: '/',
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl as controller'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		});
};
config.$inject = inject;
export default config;
