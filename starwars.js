angular
    .module('app' ,[])

    .controller('MainCtrl',['$scope','$http',function($scope, $http){
        var host = 'http://swapi.co/api/';
        $http({
            method: 'GET',
            url: host + 'films/7/'
        }).then(function(response){
            $scope.film = response.data;
            
            console.log($scope.crawl);
        })
    }]);