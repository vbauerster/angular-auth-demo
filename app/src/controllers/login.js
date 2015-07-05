var inject = ['$scope'];
var controller = function ($scope) {
    $scope.greeting = 'Hello World';
};
controller.$inject = inject;
export default controller;
