export default class ItemService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.appId = this.configurationService.config.appId;
        this.restApiKey = this.configurationService.config.restApiKey;
    }

    findAll() {

        var deferred = this.$q.defer();

        var url =  'https://api.parse.com/1/classes/Items';
        this.$http.get({method : 'GET', url : 'https://api.parse.com/1/classes/Users',headers: { 'X-Parse-Application-Id':'qKAVFyIVaj1oQ1HJrnt19EG0D3ipJ3RwKRUgYhWH', 'X-Parse-REST-API-Key':'inr4fxqIuvbdeOzLx4NC1LjpZ1gzaZCnhk4yENFr'}})

            .success((data, status, headers, config)=> {
                deferred.resolve(data);
            })
            .error((data, status) => {
                this.logger.error('XHR Failed for ProductDetailService#find.' + data);
                deferred.reject(data);
            });

        return deferred.promise;
    }
}

ItemService.$inject = ['$http', '$q'];

