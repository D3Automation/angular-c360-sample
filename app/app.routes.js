(function () {
    'use strict';

    var app = angular.module('app');

    // Configure the routes and route resolvers
    app.config(['$stateProvider', '$urlRouterProvider', routeConfigurator]);

    function routeConfigurator($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("model", {
                url: "/",
                templateUrl: 'app/model/model.html',
                controller: 'ModelController as vm',
                resolve: {
                    rootPart: getModel
                }
            })
            .state("error", {
                url: "/error",
                templateUrl: 'app/error/error.html',
                controller: 'ErrorController as vm'
            });
    }

    /* @ngInject */
    function getModel(c360Context, $q, $state) {
        if (c360Context.isModelLoaded()) {
            return $q.when(c360Context.getRoot());
        } else {
            return c360Context.getNewModel()
                .then(function (root) {
                    return root;
                })
                .catch(function () {
                    $state.go('error');
                    return $q.reject();
                });
        }
    }
})();