import angular from 'angular';
import main from 'src/app';

angular.element(document).ready(function() {
    angular.bootstrap(document, [main.name]);
});
