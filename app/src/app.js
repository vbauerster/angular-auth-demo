import uiRouter from 'angular-ui-router';
import config from 'src/appConfig';
import loginCtrl from 'src/controllers/login';

export default
angular.module('demoApp', ['ui.router'])
    .config(config)
    .controller('loginCtrl', loginCtrl);
