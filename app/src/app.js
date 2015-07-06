import uiRouter from 'angular-ui-router';
import config from 'src/appConfig';
import init from 'src/init';
import authService from 'src/services/authentication';
import loginCtrl from 'src/controllers/login';
import homeCtrl from 'src/controllers/home';

export default
angular.module('demoApp', ['ui.router'])
    .config(config)
    .factory('authService', authService)
    .controller('loginCtrl', loginCtrl)
    .controller('homeCtrl', homeCtrl)
    .run(init);
