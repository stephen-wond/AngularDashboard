apiViewer.service('getData', function($http){
    this.dataPromise = function(apiQueryString){
        return $http({
            method: 'GET',
            url: baseUrl + apiQueryString,
            headers:{},
        });
    }
});