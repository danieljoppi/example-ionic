// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter.cards', ['ionic', 'ionic.contrib.ui.cards'])

    .directive('noScroll', function($document) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {
                $document.on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }
    })

    .controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate, $http) {
        $scope.companies = [];
        var baseURL = "http://ec2-54-94-210-220.sa-east-1.compute.amazonaws.com/api/";
        var baseImageURL = baseURL+'image/';

        $http.get(baseURL + 'company').success(function (data) {
            $scope.companies = data.map(function (elem, ind) {
                return {id: ind, name: elem.name, url: baseImageURL + elem.image};
            });
        });

        $scope.cardSwiped = function(index) {
            $scope.addCard();
        };

        $scope.cardDestroyed = function(index) {
            $scope.companies.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = $scope.companies[Math.floor(Math.random() * $scope.companies.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        };

        $scope.goAway = function() {
            var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
            card.swipe();
        };
    });
