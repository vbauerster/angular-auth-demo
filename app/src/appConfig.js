var inject = ['$stateProvider', '$urlRouterProvider'];
var config = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        });
        //.state('state1.list', {
        //    url: "/list",
        //    templateUrl: "partials/state1.list.html",
        //    controller: function($scope) {
        //        $scope.items = ["A", "List", "Of", "Items"];
        //    }
        //})
        //.state('state2', {
        //    url: "/state2",
        //    templateUrl: "partials/state2.html"
        //})
        //.state('state2.list', {
        //    url: "/list",
        //    templateUrl: "partials/state2.list.html",
        //    controller: function($scope) {
        //        $scope.things = ["A", "Set", "Of", "Things"];
        //    }
        //});
};
config.$inject = inject;
export default config;