//import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from 'src/config';


var app = angular.module('demo', ['ui.router']);
app.config(config);
    //.controller('WelcomeController', ['$scope', function($scope) {
    //    $scope.greeting = 'Welcome!';
    //}]);

export default app;