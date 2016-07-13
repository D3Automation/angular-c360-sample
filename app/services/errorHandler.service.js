(function () {
    'use strict';

    angular
        .module('app')
        .factory('errorHandler', errorHandlerService);

    /* @ngInject */
    function errorHandlerService($q, $log, $http, common) {
        var service = {
            handleError: handleError,
            createErrorFromMessage: createErrorFromMessage
        };

        return service;

        //#region Functions

        function handleError(error) {
            var errorToShow = null;

            if (isFormattedError(error)) {
                errorToShow = error;
            }
            else {
                errorToShow = createErrorFromMessage('An unknown error occurred on the server');
            }

            common.showError(errorToShow);
        }

        function createErrorFromMessage(message) {
            return {
                message: message,
                details: ''
            }
        }

        function isFormattedError(data) {
            return angular.isDefined(data.message) &&
                angular.isDefined(data.details);
        }

        //
    }
})();