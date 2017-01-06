var movieApp = angular.module('MovieApp', []);
movieApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

movieApp.controller('MovieCtrl', function ($scope, $http) {

   // When we first load our Controller, we'll call our first web service, which fetchs a list of all Customer records.
    var config = {headers:  {
        'X-Mashape-Key':'kD28tZLb6HmshDf2CQzZ1JoTJYOop1XLKqrjsniQAWDO9fm7ut'
    }};

    $scope.submitUrl = function () {
        document.getElementById("loadingBarDiv").className="show";
        $http.get('https://sphirelabs-imdb-unofficial.p.mashape.com/1.php?movie=' + $scope.moviename, config)
        .success(function (data) {
                document.getElementById("loadingBarDiv").className="hide";
                $scope.MovieDesc=data;
        })
        .error(function (data, status, headers, config) {
            //$scope.errorMessage = "Couldn't load the list of customers, error # " + status;
            console.log("Oops...there is an error");
        });
    }
});