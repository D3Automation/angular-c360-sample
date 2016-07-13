'use strict';

(function () {
    angular.module('app').controller('AppController', AppController);

    /* @ngInject */
    function AppController($rootScope, $state) {
        var vm = this;
        var _eventPromise = null;
        var _defaultTitle = "D3 C360 Demo";

        //#region Bindable Members

        vm.title = _defaultTitle;

        Object.defineProperty(vm, 'isBusy', {
            enumerable: true,
            configurable: false,
            get: function () {
                return $state.transition || _eventPromise;
            }
        });

        //#endregion

        initialize();

        //#region Private Methods

        function initialize() {
            $rootScope.$on('IsBusy', function (event, args) {
                _eventPromise = args.promise;
            });

            $rootScope.$on('SelectedPartChanged', function (event, part) {
                if (part) {
                    vm.title = part.Name;
                } else {
                    vm.title = _defaultTitle;
                }
            });
        }

        //#endregion
    };
})();