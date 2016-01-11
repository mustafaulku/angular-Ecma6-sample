import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './items.config';
import ItemsController from './items.controller';


export default angular.module('myApp.items', [uirouter])
    .config(config)
    .controller('ItemsController', ItemsController)
    .name;