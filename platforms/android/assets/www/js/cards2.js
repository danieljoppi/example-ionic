/**
 * Created by daniel.joppi on 12/3/14.
 */
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter.cards', ['ionic.contrib.ui.tinderCards'])

    .config(function($stateProvider, $urlRouterProvider) {

    })

    .directive('noScroll', function($document) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {

                $document.on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }
    });

