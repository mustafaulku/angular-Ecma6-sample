

export default function config($stateProvider) {
    $stateProvider.state('items', {
        url: '/items',
        views: {
            'main': {
                controller: 'ItemsController',
                templateUrl: 'app/items-module/items.html',
                controllerAs: 'vm'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
}

config.$inject = ['$stateProvider'];