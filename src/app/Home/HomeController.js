import angular from 'angular';

export default class HomeController {
	constructor($scope) {

		$scope.person = 'World';

	}
}

HomeController.$inject = ['$scope', '$location'];