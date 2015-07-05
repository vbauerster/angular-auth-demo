import angular from 'angular';
import main from 'src/app';

angular.element(document).ready(function() {
    console.log(main.name);
    angular.bootstrap(document, [main.name]);
});
