
import angular from 'angular';
import uirouter from 'angular-ui-router';

import appConfig from './app.config';

import HomeController from './Home/HomeController';

angular.module('myApp',
	[
		uirouter
	])

	.config(appConfig)
	.controller('HomeController', HomeController);