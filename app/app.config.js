(function () {
    'use strict';

    var app = angular.module('app');

    // Configure Toastr
    toastr.options.timeOut = 2000;
    toastr.options.positionClass = 'toast-bottom-right';

    // Intercept calls to $log and append calls to toastr
    app.config(['$provide', function ($provide) {
        $provide.decorator('$log', ['$delegate', function ($delegate) {
            var appendFn = function (originalFn, fnToAppend) {
                return function () {
                    var args = [].slice.call(arguments);
                    originalFn.apply(null, args);
                    fnToAppend.apply(null, args);
                };
            };

            $delegate.error = appendFn($delegate.error, toastr.error);

            return $delegate;
        }]);
    }]);

    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(false);
        }
    }]);

    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('SET DESIGN KEY HERE');
    }]);
})();