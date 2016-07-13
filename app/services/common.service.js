(function () {
    'use strict';

    angular.module('app')
        .factory('common', common);

    /* @ngInject */
    function common($rootScope, $q, $mdDialog) {
        var service = {
            setBusy: setBusy,
            showError: showError
        };

        initialize();

        return service;

        function initialize() {
            $rootScope.$on('C360ModelUpdating', function (event, args) {
                setBusy(args.promise);
            });

            $rootScope.$on('C360ActionExecuting', function (event, args) {
                setBusy(args.promise);

                args.promise.catch(function (message) {
                    showError({ message: message });
                });
            });
        }

        function setBusy(promise) {
            $rootScope.$broadcast("IsBusy", { promise: promise });
        }

        function showError(error) {
            var mdOptions = {
                templateUrl: 'app/common/errorDialog.html',
                controller: 'ErrorDialogController as vm',
                locals: {
                    error: error
                }
            }

            $mdDialog.show(mdOptions);
        };
    }
})();