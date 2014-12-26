var app = angular.module('starter.controllers', []);

app.controller('DashCtrl', function($scope) {
});

app.controller('CompaniesCtrl', function($scope, Companies) {
  $scope.companies = Companies.all();

    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
        $scope.addCard();
    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
        $scope.addCard();
    };

    $scope.addCard = function() {

    }
});

app.controller('CompanyDetailCtrl', function($scope, $stateParams, Companies) {
  $scope.company = Companies.get($stateParams.companyId);
});

app.controller('AccountCtrl', function($scope, $http) {
    var baseURL = "http://ec2-54-94-210-220.sa-east-1.compute.amazonaws.com/api/";

    $http.get(baseURL + 'location').
        success(function (data, status, headers, config) {
            $scope.locations = data;
        }).
        error(function (data, status, headers, config) {
            $scope.locations = [{name: 'Florianópolis'}, {name: 'São José'}, {name: 'Palhoça'}];
        });

    $http.get(baseURL + 'user/5480addfd7960ba32fd676a2').
        success(function (data, status, headers, config) {
            $scope.user = data;
        }).
        error(function (data, status, headers, config) {
            $scope.user = {};
        });

    $scope.submit = function () {
        $http.put(baseURL + 'user/5480addfd7960ba32fd676a2', $scope.user).
            success(function (data, status, headers, config) {
                $scope.user = data;
            }).
            error(function (data, status, headers, config) {
                $scope.user = {};
            });
    };
});
