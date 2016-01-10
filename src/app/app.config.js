
export default  function configutator($locationProvider ) {

    $locationProvider.hashPrefix('!');
}

configutator.$inject = ['$locationProvider'];
